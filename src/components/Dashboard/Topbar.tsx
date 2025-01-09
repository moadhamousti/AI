import { UserButton } from "@clerk/nextjs";
import React from "react";

const Topbar = () => {
  return (
    <header className="topbar flex-between w-full h-16 bg-primary text-primary-foreground px-4 shadow">
      <div className="flex items-center gap-2">
      </div>
      <div className="flex items-center gap-4">
        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  );
};

export default Topbar;
