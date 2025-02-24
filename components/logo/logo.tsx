import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <h1 className="text-2xl font-bold text-center text-primary">
      <Link href={"/"}>
        <Image
          src={"/assets/logo.jpg"}
          width={78}
          height={78}
          alt="Authentic EDU"
          className="rounded-sm w-14 h-12 md:w-20 md:h-16"
        />
      </Link>
    </h1>
  );
};

export default Logo;
