import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

export const GetConstellationsById = async (id: string) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase
    .from("Constellations")
    .select()
    .eq("characterId", id)
    .order("id");

  if (error) throw console.log(error);

  return data;
};
