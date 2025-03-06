"use client";
import PrimaryDescription from "@/components/typography/primary-description";
import PrimaryHeading from "@/components/typography/primary-heading";
import SecondaryDescription from "@/components/typography/secondary-description";
import SecondaryHeading from "@/components/typography/secondary-heading";
import LayoutProvider from "@/components/wrapper/layout-provider";
import { FaqsDataArray } from "@/utils/constants";
import React, { useState } from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const FAQS = () => {
  const [openIndex, setOpenIndex] = useState(null); // State to keep track of the open FAQ item

  // Function to toggle the open FAQ item
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // If clicked again, it will close, else it opens
  };

  return (
    <LayoutProvider parentClassName={"border w-full"} childClassName={"border"}>
      {/* ===header */}
      <div className="w-full flex flex-col items-center my-[20px] md:my-[30px] lg:my-[50px] gap-4 md:gap-6 lg:gap-8 mx-auto">
        <PrimaryHeading
          heading={"Frequently Asked Questions"}
          className="text-3xl md:text-4xl lg:text-6xl font-mb-bold text-center"
        />
        <PrimaryDescription
          description={
            "Use this space to provide your website visitors with a brief description on what to expect before clicking on a section title."
          }
          className="text-center !text-md md:!text-xl lg:!text-2xl text-[#B5B5B5] font-mb-regular max-w-6xl border"
        />
      </div>

      <div
        className="border p-5 md:p-6 lg:p-10 flex flex-col gap-4 md:gap-5 lg:gap-6"
        style={{
          background:
            "transparent url('img/Rectangle 2000.png') 0% 0% no-repeat padding-box",
          boxShadow: "inset 0px 3px 6px #00000029, 0px 6px 6px #00000029",
          borderRadius: "28px",
        }}
      >
        {FaqsDataArray.map((faq, index) => (
          <div
            key={faq.id}
            className="bg-[#F6F6F6] p-3 md:p-5 lg:p-6 rounded-lg transition-all duration-300 ease-in-out"
          >
            <div
              className="flex justify-between items-center cursor-pointer gap-2"
              onClick={() => toggleAccordion(index)}
            >
              <SecondaryHeading heading={faq.label} className="text-black" />
              <span className="transition-transform duration-300 ease-in-out">
                {openIndex === index ? (
                  <FaMinus color="#000000" size={22} />
                ) : (
                  <FaPlus color="#000000" size={22} />
                )}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "mt-8 max-h-[500px]" : "max-h-0"
              }`}
            >
              <SecondaryDescription
                description={faq.desc}
                className="text-[#B5B5B5]"
              />
            </div>
          </div>
        ))}
      </div>
    </LayoutProvider>
  );
};

export default FAQS;
