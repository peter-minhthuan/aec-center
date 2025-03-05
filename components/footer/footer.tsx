import React from "react";
import { metaConfigs } from "@/constant/configs";
import { MapPinCheck, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="container">
        <div className="flex justify-between items-center flex-col md:flex-row gap-3">
          <div>
            <h2 className="text-md font-bold">{metaConfigs.title as string}</h2>
            <ul className="mt-4 text-sm space-y-1">
              <li className="flex items-center gap-2">
                <MapPinCheck size={16} className="min-w-max" />
                Phòng 04, 165-167, Đ. Nguyễn Thị Thập, KDC Him Lam, P.Tân Hưng,
                Quận 7, TP Hồ Chí Minh
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                090 779 2604 Mr. Thắng
              </li>
            </ul>
          </div>

          <span className="text-sm">
            © 2024 {metaConfigs.description} All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
