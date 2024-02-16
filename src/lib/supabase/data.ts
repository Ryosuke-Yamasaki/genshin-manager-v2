import { createClient } from "./client";

const supabase = createClient();

const getArtifactTypes = async () => {
  const types = await supabase.from("ArtifactTypes").select();
  return types;
};

const getArtifactMainStatById = async (id: number) => {
  const mainStats = await supabase
    .from("ArtifactMainStats")
    .select()
    .eq("statId", id)
    .single();
  return mainStats;
};

const getArtifactIcons = async () => {
  const icons = await supabase.from("ArtifactIcons").select();
  return icons;
};

const getArtifactById = async (id: number) => {
  const artifact = await supabase
    .from("Artifacts")
    .select("*,ArtifactSets(*)")
    .eq("id", id)
    .single();
  return artifact;
};

const getStatById = async (id: number) => {
  const stats = await supabase.from("Stats").select().eq("id", id).single();
  return stats;
};

export {
  getArtifactTypes,
  getArtifactMainStatById,
  getArtifactIcons,
  getArtifactById,
  getStatById,
};
