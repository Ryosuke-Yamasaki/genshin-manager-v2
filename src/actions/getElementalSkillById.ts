import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

export const GetElementalSkillById = async (id: string) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase
    .from("ElementalSkills")
    .select()
    .eq("characterId", id)
    .single();

  if (error) throw console.log(error);

  return data;
};
