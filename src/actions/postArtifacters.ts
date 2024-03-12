"use server";

import { createClient } from "@/lib/supabase/server";
import { postArtifacterSchema } from "@/lib/zodschema";
import { cookies } from "next/headers";
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
    .reduce((a, b) => a + b, 0)
    .toFixed(3);

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

  return data;
};
