import { createClient } from "@/lib/supabase/client";

export const GetBuffArtifacts = async () => {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("ArtifactSets")
    .select(
      "fourPieceBonuses,BuffArtifacts!inner(*),Artifacts!inner(ArtifactIcons!inner(*))"
    )
    .order("id");

  if (error) throw console.log(error);

  return data;
};
