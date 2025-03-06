import CustomImage from "@/components/common/custom-image";
import PrimaryHeading from "@/components/typography/primary-heading";
import SecondaryDescription from "@/components/typography/secondary-description";
import SecondaryHeading from "@/components/typography/secondary-heading";
import LayoutProvider from "@/components/wrapper/layout-provider";
import React from "react";
import paymethods from "../../../../public/assets/images/paymethods.png";

const Footer = () => {
  return (
    <>
      <div className={`px-2 w-full mt-8`}>
        <div
          className={`max-w-[98%] p-[30px] md:p-[60px] bg-black rounded-t-[30px] md:rounded-t-[60px] lg:rounded-t-[90px] mx-auto `}
        >
          <div className="text-white max-xl:max-w-[1204px]  xl:max-w-[1620px] mx-auto  flex flex-col">
            {/* === */}
            <div className="border lg:w-4/12 flex flex-col items-start gap-6">
              <div className="cursor-pointer rounded-lg bg-blue-600 py-2 px-8 w-auto ">
                <PrimaryHeading heading={"Uplinke"} className={"text-white"} />
              </div>
              <SecondaryDescription
                description={
                  "Uplinke.com is one of the most trusted SEO service-providing companies that helps you generate Sky rocketed traffic to your website."
                }
                className="text-white leading-5"
              />
              <div className="bg-white rounded-md overflow-hidden max-h-[65px]">
                <CustomImage src={paymethods} className="w-full h-full" />
              </div>
            </div>
            <div className="border lg:w-6/12"> div</div>
            <div className="border lg:w-4/12"> div</div>
          </div>
        </div>
      </div>
      {/* ======================= rights reserved */}
      <div className={`px-2 w-full `}>
        <div
          className={`max-w-[98%]  px-[20px] md:px-[30px] lg:px-[60px] py-[20px] bg-black border-t  border-t-white mx-auto `}
        >
          <div className="text-white max-xl:max-w-[1204px]  xl:max-w-[1620px] mx-auto   grid grid-cols-1 lg:grid-cols-3">
            <div className="w-full py-1">
              <SecondaryHeading
                className="text-white max-lg:text-center"
                heading={"© All rights reserved 2024 for Wolftechscloud.com"}
              />
            </div>
            <div className="w-full py-1">
              <SecondaryHeading
                className="text-white max-lg:text-center"
                heading={"Powered By Link Mox"}
              />
            </div>
            <div className="w-full py-1">
              <SecondaryHeading
                className="text-white max-lg:text-center"
                heading={"Privacy Policy"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
