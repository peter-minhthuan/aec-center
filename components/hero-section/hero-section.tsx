import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { metaConfigs } from "@/constant/configs";

const HeroSection = () => {
  return (
    <BackgroundBeamsWithCollision className="bg-transparent">
      <h2 className="text-3xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center font-sans tracking-tight lg:px-28">
        Trung tâm phát triển giáo dục{" "}
        <span
          className="max-w-96 md:max-w-4xl xl:max-w-full text-primary"
          style={{
            overflowWrap: "break-word",
          }}
        >
          {metaConfigs.title as string}
        </span>
      </h2>
    </BackgroundBeamsWithCollision>
  );
};

export default HeroSection;
