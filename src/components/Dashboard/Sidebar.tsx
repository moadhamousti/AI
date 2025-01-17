"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoImage from "@/assets/images/logo.svg";
import { Logo } from "../Logo";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="flex gap-4  justify-center">
        <Logo />
        <div className="font-extrabold text-2xl mt-1">Orbitra.ai</div>
      </div>
    </aside>
  );
}
