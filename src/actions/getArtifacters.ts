import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

export const GetArtifacters = async (id: string) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase
    .from("Artifacters")
    .select(
      "*,ArtifacterSubOptions(*,Stats(*)),ArtifactTypes(*),ArtifactSets(*,ArtifactSetBonusValues(*)),Stats(*),ArtifactIcons!inner(*),ArtifactMainStats(*),Artifacts(*)"
    )
    .eq("userId", id);

  if (error) throw console.log(error);

  return data;
};
