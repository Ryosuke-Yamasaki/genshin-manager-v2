import { createClient } from "@/lib/supabase/client";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: NextResponse) => {
  const supabase = createClient();

  const { data, error } = await supabase.from("ArtifactTypes").select();
  try {
    return NextResponse.json({ data });
  } catch {
    throw error;
  }
};
