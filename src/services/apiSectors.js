import supabase from "./supabase";

export async function getSectors() {
  let { data: sectors, error } = await supabase.from("Sectors").select("*");

  return { sectors, error };
}
