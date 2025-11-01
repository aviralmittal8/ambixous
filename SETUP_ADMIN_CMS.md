# Ambixous Events CMS - Setup Guide

## Overview
This CMS allows authorized admins to manage upcoming and past events displayed on the website. The system uses Supabase for authentication and database management, with admin access controlled through a whitelist.

## Prerequisites
- Supabase integration already connected to the project
- Environment variables already set up

## Setup Steps

### 1. Create Database Tables
First, run the database creation script to set up the events and admins tables:

**In your v0 interface:**
- Go to the "Files" section
- Find `scripts/001_create_events_tables.sql`
- This script creates:
  - `events` table for storing event data
  - `admins` table for managing admin access
  - Row Level Security (RLS) policies to ensure only admins can modify events

### 2. Create Supabase Auth User
Create an auth user account for the admin:

1. Go to Supabase dashboard → Authentication → Users
2. Click "Create new user" and use:
   - **Email:** t20avnish@gmail.com
   - **Password:** (strong password)
3. **Copy the user ID** (UUID format) from the created user

### 3. Grant Admin Access
Add the user to the admins table:

1. Go to Supabase dashboard → SQL Editor
2. Run this query (replace `USER_ID` with the UUID copied above):

\`\`\`sql
INSERT INTO public.admins (id, email, name)
VALUES ('USER_ID', 't20avnish@gmail.com', 'Ambixous Admin')
ON CONFLICT (email) DO NOTHING;
\`\`\`

### 4. Access the Admin Dashboard
Once setup is complete:

1. Navigate to: `https://www.ambixous.in/admin/auth/login`
2. Login with:
   - **Email:** t20avnish@gmail.com
   - **Password:** (the password you created)
3. You'll be redirected to `/admin/events` - the event management dashboard

## Admin Dashboard Features

### Managing Events

**Add Event:**
- Click "Add Event" button
- Fill in event details:
  - **Title:** Event name
  - **Description:** Detailed description
  - **Date & Time:** When the event occurs
  - **Type:** Upcoming or Past
  - **Location:** Event location
  - **Image URL:** (optional) Event image link
- Click "Create Event"

**Edit Event:**
- Click "Edit" on any event card
- Modify details and click "Update Event"

**Delete Event:**
- Click "Delete" on any event card
- Confirm deletion

### Event Display

**Upcoming Events:**
- Displayed on `/events` page in the "Upcoming Events" section
- Filtered automatically by event type

**Past Events:**
- Displayed on `/events` page in the "Past Highlights" section
- Shows all events marked as "Past"

## Security Notes

- Only users added to the `admins` table can access the CMS
- All events are publicly viewable, but only admins can modify them
- Row Level Security (RLS) prevents unauthorized database access
- Passwords are securely managed by Supabase

## Troubleshooting

**Can't login:**
- Verify email and password are correct
- Check that the user exists in Supabase Authentication
- Confirm the user is added to the `admins` table

**Events not showing:**
- Verify events exist in the database via Supabase dashboard
- Check that `event_type` is set to "upcoming" or "past"
- Ensure the date is formatted correctly

**RLS Policy Errors:**
- These are expected if you try to modify events without admin access
- Contact an admin to grant you access

## Adding More Admins

To grant admin access to another user:

1. Create the user in Supabase Authentication
2. Copy their user ID
3. Run in SQL Editor:

\`\`\`sql
INSERT INTO public.admins (id, email, name)
VALUES ('USER_ID', 'email@example.com', 'Admin Name');
\`\`\`

---

**Admin Dashboard URL:** `/admin/events`  
**Admin Login URL:** `/admin/auth/login`
