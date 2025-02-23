"use client";

import { courses } from "@/constant/common";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const path = usePathname();

  return (
    <nav className="px-8 rounded-full border-solid border border-border hidden md:block">
      <ul className="flex items-center gap-4 text-sm">
        <li
          className={cn("hover:text-primary transition-all duration-200 py-3", {
            "text-primary": path === "/",
          })}
        >
          <Link href={"/"}>Trang chủ</Link>
        </li>
        <li
          className={cn(
            `hover:text-primary transition-all duration-200 cursor-pointer relative
            group py-3`,
            {
              "text-primary": path.includes("course"),
            }
          )}
        >
          Khóa học
          <ul
            className="absolute top-full w-56 bg-card opacity-0 invisible z-50 py-2
            group-hover:opacity-100 group-hover:visible transition-all duration-200 rounded-md"
          >
            {courses.map((item) => (
              <li
                key={item.title}
                className="text-foreground hover:text-primary"
              >
                <Link href={item.link} className="inline-block w-full p-4 py-2">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li
          className={cn("hover:text-primary transition-all duration-200 py-3", {
            "text-primary": path.includes("/about-us"),
          })}
        >
          <Link href={"/about-us"}>Về Chúng Tôi</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
