import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

export const GetCharacterById = async (id: string) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase
    .from("Characters")
    .select(
      "*,Visions(*),WeaponTypes(*),Genders(*),Regions(*),CharacterBaseHps(level1_20,level20_20,level20_40,level40_40,level40_50,level50_50,level50_60,level60_60,level60_70,level70_70,level70_80,level80_80,level80_90,level90_90),CharacterBaseAttacks(level1_20,level20_20,level20_40,level40_40,level40_50,level50_50,level50_60,level60_60,level60_70,level70_70,level70_80,level80_80,level80_90,level90_90),CharacterBaseDefenses(level1_20,level20_20,level20_40,level40_40,level40_50,level50_50,level50_60,level60_60,level60_70,level70_70,level70_80,level80_80,level80_90,level90_90),CharacterAscensionBonusStats(Stats(*),level1_20,level20_20,level20_40,level40_40,level40_50,level50_50,level50_60,level60_60,level60_70,level70_70,level70_80,level80_80,level80_90,level90_90)"
    )
    .eq("id", id)
    .single();

  if (error) throw console.log(error);

  return data;
};
