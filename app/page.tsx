import Image from "next/image";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button"

import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedOut,
} from '@clerk/nextjs'

export default function Home() {
  return (
    <ClerkProvider>
    <header className="flex justify-end items-center p-4 gap-4 h-16">
    <SignedOut>
      <SignInButton />
      <SignUpButton />
    </SignedOut>
  </header>
    </ClerkProvider>
  );
}
