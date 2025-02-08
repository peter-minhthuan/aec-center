import React from "react";
import { metaConfigs } from "@/constant/configs";

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="container">
        <div className="flex justify-between items-center">
          <h2 className="text-md font-bold">{metaConfigs.title as string}</h2>

          <span className="text-sm">
            © 2024 {metaConfigs.description} All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
