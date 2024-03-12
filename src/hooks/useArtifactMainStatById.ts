import { ArtifactMainStats } from "@/lib/interface";
import { getArtifactMainStatById } from "@/lib/supabase/data";
import { useEffect, useState } from "react";

const useArtifactMainStatById = (id: string) => {
  const [mainStat, setMainStat] = useState<ArtifactMainStats | null>(null);

  useEffect(() => {
    const fetchArtifactMainStat = async (id: string) => {
      const { data, error } = await getArtifactMainStatById(id);
      if (error) throw error;
      setMainStat(data as ArtifactMainStats);
    };
    fetchArtifactMainStat(id);
  }, [id]);

  return mainStat;
};

export default useArtifactMainStatById;
