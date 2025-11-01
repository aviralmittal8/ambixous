import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const ADMIN_EMAIL = 't20avnish@gmail.com';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'AmbixousAdmin123!@#';

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.error('[v0] Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

async function setupAdminCMS() {
  try {
    console.log('[v0] Starting Admin CMS setup...\n');

    // Step 1: Create tables
    console.log('[v0] Creating database tables...');
    const { error: tableError } = await supabase.rpc('exec', {
      sql: `
        CREATE TABLE IF NOT EXISTS public.events (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          title TEXT NOT NULL,
          description TEXT NOT NULL,
          date TIMESTAMP NOT NULL,
          location TEXT NOT NULL,
          image_url TEXT,
          event_type TEXT NOT NULL DEFAULT 'upcoming',
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS public.admins (
          id UUID PRIMARY KEY,
          email TEXT NOT NULL UNIQUE,
          name TEXT,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
        ALTER TABLE public.admins ENABLE ROW LEVEL SECURITY;

        CREATE POLICY IF NOT EXISTS "Events are viewable by anyone"
          ON public.events FOR SELECT USING (true);

        CREATE POLICY IF NOT EXISTS "Only admins can insert events"
          ON public.events FOR INSERT
          WITH CHECK (EXISTS (SELECT 1 FROM public.admins WHERE admins.id = auth.uid()));

        CREATE POLICY IF NOT EXISTS "Only admins can update events"
          ON public.events FOR UPDATE
          USING (EXISTS (SELECT 1 FROM public.admins WHERE admins.id = auth.uid()));

        CREATE POLICY IF NOT EXISTS "Only admins can delete events"
          ON public.events FOR DELETE
          USING (EXISTS (SELECT 1 FROM public.admins WHERE admins.id = auth.uid()));

        CREATE POLICY IF NOT EXISTS "Only admins can view admins"
          ON public.admins FOR SELECT
          USING (auth.uid() IN (SELECT id FROM public.admins));

        CREATE POLICY IF NOT EXISTS "Only admins can insert admins"
          ON public.admins FOR INSERT
          WITH CHECK (EXISTS (SELECT 1 FROM public.admins WHERE admins.id = auth.uid()));
      `
    });

    if (tableError && !tableError.message.includes('already exists')) {
      throw new Error(`Database setup failed: ${tableError.message}`);
    }
    console.log('[v0] ✓ Database tables created\n');

    // Step 2: Create auth user
    console.log(`[v0] Creating auth user: ${ADMIN_EMAIL}`);
    const { data: authUser, error: authError } = await supabase.auth.admin.createUser({
      email: ADMIN_EMAIL,
      password: ADMIN_PASSWORD,
      email_confirm: true
    });

    if (authError) {
      if (authError.message.includes('already exists')) {
        console.log('[v0] ⚠ User already exists, using existing user\n');
        // Fetch existing user
        const { data: existingUsers, error: fetchError } = await supabase.auth.admin.listUsers();
        if (fetchError) throw fetchError;
        const existingUser = existingUsers.users.find(u => u.email === ADMIN_EMAIL);
        if (!existingUser) throw new Error('Could not find existing user');
        authUser = existingUser;
      } else {
        throw authError;
      }
    } else {
      console.log('[v0] ✓ Auth user created\n');
    }

    // Step 3: Add to admins table
    console.log(`[v0] Adding user to admins table`);
    const { error: adminError } = await supabase
      .from('admins')
      .insert({
        id: authUser.id,
        email: ADMIN_EMAIL,
        name: 'Ambixous Admin'
      })
      .select();

    if (adminError && !adminError.message.includes('duplicate')) {
      throw adminError;
    }
    console.log('[v0] ✓ Admin access granted\n');

    // Success message
    console.log('════════════════════════════════════════════════');
    console.log('✓ Admin CMS Setup Complete!');
    console.log('════════════════════════════════════════════════\n');
    console.log('Admin Dashboard URL: /admin/events');
    console.log('Login URL: /admin/auth/login');
    console.log(`Email: ${ADMIN_EMAIL}`);
    console.log(`Password: ${ADMIN_PASSWORD}`);
    console.log('\n⚠ Save these credentials securely!\n');

  } catch (error) {
    console.error('[v0] Setup failed:', error.message);
    process.exit(1);
  }
}

setupAdminCMS();
