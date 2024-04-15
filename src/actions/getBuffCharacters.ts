import { createClient } from "@/lib/supabase/client";

export const GetBuffCharacters = async () => {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("Characters")
    .select("BuffCharacters!inner(*),CharacterImageUrls!inner(*)")
    .order("id");

  if (error) throw console.log(error);

  return data;
};
