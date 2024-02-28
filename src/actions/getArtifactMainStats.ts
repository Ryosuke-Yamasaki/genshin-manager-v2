import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

export const GetArtifactMainStats = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase
    .from("ArtifactMainStats")
    .select("*,Stats(*)");

  if (error) throw console.log(error);

  return data;
};
