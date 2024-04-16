import { createClient } from "@/lib/supabase/client";

export const GetBuffElementalResonances = async () => {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("BuffElementalResonances")
    .select()
    .order("id");

  if (error) throw console.log(error);

  return data;
};
