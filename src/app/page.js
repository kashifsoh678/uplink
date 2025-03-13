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
import {
  ClientReviewsArray,
  FaqsDataArray,
  WhyUplinkDataArray,
} from "@/utils/constants";
import FAQS from "@/components/modules/Faqs";
import CustomSwiperControl from "@/components/common/swiper/custom-swiper-control";
import ReviewCard from "@/components/common/cards/review-card";
import About from "@/components/modules/About";
import PortfolioDetailCard from "@/components/common/cards/portfolio-detail-card";
import PortfolioCard from "@/components/common/cards/portfolio-card";
export default function Home() {
  return (
    <>
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

      {/* ============================================================================= Portfolio */}

      <LayoutProvider
        parentClassName={" border w-full relative "}
        childClassName={"border w-full pb-8"}
      >
        <div className="w-full flex flex-col items-center my-[20px] md:my-[30px] lg:my-[50px] gap-4 md:gap-6 lg:gap-8 mx-auto ">
          <PrimaryHeading
            heading={"Our Portfolio"}
            className="!text-3xl md:!text-4xl lg:!text-6xl font-mb-bold text-center"
          />
          <PrimaryDescription
            description={
              "Choosing SEO Flox Means Partnering With An SEO Team Dedicated To Your Growth And Lasting Online Success."
            }
            className="text-center !text-md md:!text-xl lg:!text-2xl text-[#B5B5B5] font-mb-regular max-w-6xl border"
          />
        </div>

        <div className="bg-portfolio_background bg-cover bg-center bg-no-repeat w-full">
          <div className=" flex flex-col xl:flex-row gap-10 bg-white/30 backdrop-blur-lg  ">
          
            <div className=" flex max-xl:flex-wrap xl:flex-col justify-center gap-4">
              <PortfolioCard
                src="/assets/images/domain-authority.png"
                width={40}
              />
              <PortfolioCard src="/assets/images/dns.png" />
              <PortfolioCard
                src="/assets/images/backlink.png"
                width={40}
                CustomStyle={{
                  backgroundColor: "#084FDC",
                  boxShadow: "none",
                }}
              />
              <PortfolioCard src="/assets/images/backlinks.png" width={40} />
              <PortfolioCard
                src="/assets/images/seo-search-symbol.png"
                width={50}
              />
            </div>
            {/* === */}
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full ">
              <PortfolioDetailCard />
              <PortfolioDetailCard />
              <PortfolioDetailCard />
              <PortfolioDetailCard />
              <PortfolioDetailCard />
              <PortfolioDetailCard />
              <PortfolioDetailCard />
              <PortfolioDetailCard />
              <PortfolioDetailCard />
            </div>
          </div>
        </div>
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
      <About />
      {/* ============================================================================= Review */}
      <LayoutProvider
        parentClassName={" border w-full "}
        childClassName={"border"}
      >
        {/* ===header */}
        <div className="w-full flex flex-col items-center my-[20px] md:my-[30px] lg:my-[50px] gap-4 md:gap-6 lg:gap-8 mx-auto">
          <PrimaryHeading
            heading={"Client Reviews"}
            className="!text-3xl md:!text-4xl lg:!text-6xl font-mb-bold text-center"
          />
          <PrimaryDescription
            description={"We Have Worked with Individuals And Businesses."}
            className="text-center !text-md md:!text-xl lg:!text-2xl text-[#B5B5B5] font-mb-regular max-w-6xl border"
          />
        </div>
        <CustomSwiperControl
          slides={ClientReviewsArray ?? []}
          slidesPerViewConfig={{ 640: 1, 768: 2, 1024: 3, 1280: 4 }}
          loop={true}
          cardComponent={ReviewCard}
          customSwiperStyles={{
            padding: "10px",
          }}
          customSwiperSlideStyles={{}}
          spaceBetween={12}
        />
      </LayoutProvider>
      {/* ============================================================================= Why */}
      <FAQS />
    </>
  );
}
