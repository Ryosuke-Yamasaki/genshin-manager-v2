import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

export const GetElementalSkillValuesById = async (id: string) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase
    .from("ElementalSkillValues")
    .select()
    .eq("characterId", id)
    .order("id");

  if (error) throw console.log(error);

  return data;
};
