import supabase from "./supabase";

export async function addUser(user) {
  const { data, error } = await supabase.from("users").insert(user).select("*");

  return { data, error };
}

export async function getUser(userId) {
  if (userId === null) return;

  const { data: users, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", userId);

  return { users, error };
}

export async function updateUser({ userId, ...newData }) {
  const { data, error } = await supabase
    .from("users")
    .update(newData)
    .eq("id", userId)
    .select("*");

  return { data, error };
}
