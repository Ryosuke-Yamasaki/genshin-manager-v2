import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

export const GetArtifactTypes = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase.from("ArtifactTypes").select();

  if (error) throw console.log(error);

  return data;
};
