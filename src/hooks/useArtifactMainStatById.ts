import { ArtifactMainStats } from "@/lib/interface";
import { getArtifactMainStatById } from "@/lib/supabase/data";
import { useEffect, useState } from "react";

const useArtifactMainStatById = (form: any) => {
  const [mainStats, setMainStats] = useState<ArtifactMainStats | null>(null);

  useEffect(() => {
    const fetchArtifactMainStat = async (id: number) => {
      const { data, error } = await getArtifactMainStatById(id);
      if (error) throw error;
      setMainStats(data as ArtifactMainStats);
    };
    fetchArtifactMainStat(form.getValues("mainStatId"));
  }, [form.watch("mainStatId")]);

  return mainStats;
};

export default useArtifactMainStatById;
