import { createClient } from "./client";

const supabase = createClient();

export const getArtifactTypes = async () => {
  const types = await supabase.from("ArtifactTypes").select();
  return types;
};

export const getArtifactMainStatById = async (id: number) => {
  const mainStats = await supabase
    .from("ArtifactMainStats")
    .select()
    .eq("statId", id)
    .single();
  return mainStats;
};
