import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

export const GetCharacters = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase
    .from("Characters")
    .select(
      "*,Visions(*),WeaponTypes(*),Genders(*),Regions(*),CharacterBaseHps(level90_90),CharacterBaseAttacks(level90_90),CharacterBaseDefenses(level90_90),CharacterAscensionBonusStats(Stats(*))"
    )
    .order("id");

  if (error) throw console.log(error);

  return data;
};
