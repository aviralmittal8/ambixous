-- Create events table for upcoming events
CREATE TABLE IF NOT EXISTS public.events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  date TIMESTAMP NOT NULL,
  location TEXT NOT NULL,
  image_url TEXT,
  event_type TEXT NOT NULL DEFAULT 'upcoming', -- 'upcoming' or 'past'
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create admin table to manage who has access
CREATE TABLE IF NOT EXISTS public.admins (
  id UUID PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Enable Row Level Security
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admins ENABLE ROW LEVEL SECURITY;

-- Events RLS Policies (public read, admin write)
CREATE POLICY "Events are viewable by anyone"
  ON public.events FOR SELECT
  USING (true);

CREATE POLICY "Only admins can insert events"
  ON public.events FOR INSERT
  WITH CHECK (EXISTS (
    SELECT 1 FROM public.admins 
    WHERE admins.id = auth.uid()
  ));

CREATE POLICY "Only admins can update events"
  ON public.events FOR UPDATE
  USING (EXISTS (
    SELECT 1 FROM public.admins 
    WHERE admins.id = auth.uid()
  ));

CREATE POLICY "Only admins can delete events"
  ON public.events FOR DELETE
  USING (EXISTS (
    SELECT 1 FROM public.admins 
    WHERE admins.id = auth.uid()
  ));

-- Admins RLS Policies (only admins can view/manage admin table)
CREATE POLICY "Only admins can view admins"
  ON public.admins FOR SELECT
  USING (auth.uid() IN (SELECT id FROM public.admins));

CREATE POLICY "Only admins can insert admins"
  ON public.admins FOR INSERT
  WITH CHECK (EXISTS (
    SELECT 1 FROM public.admins 
    WHERE admins.id = auth.uid()
  ));
