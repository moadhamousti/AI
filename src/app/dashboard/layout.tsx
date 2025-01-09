import Sidebar from "@/components/Dashboard/Sidebar";
import Topbar from "@/components/Dashboard/Topbar";
import React from "react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="root">
            <Sidebar/>
            <Topbar/>
            <div className="root-container">
                <div className="wrapper">{children}</div>
            </div>
        </main>
    );
}