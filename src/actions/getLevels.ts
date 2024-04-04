import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

export const GetLevels = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase.from("Levels").select();

  if (error) throw console.log(error);

  return data;
};
