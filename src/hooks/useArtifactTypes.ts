import { ArtifactTypes } from "@/lib/interface";
import { getArtifactTypes } from "@/lib/supabase/data";
import { useEffect, useState } from "react";

const useArtifactTypes = () => {
  const [types, setTypes] = useState<ArtifactTypes[] | null>(null);

  useEffect(() => {
    const fetchArtifactTypes = async () => {
      const { data, error } = await getArtifactTypes();
      if (error) throw error;
      setTypes(data as ArtifactTypes[]);
    };
    fetchArtifactTypes();
  }, []);

  return types;
};

export default useArtifactTypes;
