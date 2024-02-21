"use client";

import { createBrowserClient } from "@supabase/ssr";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";

const LoginWithGoogleButton = () => {
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
    <Button variant="outline" size="free" onClick={LoginWithGoogle}>
      <FcGoogle className="h-5 w-5" />
      <div className="indent-2">Googleアカウント</div>
    </Button>
  );
};

export default LoginWithGoogleButton;