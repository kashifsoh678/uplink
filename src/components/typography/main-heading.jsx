import React from "react";

const MainHeading = ({ className, text }) => {
  return (
    <h1
      className={`text-[28px] md:text-[32px] lg:text-[46px] leading-[32px] md:leading-[42px] lg:leading-[48px] font-bold text-[rgb(26,32,44)] font-mb-bold ${className}`}
      style={{ fontFamily: "" }}
    >
      {text}
    </h1>
  );
};

export default MainHeading;
