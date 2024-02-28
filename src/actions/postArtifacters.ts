"use server";

import { createClient } from "@/lib/supabase/server";
import { IntStatId } from "@/lib/utils";
import { postArtifacterSchema } from "@/lib/zodschema";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

export const PostArtifacters = async (
  values: z.infer<typeof postArtifacterSchema>
) => {
  const { userId, artifactId, typeId, setId, mainStatId, subOptions } = values;

  const scoreMultipliers: { [K: string]: number } = {
    "600": 2,
    "700": 1,
  };

  const score = subOptions
    .filter((data) => Object.keys(scoreMultipliers).includes(data.statId))
    .map((data) => Number(data.value) * scoreMultipliers[data.statId])
    .reduce((a, b) => a + b)
    .toFixed(3);

  subOptions.map((data) => {
    if (!IntStatId(data.statId.toString()))
      data.value = (Number(data.value) / 100).toFixed(3).toString();
  });

  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase
    .from("Artifacters")
    .insert({
      userId,
      score,
      artifactId,
      typeId,
      setId,
      mainStatId,
    })
    .select()
    .single();

  if (error) throw error;

  subOptions.map(async (subOption) => {
    const { error } = await supabase.from("ArtifacterSubOptions").insert({
      artifacterId: data.id,
      statId: subOption.statId,
      value: subOption.value,
    });
    if (error) throw error;
  });

  revalidatePath("../../");
  redirect("../../");
};
