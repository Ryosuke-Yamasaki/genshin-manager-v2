"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const DeleteArtifacters = async (artifacterId: string) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { error } = await supabase
    .from("Artifacters")
    .delete()
    .eq("id", artifacterId);

  if (error) throw error;

  revalidatePath(".");
};
