# Supabase events CMS setup

This directory contains SQL helpers for provisioning the production Supabase project that powers the events CMS.

## Usage

1. Log in to the Supabase dashboard and open the project at `https://nyfqdcxrsdhrdhisksdt.supabase.co`.
2. Open the SQL editor and run the statements from [`schema.sql`](./schema.sql). This creates the tables, triggers, row level security (RLS) policies, and public views required by the Next.js application.
3. Run the seed script in [`seed/initial_events.sql`](./seed/initial_events.sql) to backfill the database with the events that currently drive the website.
4. Configure Google OAuth under **Authentication → Providers** and restrict admin access to `t20avnish@gmail.com`. The RLS policies in `schema.sql` already allow that account to manage data via Supabase clients.
5. Populate the environment variables from `.env.example` with the project URL, anon key, and service-role key as part of the deployment pipeline.

Once the schema and seed data are in place, the `/events` page will automatically hydrate from the database when the Supabase credentials are available. Without credentials the UI falls back to the existing hard-coded data so the site remains functional.
