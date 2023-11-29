import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pqvzbmvpbsfjuqeluxlm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxdnpibXZwYnNmanVxZWx1eGxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDExODY2NDAsImV4cCI6MjAxNjc2MjY0MH0.cYU-l810bUsV95TUI1orUK0r8g_NWz_nkqAnA32Zrls";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
