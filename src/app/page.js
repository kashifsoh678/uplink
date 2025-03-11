import CustomImage from "@/components/common/custom-image";
import MainHeading from "@/components/typography/main-heading";
import PrimaryDescription from "@/components/typography/primary-description";
import SecondaryDescription from "@/components/typography/secondary-description";
import LayoutProvider from "@/components/wrapper/layout-provider";
import { GoStarFill } from "react-icons/go";
import main_home from "../../public/assets/images/main_home.png";
import main_home_google from "../../public/assets/svg/main_home_google.svg";
import main_home_trust_pilot from "../../public/assets/svg/main_home_trust_pilot.svg";
import main_home_crowd from "../../public/assets/svg/main_home_crowd.png";
import ahrefs_powered_by from "../../public/assets/svg/ahrefs_powered_by.png";
import semrush_powered_by from "../../public/assets/svg/semrush_powered_by.svg";
import google_powered_by from "../../public/assets/svg/google_powered_by.svg";
import moz_powered_by from "../../public/assets/svg/moz_powered_by.svg";
import majestic_powered_by from "../../public/assets/svg/majestic_powered_by.svg";

import PrimaryHeading from "@/components/typography/primary-heading";
import { FaRegClock } from "react-icons/fa6";
import { FaqsDataArray, WhyUplinkDataArray } from "@/utils/constants";
import FAQS from "@/components/modules/Faqs";
import AnimationProviderContainer from "@/components/common/animation/animation-container";
export default function Home() {
  return (
    <>
      {/* <LayoutProvider
                parentClassName={" border bg-white h-full p-5 relative bg-[url(https://i.pinimg.com/736x/5a/b3/82/5ab3824f68c7fbe483858715447e3b81.jpg)]"}
                childClassName={"p-5 rounded-md h-[500px] w-full bg-white/30 backdrop-blur-lg border"}
            > */}
      {/* <div className="border h-20">home w</div>
                <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div> */}
      {/* </LayoutProvider> */}

      <LayoutProvider parentClassName={"bg-[#FFFFFF] h-full p-5 relative "}>
        <div className="flex flex-col md:flex-row gap-4  ">
          <div className="border w-full flex flex-col  gap-4 md:gap-6  lg:gap-8 justify-center ">
            <div>
              <MainHeading
                text={"Uplinke AI"}
                className={"max-md:text-center"}
              />
              <MainHeading
                text={"Automation and Digital"}
                className={"max-md:text-center"}
              />
              <MainHeading
                text={"Marketing Services"}
                className={"max-md:text-center"}
              />
            </div>
            <PrimaryDescription
              description="Uplinke.com: Your partner for real online growth unlock your site’s potential with White Hat SEO and see results before you pay. Achieve digital success with Uplinke!"
              className={"max-md:text-center max-md:max-w-md max-md:mx-auto"}
            />

            {/* ================================== */}
            <div className="border">
              <div className=" mb-2 flex flex-wrap items-center max-md:justify-center gap-2">
                <PrimaryDescription
                  description={"Based on 1,000 reviews"}
                  className=""
                />
                <div className="flex items-center gap-1">
                  <GoStarFill size={24} color="#FFD700" />
                  <GoStarFill size={24} color="#FFD700" />
                  <GoStarFill size={24} color="#FFD700" />
                  <GoStarFill size={24} color="#FFD700" />
                  <GoStarFill size={24} color="#FFD700" />
                </div>
              </div>
              <div className="border flex items-end justify-center lg:justify-start gap-4 max-md:flex-wrap">
                <CustomImage
                  src={main_home_trust_pilot}
                  className="w-[120px] h-[30px] border"
                />
                <CustomImage
                  src={main_home_crowd}
                  className="w-[100px] h-[28px]"
                />
                <CustomImage
                  src={main_home_google}
                  className="w-[100px] h-[28px]"
                />
              </div>
            </div>
            {/* ================================== */}
          </div>
          {/* ============================= */}
          <div className="border w-full flex items-center justify-center p-4 md:h-[400px] lg:min-h-[600px] ">
            <CustomImage
              src={main_home}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        {/* =============== */}
        <div className="w-full border">
          <PrimaryHeading
            heading={"Powered By"}
            className="border text-center mb-2"
          />
          <div className="border flex flex-col  items-center md:flex-row md:items-end justify-center gap-4 md:gap-6 flex-wrap">
            <CustomImage
              className="w-[130px] md:h-[60px]"
              src={majestic_powered_by}
            />
            <CustomImage
              className="w-[100px] h-[42px] md:w-[120px] md:h-[40px]"
              src={google_powered_by}
            />
            <CustomImage
              className="w-[220px] h-[30px] md:w-[280px] md:h-[40px]"
              src={semrush_powered_by}
            />
            <CustomImage
              className="w-[100px] h-[40px] md:w-[130px] md:h-[40px]"
              src={ahrefs_powered_by}
            />
            <CustomImage
              className="w-[100px] h-[40px] md:w-[120px] md:h-[40px]"
              src={moz_powered_by}
            />
          </div>
        </div>
      </LayoutProvider>
      {/* ============================================================================= */}
      <LayoutProvider
        parentClassName={
          "p-5 border bg-home_background bg-cover bg-center bg-no-repeat min-h-[500px] md:min-h-screen w-full "
        }
        childClassName={"border"}
      >
        <div className="flex items-center justify-center gap-8 flex-wrap"></div>
      </LayoutProvider>

      {/* ============================================================================= Why */}
      <LayoutProvider
        parentClassName={"px-5 border w-full "}
        childClassName={"border"}
      >
        {/* ===header */}
        <div className="w-full flex flex-col items-center my-[20px] md:my-[30px] lg:my-[50px] gap-4 md:gap-6 lg:gap-8 mx-auto">
          <PrimaryHeading
            heading={"Why Uplinks"}
            className="!text-3xl md:!text-4xl lg:!text-6xl font-mb-bold text-center"
          />
          <PrimaryDescription
            description={
              "Choosing SEO Flox Means Partnering With An SEO Team Dedicated To Your Growth And Lasting Online Success."
            }
            className="text-center !text-md md:!text-xl lg:!text-2xl text-[#B5B5B5] font-mb-regular max-w-6xl border"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-6 ">
          {WhyUplinkDataArray?.map((item, index) => (
            <div
              key={index}
              className="border flex flex-col items-center md:items-start gap-2 md:gap-3 p-2 max-md:max-w-md max-md:mx-auto"
            >
              <div
                className={`flex items-center justify-center w-[80px] h-[80px] rounded-lg shadow-md`}
                style={{ background: item.bgColor }}
              >
                <FaRegClock size={42} />
              </div>
              <PrimaryHeading heading={item?.label ?? "Time Efficiency"} />
              <PrimaryDescription
                description={
                  item?.desc ??
                  "Save time by scheduling and automating social media posts one place."
                }
                className="max-md:text-center text-[#B5B5B5] font-mb-regular !leading-6"
              />
            </div>
          ))}
        </div>
      </LayoutProvider>
      {/* ============================================================================= About */}
      <LayoutProvider
        parentClassName={"px-5 border w-full "}
        childClassName={
          "border flex flex-col max-md:gap-4  md:flex-row my-[20px] md:my-[30px] lg:my-[50px]"
        }
      >
        <div className="border w-full flex flex-col gap-4 lg:gap-8 justify-center">
          <PrimaryHeading
            heading={"About Uplinks"}
            className="!text-3xl md:!text-4xl lg:!text-6xl font-mb-bold"
          />
          <PrimaryDescription
            description={
              "Struggling to rank your website? Uplinke.com is here to help! We specialize in improving search rankings, boosting visibility, and driving organic traffic. Get noticed today!"
            }
            className="text-[#B5B5B5] font-mb-regular border"
          />
          <PrimaryDescription
            description={
              "Say goodbye to wasting money on ineffective backlinks and outdated SEO tactics! With our help, you can generate unlimited leads and elevate your website’s authority through genuine, organic strategies."
            }
            className="text-[#B5B5B5] font-mb-regular border"
          />
          <PrimaryDescription
            description={
              "Pay only for results! We charge only after achieving your satisfaction. Call us now to secure your success!"
            }
            className="text-[#B5B5B5] font-mb-regular border"
          />
        </div>
        <div className="border w-full">
          <AnimationProviderContainer
            animation={"assets/animations/about_anim.json"}
          />
        </div>
      </LayoutProvider>
      {/* ============================================================================= Why */}
      <FAQS />
    </>
  );
}
