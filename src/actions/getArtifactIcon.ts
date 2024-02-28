import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

export const GetArtifactIcon = async (id: string) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase
    .from("ArtifactIcons")
    .select()
    .eq("artifactId", id)
    .single();

  if (error) throw console.log(error);

  return data;
};
