import React from "react";

const SecondaryDescription = ({ description, className = "" }) => {
  return (
    <p
      className={`text-sm md:text-md lg:text-lg leading-4 md:leading-5  text-[rgb(45,55,72)] font-mb-regular ${className}`}
    >
      {description}
    </p>
  );
};

export default SecondaryDescription;
