import React from "react";
import CustomImage from "@/components/common/custom-image"; // Import the CustomImage component
import box2 from "../../public/assets/images/box2.png";
import box4 from "../../public/assets/images/box4.png";
import majestic from "../../public/assets/images/majestic-logo.png";
import semrush from "../../public/assets/images/semrush-logo.png";
import Progress from "../../public/assets/svg/progress.svg"; // Ensure this path is correct
import progress_2 from "../../public/assets/svg/progress_2.png"; // Ensure this path is correct
import progress_3 from "../../public/assets/svg/progress_3.png"; // Ensure this path is correct

// Define the data array
const logoData = [
  {
    id: 1,
    logo: box2,
    progress: progress_2,
    count: "60+",
    height: 30,
    width: 120,
  },
  {
    id: 2,
    logo: box4,
    progress: Progress,
    count: "70+",
    height: 30,
    width: 120,
  },
  {
    id: 3,
    logo: majestic,
    progress: progress_3,
    count: "90+",
    height: 30,
    width: 100,
  },
  {
    id: 4,
    logo: semrush,
    progress: Progress,
    count: "78+",
    height: 50,
    width: 140,
  },
];

export default function LogoCard() {
  return (
    <div
      className="flex flex-wrap justify-center  gap-5 mt-5 mb-10"
      data-aos="fade-up"
    >
      {logoData.map((item) => (
        <div
          key={item.id}
          className="logo-card logo-shadow py-3 flex flex-col  justify-between gap-2 w-[160px] items-center bg-[#ffffff]  h-30"
        >
          <div className="">
            <CustomImage
              src={item.logo}
              className=""
              height={item?.height}
              width={item?.width}
            />
          </div>
          <div className="flex items-center gap-1 ">
            <CustomImage src={item.progress} className="w-[40px] h-auto" />
            <h3 className="text-[30px] font-semibold">{item.count}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
