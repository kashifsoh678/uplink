import React from "react";
import CustomImage from "../custom-image";

const PortfolioCard = ({
  src = "/assets/images/dns.png",
  width,
  height,
  CustomStyle,
}) => {
  return (
    <div
      className="w-[100px] h-[100px] border rounded-2xl flex items-center justify-center hover:!bg-[#084FDC] hover:!shadow-none cursor-pointer "
      style={{
        boxShadow: "inset 0px 3px 6px #00000029, 0px 3px 6px #00000029",
        ...CustomStyle,
      }}
    >
      <CustomImage
        src={src}
        alt="logo"
        className="text-white"
        width={width ?? 30}
        height={height ?? 20}
      />
    </div>
  );
};

export default PortfolioCard;
