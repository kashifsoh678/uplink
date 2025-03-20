'use client'
import PortfolioCard from "@/components/common/cards/portfolio-card";
import PortfolioDetailCard from "@/components/common/cards/portfolio-detail-card";
import ReviewCard from "@/components/common/cards/review-card";
import CustomImage from "@/components/common/custom-image";
import CustomSwiperControl from "@/components/common/swiper/custom-swiper-control";
import About from "@/components/modules/About";
import FAQS from "@/components/modules/Faqs";
import MainHeading from "@/components/typography/main-heading";
import PrimaryDescription from "@/components/typography/primary-description";
import PrimaryHeading from "@/components/typography/primary-heading";
import LayoutProvider from "@/components/wrapper/layout-provider";
import {
  ClientReviewsArray,
  WhyUplinkDataArray
} from "@/utils/constants";
import { useState } from "react";
import { FaRegClock } from "react-icons/fa6";
import { GoStarFill } from "react-icons/go";
import bank from "../../public/assets/images/bank.png";
import binance from "../../public/assets/images/binance.png";
import bitcoin from "../../public/assets/images/bitcoin.png";
import main_home from "../../public/assets/images/main_home.png";
import payoneer from "../../public/assets/images/payoneer.png";
import paypal from "../../public/assets/images/paypal.png";
import stripe from "../../public/assets/images/stripe.png";
import tetherLogo from "../../public/assets/images/tether-logo.png";
import wise from "../../public/assets/images/wise.png";
import ahrefs_powered_by from "../../public/assets/svg/ahrefs_powered_by.png";
import google_powered_by from "../../public/assets/svg/google_powered_by.svg";
import main_home_crowd from "../../public/assets/svg/main_home_crowd.png";
import main_home_google from "../../public/assets/svg/main_home_google.svg";
import main_home_trust_pilot from "../../public/assets/svg/main_home_trust_pilot.svg";
import majestic_powered_by from "../../public/assets/svg/majestic_powered_by.svg";
import moz_powered_by from "../../public/assets/svg/moz_powered_by.svg";
import semrush_powered_by from "../../public/assets/svg/semrush_powered_by.svg";
import FirstSlide from "../components/first-slide";
import FourSlide from "../components/four-slide";
import SecondSlide from "../components/second-slide";
import ThirdSlide from "../components/third-slide";
export default function Home() {
  const [selectedSlide, setSelectedSlide] = useState(null);

  const handleSlideClick = (item) => {
    setSelectedSlide(item);
  };
  const blackLinkServiceArray = [
    { id: 0, src: "/assets/svg/domain-authority.svg", text: "Domain Authority" },
    { id: 1, src: "/assets/svg/domain-authority.svg", text: "Guest Post Outreach" },
    { id: 2, src: "/assets/svg/domain-authority.svg", text: "Organic Backlinks" },
    { id: 3, src: "/assets/svg/domain-authority.svg", text: "Monthly SEO" },
  ];
  const [activeSlide, setActiveSlide] = useState(0);

  const renderSlide = () => {
    switch (activeSlide) {
      case 0:
        return <FirstSlide />;
      case 1:
        return <SecondSlide />;
      case 2:
        return <ThirdSlide />;
      case 3:
        return <FourSlide />;
      default:
        return <FirstSlide />;
    }
  };
  const companyLogo = [
    bitcoin,
    wise,
    tetherLogo,
    stripe,
    payoneer,
    paypal,
    bank,
    binance,
  ];
  return (
    <>
      <LayoutProvider parentClassName={"bg-[#FFFFFF] h-full p-5 relative "}>
        <div className="flex flex-col gap-4 md:flex-row ">
          <div className="flex flex-col justify-center w-full gap-4  md:gap-6 lg:gap-8 ">
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
            <div className="">
              <div className="flex flex-wrap items-center gap-2 mb-2 max-md:justify-center">
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
              <div className="flex items-end justify-center gap-4  lg:justify-start max-md:flex-wrap">
                <CustomImage
                  src={main_home_trust_pilot}
                  className="w-[120px] h-[30px] "
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
          <div className="w-full flex items-center justify-center p-4 md:h-[400px] lg:min-h-[600px] ">
            <CustomImage
              src={main_home}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
        {/* =============== */}
        <div className="w-full">
          <PrimaryHeading
            heading={"Powered By"}
            className="mb-2 text-center"
          />
          <div className="flex flex-col flex-wrap items-center justify-center gap-4 md:flex-row md:items-end md:gap-6">
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
          "p-5 bg-home_background bg-cover bg-center bg-no-repeat min-h-[500px] md:min-h-screen w-full "
        }
        childClassName={""}
      >
        <div className="flex flex-wrap items-center justify-center gap-8"></div>

        <div className="flex justify-center space-x-4 mb-5">
          {blackLinkServiceArray.map((item) => (
            <div
              key={item.id}
              className={`p-3 flex flex-col gap-2.5 w-[110px] items-center border rounded-lg cursor-pointer ${activeSlide === item.id ? "bg-gray-200" : "bg-white"
                }`}
              onClick={() => setActiveSlide(item.id)}
            >
              <CustomImage src={item.src} className="w-[50px] h-[50px]" />
              <p className="text-sm text-center font-semibold">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Render Slide */}
        <div className="p-10 bg-linear-clr bg-shadow-clr rounded-[28px]" style={{ boxShadow: "inset 0px 3px 6px #00000029, 0px 6px 6px #00000029" }}>{renderSlide()}</div>
        <div className="flex flex-wrap justify-center w-full mt-5 space-x-2">
          {companyLogo.map((icon, index) => (
            <CustomImage
              key={index}
              src={icon}
              className="w-[150px] h-20 object-contain"
            />
          ))}
        </div>
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

        <div className="w-full bg-center bg-no-repeat bg-cover bg-portfolio_background">
          <div className="flex flex-col gap-10 xl:flex-row bg-white/30 backdrop-blur-lg">
            <div className="flex justify-center gap-4 max-xl:flex-wrap xl:flex-col">
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
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 ">
          {WhyUplinkDataArray?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 p-2 border md:items-start md:gap-3 max-md:max-w-md max-md:mx-auto"
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
