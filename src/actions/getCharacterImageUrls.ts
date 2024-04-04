import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

export const GetCharacterImageUrls = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase
    .from("CharacterImageUrls")
    .select("*,Characters(*)")
    .order("Characters(visionId)");

  if (error) throw console.log(error);

  return data;
};
