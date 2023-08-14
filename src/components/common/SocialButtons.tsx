"use client";

import { ImGoogle, ImFacebook } from "react-icons/im";
import { SocialButton } from "@/components/common";
import { continueWithGoogle, continueWithFacebook } from "@/utils";

export default function SocialButtons() {
  return (
    <div className="mt-5">
      <div className="relative ">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-200" />
        </div>
        <div className="relative flex justify-center text-sm font-medium leading-6">
          <span className="bg-fondo px-6 text-gray-900"> O continua con </span>
        </div>
      </div>

      <div className="flex justify-between items-center gap-2 mt-5">
        <SocialButton provider="google" onClick={continueWithGoogle}>
          <ImGoogle className="mr-3" />
          con Google
        </SocialButton>
        <SocialButton provider="facebook" onClick={continueWithFacebook}>
          <ImFacebook className="mr-3" /> con Facebook
        </SocialButton>
      </div>
    </div>
  );
}
