import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://nizmqowlfgdjdpkhyleb.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pem1xb3dsZmdkamRwa2h5bGViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUwMjk0NzcsImV4cCI6MjA3MDYwNTQ3N30.lBJyZxqDmK8YaLejzo0SHv8UJvMdOz-9Y-IPoWZElUA'

if(SUPABASE_URL === 'https://<PROJECT-ID>.supabase.co' || SUPABASE_ANON_KEY === '<ANON_KEY>'){
  throw new Error('Missing Supabase variables');
}

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true
  }
})

export default supabase