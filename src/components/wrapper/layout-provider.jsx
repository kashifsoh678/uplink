import React from "react";

const LayoutProvider = ({ children, parentClassName, childClassName }) => {
  return (
    <div className={`px-2 ${parentClassName}`}>
      <div className={`max-xl:max-w-[1024px] xl:max-w-[1420px] mx-auto px-2 md:px-5 ${childClassName}`}>
        {children}
      </div>
    </div>
  );
};

export default LayoutProvider;
