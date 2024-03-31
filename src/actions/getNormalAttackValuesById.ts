import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

export const GetNormalAttackValuesById = async (id: string) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase
    .from("NormalAttackValues")
    .select()
    .eq("characterId", id)
    .order("id");

  if (error) throw console.log(error);

  return data;
};
