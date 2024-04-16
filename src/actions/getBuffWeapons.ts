import { createClient } from "@/lib/supabase/client";

export const GetBuffWeapons = async () => {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("Weapons")
    .select(
      "BuffWeapons!inner(*),WeaponImageUrls!inner(*),WeaponRefinements(*)"
    )
    .order("id");

  if (error) throw console.log(error);

  return data;
};
