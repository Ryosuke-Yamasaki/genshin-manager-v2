import { ArtifactIcons } from "@/lib/interface";
import { getArtifactIcons } from "@/lib/supabase/data";
import { useEffect, useState } from "react";

const useArtifactIcons = () => {
  const [icons, setIcons] = useState<ArtifactIcons[] | null>(null);

  useEffect(() => {
    const fetchArtifactIcons = async () => {
      const { data, error } = await getArtifactIcons();
      if (error) throw error;
      setIcons(data as ArtifactIcons[]);
    };
    fetchArtifactIcons();
  }, []);

  return icons;
};

export default useArtifactIcons;
