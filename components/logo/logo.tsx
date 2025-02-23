import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <h1 className="text-2xl font-bold text-center text-primary">
      <Link href={"/"}>
        <Image
          src={"/assets/logo.jpg"}
          width={64}
          height={64}
          alt="AEC"
          className="rounded-sm object-cover"
        />
      </Link>
    </h1>
  );
};

export default Logo;
