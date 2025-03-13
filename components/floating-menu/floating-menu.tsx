"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconHome } from "@tabler/icons-react";
import { BookOpenText, NotepadText } from "lucide-react";
import { courseId } from "../courses-section/courses-section";

const FloatingMenu = () => {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "Courses",
      icon: (
        <BookOpenText
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            const el = document.getElementById(courseId);
            if (el) {
              el.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
        />
      ),
      href: "/courses",
    },
    {
      title: "About us",
      icon: (
        <NotepadText className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/about-us",
    },
  ];
  return (
    <div className="flex items-center justify-center h-[35rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
};

export default FloatingMenu;
