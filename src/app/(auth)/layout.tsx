import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container  pb-0">
        <main className="auth">{children}</main>
    </div>

  );
}
