"use server";

import { createClient } from "@/lib/supabase/server";
import { IntStatId } from "@/lib/utils";
import { postArtifacterSchema } from "@/lib/zodschema";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

export const PostArtifacters = async (
  value: z.infer<typeof postArtifacterSchema>
) => {
  const { userId, artifactId, typeId, setId, mainStatId, subOptions } = value;

  subOptions.map((data) => {
    if (!IntStatId(data.statId.toString()))
      data.value = (Number(data.value) / 100).toFixed(3).toString();
  });

  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { error } = await supabase.from("Artifacters").insert({
    userId,
    artifactId,
    typeId,
    setId,
    mainStatId,
    sub1StatId: subOptions[0].statId,
    sub2StatId: subOptions[1].statId,
    sub3StatId: subOptions[2].statId,
    sub4StatId: subOptions[3].statId,
    sub1Number: subOptions[0].value,
    sub2Number: subOptions[1].value,
    sub3Number: subOptions[2].value,
    sub4Number: subOptions[3].value,
  });

  if (error) {
    console.log(error);
  }

  redirect("../../");
};
