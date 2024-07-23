import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";
const Header = () => {
  return (
    <div className="flex justify-center items-center flex-col">
        <div className="flex max-w-fit   text-white p-5 top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000]  items-center justify-center space-x-4">
            <div className="  cursor-pointer transition hover:scale-110">
                Home
            </div>
            <div className="  cursor-pointer transition hover:scale-110">
                Services
            </div>
            <div className="  cursor-pointer transition hover:scale-110">
                Projects
            </div>
            <div className="  cursor-pointer transition hover:scale-110">
                Social Media
            </div>
            <div className="  cursor-pointer transition hover:scale-110">
                Contact
            </div>
        </div>
        <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center  antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        See  <br /> my experience 
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
        I am a professional front-end developer with experience in the field. I used tailwind css, React, and Next.js to develop this site. The site is ready now.
        </p>
      </div>
    </div>
    </div>
  )
}

export default Header