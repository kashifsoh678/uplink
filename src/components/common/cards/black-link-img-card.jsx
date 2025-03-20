"use client";
import React from "react";
import CustomImage from "../custom-image";
import SecondaryDescription from "@/components/typography/secondary-description";

const BlackLinkImgCard = ({ data = [0, 0, 0], onClick }) => {
    return (
        <>
            <div className="flex flex-col gap-2">
                {data?.map((item, index) => {
                    let img = item?.src;
                    return (
                        <div
                            key={index}
                            className="shadow-lg w-[80px] p-2.5 flex flex-col items-center justify-center flex-1"
                            onClick={() => onClick(item, index)}  >
                            <CustomImage
                                src={img ?? "/assets/images/google_review.png"}
                                width={item?.imgProps?.width ?? 20}
                                height={item?.imgProps?.height ?? 20}
                                alt="logo"
                            />
                            <SecondaryDescription
                                className="text-center !leading-[19px] !text-[10px]"
                                description={item.text}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default BlackLinkImgCard;
