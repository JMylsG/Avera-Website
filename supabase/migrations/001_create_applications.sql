-- Run this in Supabase SQL Editor (Dashboard > SQL Editor)
-- Table for early access applications with duplicate prevention by email

create table if not exists public.applications (
  id uuid default gen_random_uuid() primary key,
  email text not null,
  device_answer text not null,
  created_at timestamptz default now()
);

create unique index if not exists applications_email_key on public.applications (email);
