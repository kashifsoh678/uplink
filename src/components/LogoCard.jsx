import React from "react";
import CustomImage from "@/components/common/custom-image"; // Import the CustomImage component
import box2 from "../../public/assets/images/box2.png";
import box4 from "../../public/assets/images/box4.png";
import Progress from "../../public/assets/svg/progress.svg"; // Ensure this path is correct

// Define the data array
const logoData = [
    { id: 1, logo: box2, progress: Progress, count: "60+" },
    { id: 2, logo: box2, progress: Progress, count: "100+" },
    { id: 3, logo: box4, progress: Progress, count: "200+" },
    { id: 2, logo: box4, progress: Progress, count: "200+" },
];

export default function LogoCard() {
    return (
        <div className="flex flex-wrap justify-center  gap-5 mt-5 mb-10" data-aos="fade-up">
            {logoData.map((item) => (
                <div key={item.id} className="logo-card logo-shadow py-3 flex flex-col w-[160px] items-center">
                    <CustomImage src={item.logo} className="w-[100px] h-auto" />
                    <div className="flex items-center gap-1">
                        <CustomImage src={item.progress} className="w-[40px] h-auto" />
                        <h3 className="text-[30px] font-semibold">{item.count}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
}
