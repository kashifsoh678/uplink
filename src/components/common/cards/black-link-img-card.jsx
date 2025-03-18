"use client";
import React from "react";
import CustomImage from "../custom-image";
import SecondaryDescription from "@/components/typography/secondary-description";

const BlackLinkImgCard = ({ data = [0, 0, 0] }) => {
    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                    alignContent: "stretch",
                }}
            >
                {data?.map((item, index) => {
                    let img = item?.src;
                    return (
                        <div
                            key={index}
                        >
                            <CustomImage
                                src={img ?? "/assets/images/google_review.png"}
                                width={item?.imgProps?.width ?? 80}
                                height={item?.imgProps?.height ?? 100}
                                alt="logo"
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default BlackLinkImgCard;
