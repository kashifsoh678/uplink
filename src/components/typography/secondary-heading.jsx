import React from "react";

const SecondaryHeading = ({ heading, className = "" }) => {
  return (
    <h3
      className={`text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] leading-[24px] sm:leading-[27px] text-[rgb(45,55,72)] font-mb-medium ${className}`}
    >
      {heading}
    </h3>
  );
};

export default SecondaryHeading;
