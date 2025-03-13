import React from "react";
import SecondaryDescription from "@/components/typography/secondary-description";
import PrimaryHeading from "@/components/typography/primary-heading";
import PrimaryDescription from "@/components/typography/primary-description";
import Loader from "@/components/common/loader";

const PortfolioDetailCard = () => {
  return (
    <div
      className="px-6 py-5 flex flex-col gap-4 border border-transparent hover:border-[#CDD9EF] hover:cursor-pointer "
      style={{
        background: "transparent 0% 0% no-repeat padding-box;",
        boxShadow: "inset 0px 3px 6px #00000029, 0px 3px 6px #00000029",
        borderRadius: "19px",
        opacity: 1,
      }}
    >
      <div className="flex items-start gap-2">
        <div
          className="w-[30px] h-[30px] bg-white rounded-full mt-2"
          style={{ boxShadow: "0px 3px 6px #084FDC29" }}
        ></div>
        <div>
          <PrimaryHeading heading="notation.so" />
          <PrimaryDescription description={`keyword:notion`} />
        </div>
      </div>
      {/* ========= */}
      <div className="flex items-center justify-between gap-1">
        <div className="w-full flex flex-col gap-2 lg:gap-1">
          <SecondaryDescription
            description={"Traffic"}
            className="!text-[16px]"
          />
          <SecondaryDescription description={"162M"} className="!text-[16px]" />
        </div>
        <div className="w-full flex flex-col gap-2 lg:gap-1">
          <SecondaryDescription
            description={"AHref's DR"}
            className="text-center !text-[16px]"
          />
          <SecondaryDescription
            description={"80"}
            className="flex items-center gap-2 justify-center !text-[16px]"
            extraDesc={<Loader />}
          />
        </div>
        <div className="w-full flex flex-col gap-2 lg:gap-1">
          <SecondaryDescription
            description={"MOZ DA"}
            className="text-center !text-[16px]"
          />
          <SecondaryDescription
            description={"80"}
            className="flex items-center gap-2 justify-center !text-[16px]"
            extraDesc={<Loader />}
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailCard;
