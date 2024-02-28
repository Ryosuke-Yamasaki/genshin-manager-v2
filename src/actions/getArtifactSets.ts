import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

export const GetArtifactSets = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase.from("ArtifactSets").select();

  if (error) throw console.log(error);

  return data;
};
