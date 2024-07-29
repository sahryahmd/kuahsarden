import React from "react";
import Navbar from "@/components/Navbar";
import "./globals.css"; // Pastikan file ini ada untuk styling global

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-bg-dark text-text-primary">
        <Navbar />
        <div className="pt-16">
          {" "}
          {/* Memberikan ruang untuk navbar fixed */}
          {children}
        </div>
      </body>
    </html>
  );
}
