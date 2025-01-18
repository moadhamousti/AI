"use client";

import React from "react";
import { Logo } from "../Logo";
import NewChatButton from "./NewChatButton";

export default function Sidebar() {
  return (
    <div className="sidebar flex-col gap-4">
      <div className="flex gap-4  justify-center">
        <Logo />
        <div className="font-extrabold text-2xl mt-1">Orbitra.ai</div>
      </div>
      <NewChatButton/>
      Chat List
      Upgrade Plan      
    </div>
  );
}
