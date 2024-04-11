import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

export const GetCharacterById = async (id: string) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase
    .from("Characters")
    .select(
      "*,Visions(*),WeaponTypes(*),Genders(*),Regions(*),CharacterBaseHps(*),CharacterBaseAttacks(*),CharacterBaseDefenses(*),CharacterAscensionBonusStats(*,Stats(*)),Constellations!inner(*),CharacterImageUrls!inner(*),PassiveTalents!inner(*)"
    )
    .eq("id", id)
    .single();

  if (error) throw console.log(error);

  return data;
};
