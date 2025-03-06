"use client";
import React, { useState, useEffect } from "react";
import LayoutProvider from "@/components/wrapper/layout-provider";
import PrimaryHeading from "@/components/typography/primary-heading";
import SecondaryHeading from "@/components/typography/secondary-heading";
import { NavLinksArray } from "@/utils/constants";
import { FaBarsStaggered} from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0); // Check if the page has been scrolled
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <LayoutProvider
        parentClassName={`sticky top-0 z-10 pt-4 transition-all duration-300 ease-in-out ${
          isSticky ? "bg-transparent" : "bg-white"
        }`}
        childClassName={`text-black p-4 transition-all duration-300 ease-in-out ${
          isSticky ? "backdrop-blur-md" : ""
        } rounded-lg shadow-xl`}
      >
        <div className="flex items-center justify-between ">
          <div className="cursor-pointer rounded-lg bg-blue-600 py-2 px-8 max-w-auto ">
            <PrimaryHeading heading={"Uplinke"} className={"text-white"} />
          </div>
          <div className="max-lg:hidden lg:flex items-center gap-4">
            {NavLinksArray?.map((item, index) => (
              <SecondaryHeading
                key={index}
                heading={item.label}
                className="cursor-pointer rounded-lg hover:bg-blue-600 hover:text-white py-2 px-4 max-w-auto"
              />
            ))}
            <div className="cursor-pointer rounded-lg bg-blue-600 py-2 px-4 max-w-auto">
              <SecondaryHeading
                heading={"Order Now"}
                className={"text-white"}
              />
            </div>
          </div>
          <div className="lg:hidden" onClick={toggleSidebar}>
            {isSidebarOpen ? (
              <FaTimes size={22} />
            ) : (
              <FaBarsStaggered size={22} />
            )}
          </div>
        </div>
      </LayoutProvider>

      {/* Sidebar for smaller screens */}
      <div
        className={`fixed inset-0 z-20 lg:hidden transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm ${
            isSidebarOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={toggleSidebar}
        ></div>
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4">
            <div className="flex justify-end">
              <FaTimes
                size={22}
                onClick={toggleSidebar}
                className="cursor-pointer"
              />
            </div>
            <div className="mt-4">
              {NavLinksArray?.map((item, index) => (
                <SecondaryHeading
                  key={index}
                  heading={item.label}
                  className="cursor-pointer rounded-lg hover:bg-blue-600 hover:text-white py-2 px-4 max-w-auto block mb-2"
                />
              ))}
              <div className="cursor-pointer rounded-lg bg-blue-600 py-2 px-4 max-w-auto">
                <SecondaryHeading
                  heading={"Order Now"}
                  className={"text-white"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
