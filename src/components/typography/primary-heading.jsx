import React from "react";

const PrimaryHeading = ({ heading, className = "" }) => {
  return (
    <h2
      className={`${className} font-[500] text-[18px] md:text-[20px] lg:text-[24px] leading-[30px] md:leading-[38px]  font-mb-medium `}
    >
      {heading}
    </h2>
  );
};

export default PrimaryHeading;
