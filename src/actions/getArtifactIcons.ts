import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

export const GetArtifactIcons = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase.from("ArtifactIcons").select();

  if (error) throw console.log(error);

  return data;
};
