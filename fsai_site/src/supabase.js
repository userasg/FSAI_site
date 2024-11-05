// src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://odeqpfsvtuwxarfpqqwl.supabase.co'; // replace with your actual Project URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kZXFwZnN2dHV3eGFyZnBxcXdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA4MDc5MDYsImV4cCI6MjA0NjM4MzkwNn0._hLnhmMfI1ewJEOb7EQqSPPaDM_6CHro0bq2EbLSTJI'; // replace with your actual Anon Key
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
