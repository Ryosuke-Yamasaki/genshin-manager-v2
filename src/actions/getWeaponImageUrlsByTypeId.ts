import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

export const GetWeaponImageUrlsByTypeId = async (id: number[]) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase
    .from("WeaponImageUrls")
    .select()
    .in("weaponId", id);

  if (error) throw console.log(error);

  return data;
};
