import Link from "next/link";
import React from "react";
import { courseId } from "../courses-section/courses-section";
import { aboutSectionId } from "../about-section/about-section";

const NavBar = () => {
  return (
    <nav className="px-8 py-3 rounded-full border-solid border border-border">
      <ul className="flex items-center gap-4 text-sm">
        <li className="hover:text-primary transition-all duration-200">
          <Link
            href={"#"}
            onClick={(e) => {
              e.preventDefault();
              const courseElement = document.getElementById(courseId);
              if (courseElement) {
                courseElement.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }
            }}
          >
            Khóa Học
          </Link>
        </li>
        <li className="hover:text-primary transition-all duration-200">
          <Link
            href={"#"}
            onClick={(e) => {
              e.preventDefault();
              const aboutSectionElement =
                document.getElementById(aboutSectionId);
              if (aboutSectionElement) {
                aboutSectionElement.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
          >
            Về Chúng Tôi
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
