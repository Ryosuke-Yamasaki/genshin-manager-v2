import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

export const GetWeaponsByTypeId = async (id: string) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase
    .from("Weapons")
    .select(
      "*,WeaponImageUrls!inner(*),WeaponTypes!inner(*),Stats!inner(*),WeaponBaseAttacks(*),WeaponRefinements(*),WeaponSubStats(*)"
    )
    .eq("weaponTypeId", id);

  if (error) throw console.log(error);

  return data;
};
