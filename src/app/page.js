import LayoutProvider from "@/components/wrapper/layout-provider";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <LayoutProvider
                parentClassName={"bg-white h-full p-5 relative bg-[url(https://i.pinimg.com/736x/5a/b3/82/5ab3824f68c7fbe483858715447e3b81.jpg)]"}
                childClassName={"p-5 rounded-md h-[500px] w-full bg-white/30 backdrop-blur-lg "}
            >
                <div>home w</div>
                <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
                <div class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            </LayoutProvider>
        </>
    );
}
