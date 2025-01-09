"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoImage from "@/assets/images/logo.svg";


export default function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="flex size-full flex-col gap-4">
                <Link href="/" className="sidebar-logo">
                    <Image src={logoImage} alt="logo" width={180} height={28} />
                </Link>

                <nav className="sidebar-nav">
                   
                            
                </nav>
            </div>
        </aside>
    );
}