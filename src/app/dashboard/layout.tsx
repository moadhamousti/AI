import Sidebar from "@/components/Dashboard/Sidebar";
import React from "react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="flex h-full text-white">
            <Sidebar/>
            {/* <Topbar/> */}
            <div className="h-full w-full">
                {children}
            </div>
        </main>
    );
}