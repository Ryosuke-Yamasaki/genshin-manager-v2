import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const Logout = async () => {
    "use server";

    const cookieStore = cookies();

    const supabase = createClient(cookieStore);

    await supabase.auth.signOut();

    redirect("/");
  };

  return (
    <form action={Logout}>
      <button>ログアウト</button>
    </form>
  );
}
