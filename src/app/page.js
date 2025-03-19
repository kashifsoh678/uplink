import SimpleButton from "@/components/common/button/simple-button";
import BlackLinkImgCard from "@/components/common/cards/black-link-img-card";
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
import SecondaryDescription from "@/components/typography/secondary-description";
import SecondaryHeading from "@/components/typography/secondary-heading";
import LayoutProvider from "@/components/wrapper/layout-provider";
import {
  blackLinkServiceArray,
  ClientReviewsArray,
  priceCards,
  WhyUplinkDataArray
} from "@/utils/constants";
import { FaRegClock } from "react-icons/fa6";
import { GoStarFill } from "react-icons/go";
import binance from "../../public/assets/images/binance.png";
import bitcoin from "../../public/assets/images/bitcoin.png";
import clapping from "../../public/assets/images/clapping.png";
import main_home from "../../public/assets/images/main_home.png";
import payoneer from "../../public/assets/images/payoneer.png";
import stripe from "../../public/assets/images/stripe.png";
import telegram from "../../public/assets/images/telegram.png";
import paypal from "../../public/assets/images/paypal.png";
import bank from "../../public/assets/images/bank.png";
import tetherLogo from "../../public/assets/images/tether-logo.png";
import wise from "../../public/assets/images/wise.png";
import ahrefs_powered_by from "../../public/assets/svg/ahrefs_powered_by.png";
import attachLines from "../../public/assets/svg/attach-lines.svg";
import circle from "../../public/assets/svg/circle.svg";
import google_powered_by from "../../public/assets/svg/google_powered_by.svg";
import main_home_crowd from "../../public/assets/svg/main_home_crowd.png";
import main_home_google from "../../public/assets/svg/main_home_google.svg";
import main_home_trust_pilot from "../../public/assets/svg/main_home_trust_pilot.svg";
import majestic_powered_by from "../../public/assets/svg/majestic_powered_by.svg";
import moz_powered_by from "../../public/assets/svg/moz_powered_by.svg";
import semrush_powered_by from "../../public/assets/svg/semrush_powered_by.svg";
import logo1 from "../../public/assets/svg/logo1.svg";
import logo2 from "../../public/assets/svg/logo2.svg";
import logo3 from "../../public/assets/svg/logo3.svg";
import logo4 from "../../public/assets/svg/logo4.svg";
export default function Home() {
  const serviceList = [
    { id: 1, heading: "Ethical and Safe:", description: "Avoid penalties with white-hat techniques that focus on long term benefits." },
    { id: 2, heading: "Builds Authority:", description: "High-quality backlinks boost your site’s reputation in the eyes of search engines and users alike." },
    { id: 3, heading: "Drives Consistent Traffic:", description: "Organic links help maintain steady visitor growth,enhancing both visibility and engagement." },
  ];

  const LogoItems = [logo1, logo2, logo3, logo4];
  const companyLogo = [bitcoin, wise, tetherLogo, stripe, payoneer, paypal, bank, binance];
  return (
    <>
      <LayoutProvider parentClassName={"bg-[#FFFFFF] h-full p-5 relative "}>
        <div className="flex flex-col gap-4 md:flex-row ">
          <div className="flex flex-col justify-center w-full gap-4 border md:gap-6 lg:gap-8 ">
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
              <div className="flex items-end justify-center gap-4 border lg:justify-start max-md:flex-wrap">
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
              className="object-contain w-full h-full"
            />
          </div>
        </div>
        {/* =============== */}
        <div className="w-full border">
          <PrimaryHeading
            heading={"Powered By"}
            className="mb-2 text-center border"
          />
          <div className="flex flex-col flex-wrap items-center justify-center gap-4 border md:flex-row md:items-end md:gap-6">
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
        <div className="flex flex-wrap items-center justify-center gap-8"></div>
        <div className="w-full lg:w-1/3 m-auto">
          <CustomSwiperControl
            slides={blackLinkServiceArray ?? []}
            slidesPerViewConfig={{ 640: 1, 768: 2, 1024: 4, 1280: 4 }}
            loop={true}
            cardComponent={BlackLinkImgCard}
            customSwiperStyles={{
              padding: "10px",
            }}
            customSwiperSlideStyles={{}}
            spaceBetween={12}
          />
        </div>
        <div className="p-5 bg-linear-clr rounder-lg">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-3/5">
              <MainHeading
                text={"Increase Domain Authority"}
              />
              <SecondaryDescription
                description="Our service earns high-quality, natural backlinks from trusted websites. These ethical, white‑hat links boost your site’s authority and drive sustained organic traffic without risk."
                className="!font-normal mt-5 text-black"
              />

              <PrimaryHeading heading={"Why Boost These Metrics?"} className="my-8" />
              <ol className="pl-5 space-y-2 list-decimal">
                {serviceList.map((item) => (
                  <li key={item.id} className="flex items-start space-x-3">
                    <span className="font-bold text-black">●</span>
                    <div className="text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] leading-[24px] sm:leading-[27px] text-[rgb(45,55,72)] font-mb-medium">
                      <span>

                        {item.heading}
                      </span>
                      <span className=" text-sm md:text-md lg:text-lg leading-4 md:leading-5 !font-normal ms-1 text-black">
                        {item.description}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="w-full lg:w-2/5">
              <CustomImage
                src="/assets/images/backlinks-services.png"
                width={0}
                height={0}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-center w-full my-5 space-x-2">
            {LogoItems.map((icon, index) => (
              <CustomImage key={index} src={icon} className="w-[200px] h-auto object-contain" />
            ))}
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {priceCards.map((card) => (
              <div key={card.id} className="relative">
                <div className="absolute inset-0 left-0 w-full h-full bg-blue-500 rounded-lg opacity-30 -top-2"></div>
                <div
                  className="relative h-full p-4 bg-white rounded-lg shadow-lg"
                  style={{ boxShadow: "0px 8px 6px #00000029" }}
                >
                  <div className="flex items-center gap-2">
                    <CustomImage src={clapping} className="w-[30px] h-auto" />
                    <PrimaryHeading heading={card.title} />
                  </div>
                  <PrimaryHeading heading={card.rating} />
                  <SecondaryDescription description={card.description} className="mt-3" />
                  <MainHeading text={card.price} className="my-5 " />

                  <div className="flex flex-col gap-2">
                    {card.subDescriptions.map((subDesc, index) => (
                      <div key={index} className="flex items-center">
                        <CustomImage src={circle} className="w-[10px] h-auto" />
                        <SecondaryDescription description={subDesc} className="ml-2" />
                      </div>
                    ))}
                  </div>
                  <div className="mt-5">
                    <SimpleButton BtnTitle={card.BtnTitle} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="-mt-[50px] hidden lg:block">
            <CustomImage src={attachLines} className="w-[80%] h-auto m-auto" />
          </div>
          <div className="flex justify-center mt-5 lg:-mt-[50px]">
            <SimpleButton BtnTitle={"Order Now"} className="lg:inline-flex text-[38px] !px-20" />
          </div>

          <div className="flex flex-col items-center justify-between w-full p-6 mt-5 space-y-3 lg:flex-row lg:space-y-0 lg:space-x-4">
            <div className="w-full text-center lg:w-1/5 lg:text-left">
              <PrimaryHeading heading="Place Your Order Via" />
            </div>

            <div className=" w-28 h-0.5 bg-gray-400"></div>
            <div className="flex justify-center w-full space-x-3 lg:w-1/5">
              <CustomImage src={telegram} className="w-[50px] h-[50px]" />
              <CustomImage src={telegram} className="w-[50px] h-[50px]" />
              <CustomImage src={telegram} className="w-[50px] h-[50px]" />
              <CustomImage src={telegram} className="w-[50px] h-[50px]" />
            </div>

            <div className=" w-28 h-0.5 bg-gray-400"></div>
            <div className="w-full text-center lg:w-1/5 lg:text-left">
              <SecondaryDescription description="Directly send message to us" />
            </div>
          </div>
          <div className="text-center">
            <SecondaryHeading heading="We accept payments through" />
          </div>
        </div>

        <div className="flex flex-wrap justify-center w-full mt-5 space-x-2">
          {companyLogo.map((icon, index) => (
            <CustomImage key={index} src={icon} className="w-[150px] h-20 object-contain" />
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
