import React from "react";

const PrimaryDescription = ({ description, className = "" }) => {
  return (
    <p
      className={`text-sm md:text-md lg:text-lg leading-5 lg:leading-6   text-[rgb(45,55,72)] font-mb-medium ${className}`}
    >
      {description}
    </p>
  );
};

export default PrimaryDescription;
