import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <h1 className="text-2xl font-bold text-center text-primary">
      <Image
        src={"/assets/logo.jpg"}
        width={64}
        height={64}
        alt="AEC"
        className="rounded-sm object-cover"
      />
    </h1>
  );
};

export default Logo;
