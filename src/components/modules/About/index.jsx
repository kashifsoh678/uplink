"use client";
import PrimaryDescription from "@/components/typography/primary-description";
import PrimaryHeading from "@/components/typography/primary-heading";
import LayoutProvider from "@/components/wrapper/layout-provider";
import React from "react";
import dynamic from "next/dynamic";

const AnimationContainer = dynamic(
  () => import("@/components/common/animation/animation-container"),
  { ssr: false } // Disable SSR for this component
);
const About = () => {
  return (
    <LayoutProvider
      parentClassName={"px-5  w-full "}
      childClassName={
        " flex flex-col max-md:gap-4  md:flex-row my-[20px] md:my-[30px] lg:my-[50px]"
      }
    >
      <div className=" w-full flex flex-col gap-4 lg:gap-8 justify-center">
        <PrimaryHeading
          heading={"About Uplinks"}
          className="!text-3xl md:!text-4xl lg:!text-6xl font-mb-bold"
        />
        <PrimaryDescription
          description={
            "Struggling to rank your website? Uplinke.com is here to help! We specialize in improving search rankings, boosting visibility, and driving organic traffic. Get noticed today!"
          }
          className="text-[#B5B5B5] font-mb-regular "
        />
        <PrimaryDescription
          description={
            "Say goodbye to wasting money on ineffective backlinks and outdated SEO tactics! With our help, you can generate unlimited leads and elevate your website’s authority through genuine, organic strategies."
          }
          className="text-[#B5B5B5] font-mb-regular "
        />
        <PrimaryDescription
          description={
            "Pay only for results! We charge only after achieving your satisfaction. Call us now to secure your success!"
          }
          className="text-[#B5B5B5] font-mb-regular "
        />
      </div>
      <div className=" w-full">
        <AnimationContainer
          animation={"assets/animations/about_anim.json"}
        />
      </div>
    </LayoutProvider>
  );
};

export default About;
