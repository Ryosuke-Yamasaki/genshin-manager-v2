"use client";

import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { createClient } from "@/lib/supabase/client";

const LoginWithGoogleButton = () => {
  const supabase = createClient();

  const LoginWithGoogle = () => {
    supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };
  return (
    <Button variant="outline" onClick={LoginWithGoogle}>
      <FcGoogle className="h-5 w-5" />
      <div className="indent-2">Googleアカウント</div>
    </Button>
  );
};

export default LoginWithGoogleButton;
