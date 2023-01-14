import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kwcugqfhzhpryphetfrq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3Y3VncWZoemhwcnlwaGV0ZnJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI5MzkyMzEsImV4cCI6MTk4ODUxNTIzMX0.lKYFzeZolk73R3smwiuIzQoO4ZjNr9ufwPyP65Zmakg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
