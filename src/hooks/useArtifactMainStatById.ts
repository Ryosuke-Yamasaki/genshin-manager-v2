import { ArtifactMainStats } from "@/lib/interface";
import { getArtifactMainStatById } from "@/lib/supabase/data";
import { useEffect, useState } from "react";

const useArtifactMainStatById = (form: any) => {
  const [mainStat, setMainStat] = useState<ArtifactMainStats | null>(null);

  useEffect(() => {
    const fetchArtifactMainStat = async (id: number) => {
      const { data, error } = await getArtifactMainStatById(id);
      if (error) throw error;
      setMainStat(data as ArtifactMainStats);
    };
    fetchArtifactMainStat(form.watch("mainStatId"));
  }, [form.watch("mainStatId")]);

  return mainStat;
};

export default useArtifactMainStatById;
