import { Stats } from "@/lib/interface";
import { getStatById } from "@/lib/supabase/data";
import { useEffect, useState } from "react";

const useStatById = (form: any, statId: string) => {
  const [stat, setStat] = useState<Stats | null>(null);

  useEffect(() => {
    const fetchStat = async (id: string) => {
      const { data, error } = await getStatById(id);
      if (error) throw error;
      setStat(data as Stats);
    };
    fetchStat(statId);
  }, [statId]);

  return stat;
};

export default useStatById;
