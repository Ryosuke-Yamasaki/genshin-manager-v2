import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: NextResponse) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase.auth.getUser();
  try {
    return NextResponse.json({ data });
  } catch {
    throw error;
  }
};
