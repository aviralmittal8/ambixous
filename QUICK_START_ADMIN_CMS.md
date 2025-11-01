# Admin CMS - Quick Start Guide

## Setup Instructions

Your Ambixous Events Admin CMS is ready! Follow these 2 simple steps:

### Step 1: Set Environment Variable

Add this to your Vercel project environment variables in the v0 Vars section:

\`\`\`
ADMIN_PASSWORD=YourSecurePassword123!@#
\`\`\`

(Or the setup script will use the default: `AmbixousAdmin123!@#`)

### Step 2: Run Setup Script

Execute the automated setup script:

\`\`\`bash
node scripts/setup-admin-cms.mjs
\`\`\`

This will automatically:
- ✓ Create database tables (events & admins)
- ✓ Set up Row Level Security (RLS) policies
- ✓ Create the admin user account
- ✓ Grant admin permissions

### Step 3: Access Admin Dashboard

Once setup completes:

1. Go to: `https://www.ambixous.in/admin/auth/login`
2. Sign in with:
   - **Email:** `t20avnish@gmail.com`
   - **Password:** Your chosen password (or `AmbixousAdmin123!@#`)
3. You'll be redirected to `/admin/events` dashboard

## Admin Dashboard Features

**Add Event**
- Click "Add Event" button
- Fill event details (title, description, date, location, image)
- Select event type (Upcoming or Past)
- Click "Create Event"

**Edit Event**
- Click "Edit" on any event card
- Modify details as needed
- Click "Update Event"

**Delete Event**
- Click "Delete" on any event card
- Confirm deletion

## How It Works

- **Public Events Page** (`/events`): Automatically displays all events from the database
  - Upcoming events in "Upcoming Events" section
  - Past events in "Past Highlights" section
- **Admin Dashboard** (`/admin/events`): Only accessible to authorized admins
- **Security**: Uses Supabase Row Level Security (RLS) to prevent unauthorized access

## Troubleshooting

**Setup script fails:**
- Verify `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are set in Vars
- Check that you have the correct Supabase project selected

**Can't log in:**
- Verify email and password are correct
- Try the password you set in `ADMIN_PASSWORD` env var

**Events not showing on public page:**
- Verify events exist in Supabase dashboard
- Check that event_type is "upcoming" or "past"
- Ensure dates are valid

## Adding More Admins

To grant admin access to another email:

\`\`\`sql
-- In Supabase SQL Editor:
INSERT INTO public.admins (id, email, name)
VALUES ('[USER_ID]', 'newemail@example.com', 'Admin Name');
\`\`\`

Get `USER_ID` from Supabase Authentication → Users panel.

---

**Questions?** Check the full setup guide or review the CMS components in the codebase.
