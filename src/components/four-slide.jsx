import React from "react";
import Loader from "@/components/common/loader";
import clapping from "../../public/assets/images/clapping.png";
import telegram from "../../public/assets/images/telegram.png";
import attachLines from "../../public/assets/svg/attach-lines.svg";
import circle from "../../public/assets/svg/circle.svg";
import MainHeading from "@/components/typography/main-heading";
import PrimaryDescription from "@/components/typography/primary-description";
import PrimaryHeading from "@/components/typography/primary-heading";
import CustomImage from "@/components/common/custom-image";
import SecondaryDescription from "@/components/typography/secondary-description";
import SecondaryHeading from "@/components/typography/secondary-heading";
import { seoPriceCards } from "@/utils/constants";
import SimpleButton from "@/components/common/button/simple-button";
import logo1 from "../../public/assets/images/logo1.jpg";
import logo2 from "../../public/assets/images/logo2.jpg";
import logo3 from "../../public/assets/images/logo3.jpg";
import logo4 from "../../public/assets/images/logo4.jpg";
const FourSlide = () => {
  const serviceList = [
    {
      id: 1,
      heading: "Boosts Authority: ",
      description:
        "Quality backlinks signal credibility to search engines.",
    },
    {
      id: 2,
      heading: "Drives Organic Traffic:",
      description:
        " Better rankings mean more targeted visitors.",
    },
    {
      id: 3,
      heading: "Keeps You Competitive: ",
      description:
        "Ongoing efforts help you stay ahead of the competition.",
    },
  ];

  const LogoItems = [logo1, logo2, logo3, logo4];
  return (
    <>
      {/* <div className="p-5 bg-linear-clr rounder-lg"> */}
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/5">
          <MainHeading text={"Monthly SEO service"} />
          <SecondaryDescription
            description="Our monthly off-page SEO service focuses exclusively on strengthening your website’s external authority through strategic link-building and digital PR. By acquiring high-quality, niche-relevant backlinks and performing regular audits, we ensure your site gains trust and visibility in search engines."
            className="!font-normal mt-5 text-black"
          />

          <PrimaryHeading
            heading={"Why Off-Page SEO Matters:"}
            className="my-8"
          />
          <ol className="pl-5 space-y-2 list-decimal">
            {serviceList.map((item) => (
              <li key={item.id} className="flex items-start space-x-3">
                <span className="font-bold text-black">●</span>
                <div className="text-[16px] sm:text-[17px] md:text-[18px] lg:text-[19px] leading-[24px] sm:leading-[27px] text-[rgb(45,55,72)] font-mb-medium">
                  <span>{item.heading}</span>
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
          <CustomImage
            key={index}
            src={icon}
            className="w-[200px] h-auto object-contain"
          />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {seoPriceCards.map((card) => (
          <div key={card.id} className="relative">
            <div className="absolute inset-0 left-0 w-full h-full bg-[#CCF1FE] rounded-lg opacity-30 -top-2"></div>
            <div
              className="relative h-full p-[42px] bg-white rounded-lg shadow-lg"
              style={{ boxShadow: "0px 8px 6px #00000029" }}
            >
              <div className="flex items-center gap-2">
                <CustomImage src={clapping} className="w-[30px] h-auto" />
                <PrimaryHeading heading={card.title} />
              </div>
              <PrimaryHeading heading={card.rating} />
              <SecondaryDescription
                description={card.description}
                className="mt-3"
              />
              <MainHeading text={card.price} className="my-5 " />

              <div className="flex flex-col gap-2">
                {card.subDescriptions.map((subDesc, index) => (
                  <div key={index} className="flex items-center">
                    <CustomImage src={circle} className="w-[10px] h-auto" />
                    <SecondaryDescription
                      description={subDesc}
                      className="ml-2"
                    />
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
        <SimpleButton
          BtnTitle={"Order Now"}
          className="lg:inline-flex text-[38px] !px-20"
        />
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
      {/* </div> */}
    </>
  );
};

export default FourSlide;
