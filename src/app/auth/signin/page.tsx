"use client";

import { createBrowserClient } from "@supabase/ssr";
import { FcGoogle } from "react-icons/fc";

const SigninPage = () => {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const LoginWithGoogle = () => {
    supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };
  return (
    <div className="flex items-center w-full gap-x-2">
      <button onClick={LoginWithGoogle}>
        <FcGoogle className="h-5 w-5" />
        <div>Googleアカウント</div>
      </button>
    </div>
  );
};

export default SigninPage;
