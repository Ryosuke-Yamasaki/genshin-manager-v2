import { Artifacts } from "@/lib/interface";
import { getArtifactById } from "@/lib/supabase/data";
import { useEffect, useState } from "react";

const useArtifactById = (artifactId: number) => {
  const [artifact, setArtifact] = useState<Artifacts | null>(null);

  useEffect(() => {
    const fetchArtifact = async (id: number) => {
      const { data, error } = await getArtifactById(id);
      if (error) throw error;
      setArtifact(data as Artifacts);
    };
    fetchArtifact(artifactId);
  }, [artifactId]);

  return artifact;
};

export default useArtifactById;
