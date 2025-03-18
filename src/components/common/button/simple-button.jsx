import React from "react";

const SimpleButton = ({ BtnTitle, className }) => {
    return <div className={` px-4 py-2 text-center text-white bg-blue-600 rounded-lg cursor-pointer max-w-auto ${className}`}>{BtnTitle}</div>;
};

export default SimpleButton;
