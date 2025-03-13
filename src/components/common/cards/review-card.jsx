"use client";
import React from "react";
import CustomImage from "../custom-image";
import SecondaryDescription from "@/components/typography/secondary-description";

const ReviewCard = ({ data = [0, 0, 0] }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          alignContent: "stretch",
          maxHeight: "600px",
          height: "600px",
        }}
      >
        {data?.map((item, index) => {
          let img = item?.src;
          return (
            <div
              key={index} // Add the key prop for better list rendering in React
              style={{
                background: "transparent url('') 0% 0% no-repeat padding-box",
                boxShadow: "inset 0px 3px 6px #00000029, 0px 6px 6px #00000029",
                borderRadius: "28px",
              }}
              className="px-6 py-5 h-full flex flex-col justify-between gap-2"
            >
              <CustomImage
                src={img ?? "/assets/images/google_review.png"}
                width={item?.imgProps?.width ?? 80}
                height={item?.imgProps?.height ?? 100}
                alt="logo"
              />
              <SecondaryDescription
                description={item?.description ?? "description"}
                className="text-black !font-mb-regular !text-sm !leading-5"
              />
              <div className="flex items-center gap-3">
                <div
                  className={`flex items-center w-[40px] h-[40px] justify-center p-2 rounded-full shadow-sm text-[16px]  font-bold font-mb-bold`}
                  style={{ backgroundColor: item?.bgColor }}
                >
                  {item?.shortWord}
                </div>
                <SecondaryDescription
                  description={item?.label ?? "RN"}
                  className="text-black font-mb-bold !text-md"
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ReviewCard;
