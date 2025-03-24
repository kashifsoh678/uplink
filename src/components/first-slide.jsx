import SimpleButton from "@/components/common/button/simple-button";
import CustomImage from "@/components/common/custom-image";
import MainHeading from "@/components/typography/main-heading";
import PrimaryHeading from "@/components/typography/primary-heading";
import SecondaryDescription from "@/components/typography/secondary-description";
import SecondaryHeading from "@/components/typography/secondary-heading";
import { priceCards } from "@/utils/constants";
import clapping from "../../public/assets/images/clapping.png";
import telegram from "../../public/assets/images/telegram.png";
import linkedin from "../../public/assets/images/linkedin.png";
import message from "../../public/assets/images/message.png";
import whatsapp from "../../public/assets/images/whatsapp.png";
import attachLines from "../../public/assets/svg/attach-lines.svg";
import circle from "../../public/assets/svg/circle.svg";
import logo1 from "../../public/assets/images/logo1.jpg";
import logo2 from "../../public/assets/images/logo2.jpg";
import logo3 from "../../public/assets/images/logo3.jpg";
import logo4 from "../../public/assets/images/logo4.jpg";
import LogoCard from "./LogoCard";
const FirstSlide = () => {
  const bgColors = ["bg-[#DEFAD4]", "bg-[#FEE3D4]", "bg-[#CCF1FE]"];
  const serviceList = [
    {
      id: 1,
      heading: "Ethical and Safe:",
      description:
        "Avoid penalties with white-hat techniques that focus on long term benefits.",
    },
    {
      id: 2,
      heading: "Builds Authority:",
      description:
        "High-quality backlinks boost your site’s reputation in the eyes of search engines and users alike.",
    },
    {
      id: 3,
      heading: "Drives Consistent Traffic:",
      description:
        "Organic links help maintain steady visitor growth,enhancing both visibility and engagement.",
    },
  ];

  const LogoItems = [logo1, logo2, logo3, logo4];
  return (
    <>
      {/* <div className="p-5 bg-linear-clr rounder-lg"> */}
      <div className="flex flex-col lg:flex-row ">
        <div className="w-full lg:w-3/5" data-aos="fade-left">

          <MainHeading text={"Increase Domain Authority"} />
          <SecondaryDescription
            description="Our service earns high-quality, natural backlinks from trusted websites. These ethical, white‑hat links boost your site’s authority and drive sustained organic traffic without risk."
            className="!font-normal mt-5 text-black"
          />

          <PrimaryHeading
            heading={"Why Boost These Metrics?"}
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
        <div className="w-full lg:w-2/5" data-aos="fade-right">
          <CustomImage
            src="/assets/images/backlinks-services.png"
            width={0}
            height={0}
            className="w-full h-auto"
          />
        </div>
      </div>
      <LogoCard />

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3" >
        {priceCards.map((card, index) => (
          <div key={card.id} className="relative" data-aos="flip-right">
            <div className={`absolute inset-0 left-0 w-full h-full rounded-[27px] opacity-30 -top-3 ${bgColors[index % bgColors.length]}`}></div>
            <div
              className="relative mx-[2px] h-full p-[42px] bg-white rounded-[27px] flex flex-col justify-between"
              style={{ boxShadow: "0px 8px 6px #00000029" }}
            >
              <div className="flex items-center gap-2">
                <CustomImage src={clapping} className="w-[30px] h-auto" />
                <PrimaryHeading heading={card.title} />
              </div>
              <div>
                <PrimaryHeading heading={card.rating} />
                <SecondaryDescription description={card.description} className="mt-3" />
              </div>
              <div>
                <MainHeading text={card.price} className="my-5" />
              </div>
              <div className="flex flex-col gap-2">
                {card.subDescriptions.map((subDesc, index) => (
                  <div key={index} className="flex items-center">
                    <CustomImage src={circle} className="w-[10px] h-auto" />
                    <SecondaryDescription description={subDesc} className="ml-2" />
                  </div>
                ))}
              </div>
              <div className="mt-5">
                <SimpleButton BtnTitle={card.BtnTitle}  />
              </div>
            </div>
          </div>
        ))}
      </div>


      <div className="-mt-[50px] hidden lg:block -z-20 " >
        <CustomImage src={attachLines} className="w-[80%] h-auto m-auto" />
      </div>
      <div className="flex justify-center mt-5 lg:-mt-[50px]">
        <SimpleButton
          BtnTitle={"Order Now"}
          className="lg:inline-flex text-[38px] !px-20 font-mb-medium flex items-center pt-3"
        />
      </div>

      <div className="flex flex-col items-center justify-between w-full my-5 space-y-3 lg:flex-row lg:space-y-0 gap-2 ">

        <div className="w-full text-center lg:w-3/12  lg:text-left ">
          <PrimaryHeading heading="Place Your Order Via" className={"lg:!text-2xl xl:!text-4xl"} />
        </div>

        <div className="w-4/12 xl:w-[15%] h-0.5 lg:w-1/12 bg-gray-400 "></div>

        <div className="flex items-center justify-center  space-x-3 lg:w-4/12   ">
          <CustomImage src={linkedin} className="w-[50px] h-[50px]" data-aos={"flip-right"} />
          <div className="w-[50px] h-[50px] p-2 rounded-lg bg-[#9A9A9A] block" data-aos={"flip-right"}>
            <CustomImage src={message} className=" w-full h-full "  />
          </div>
          <CustomImage src={whatsapp} className="w-[50px] h-[50px] " data-aos={"flip-right"}/>
          <CustomImage src={telegram} className="w-[50px] h-[50px]" data-aos={"flip-right"}/>
        </div>

        <div className="w-4/12  xl:w-[15%] h-0.5 lg:w-1/12 bg-gray-400 "></div>

        <div className="w-full text-center lg:w-3/12 lg:text-left  max-w-sm">
          <SecondaryDescription description="Directly send message to us" className={""} />
          <div className=" rounded-full flex items-center justify-between border p-2 max-lg:mt-2">
            <SecondaryDescription description="I want your services" className={"!text-sm ml-2"} />
            <div className="bg-[#32CD21] py-2 px-4 rounded-full">
              <SecondaryDescription description="send" className="!text-sm" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <SecondaryHeading heading="We accept payments through" />
      </div>
      {/* </div> */}
    </>
  );
};

export default FirstSlide;
