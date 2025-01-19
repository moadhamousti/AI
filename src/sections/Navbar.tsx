"use client"

import { SignedIn, UserButton } from "@clerk/clerk-react";

export const Navbar = () => {
  return (
    <div className="flex flex-col px-2 py-2 border-b border-[var(--color-border)]">
      <div className="flex items-center justify-between">
        <div className="text-lg font-bold"></div>
        <div className="">
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
};
