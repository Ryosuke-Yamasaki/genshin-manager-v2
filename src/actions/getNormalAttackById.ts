import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

export const GetNormalAttackById = async (id: string) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase
    .from("NormalAttacks")
    .select()
    .eq("characterId", id)
    .single();

  if (error) throw console.log(error);

  return data;
};
