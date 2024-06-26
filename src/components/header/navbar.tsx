import Link from "next/link";
import { Button } from "../ui/button";
import { Logout } from "@/actions/logout";
import LoginWithGoogleButton from "../login/login-google";
import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { Separator } from "../ui/separator";

const NavBar = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase.auth.getUser();

  return (
    <div className="flex p-6 items-center justify-between">
      <div className="flex space-x-4">
        <Link href="/">
          <div className="text-xl font-semibold">Genshin Manager</div>
        </Link>
        {data.user?.id && (
          <>
            <Separator orientation="vertical" />
            <Link href={`/${data.user.id}/artifacter`}>
              <div className="text-xl">Artifacter</div>
            </Link>
            <Separator orientation="vertical" />
            <Link href={`/${data.user.id}/calculator`}>
              <div className="text-xl">DPS Checker</div>
            </Link>
          </>
        )}
        <Separator orientation="vertical" />
        <Link href="/data/characters">
          <div className="text-xl">wiki</div>
        </Link>
      </div>
      {data.user == null ? (
        <LoginWithGoogleButton />
      ) : (
        <form action={Logout}>
          <Button variant="outline" type="submit">
            ログアウト
          </Button>
        </form>
      )}
    </div>
  );
};

export default NavBar;
