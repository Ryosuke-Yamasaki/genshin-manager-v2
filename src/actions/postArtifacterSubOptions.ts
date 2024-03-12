"use server";

import { createClient } from "@/lib/supabase/server";
import { IntStatId } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const PostArtifacterSubOptions = async (
  artifacterId: string,
  subOptions: { statId: string; value: string }[]
) => {
  subOptions.map((data) => {
    if (!IntStatId(data.statId)) {
      data.value = (Number(data.value) / 100).toFixed(3);
    }
  });

  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  subOptions.map(async (subOption) => {
    const { error } = await supabase.from("ArtifacterSubOptions").insert({
      artifacterId,
      statId: subOption.statId,
      value: subOption.value,
    });
    if (error) throw error;
  });

  revalidatePath("../../");
  redirect("../../");
};
