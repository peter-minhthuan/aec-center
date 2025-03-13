"use client";
import React from "react";
import { ThemeProvider } from "./theme-provider";
import Header from "../header/header";
import FloatingMenu from "../floating-menu/floating-menu";
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <>
          <Header />
          {children}

          <div className="fixed top-1/2 right-2 md:hidden">
            <FloatingMenu />
          </div>
        </>
      </ThemeProvider>
    </>
  );
}
