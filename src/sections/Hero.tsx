import robotImg from "@/assets/images/robot.jpg";
import { Button } from "@/components/Button";
import Image from "next/image";
import underlineImage from "@/assets/images/underline.svg?url";
import Loader from "@/assets/images/loader.svg";
import { Orbit } from "@/components/Orbit";

export const Hero = () => {
  return (
    <section className="pb-[1000px]">
      <div className="container">
        <div className="border-l border-r border-[var(--color-border)]">
          <div className="container py-24 md:py-36 relative isolate overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            <div className="absolute -z-10 inset-0 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)]"></div>
            <div className="absolute inset-0 -z-10">
              <div className="relative w-full h-full">
                <Orbit className="w-[350px] h-[350px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                <Orbit className="w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                <Orbit className="w-[850px] h-[850px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                <Orbit className="w-[1100px] h-[1100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                <Orbit className="w-[1350px] h-[1350px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-semibold text-gray-100 text-center leading-tight">
              Unlock the Future of AI Conversations with{" "}
              <span className="relative">
                <span>Sphereal</span>{" "}
                <span
                  className="absolute w-full left-0 top-full -translate-y-1/2 h-4 bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-teal-300),var(--color-violet-400),var(--color-fuchsia-400))]"
                  style={{
                    maskImage: `url(${underlineImage.src})`,
                    maskSize: "contain",
                    maskPosition: "center",
                    maskRepeat: "no-repeat",
                  }}
                ></span>
              </span>
            </h1>
            <p className="text-center text-lg mt-8 md:text-xl">
              Harness the Power of AI with Sphereal. Elevate your Productivity
              and Streamline our Workflow with Cutting-Edge AI Chat Platform
            </p>
            <div className="flex justify-center">
              <Button variant="secondary" className="mt-10 ">
                Start Chatting
              </Button>
            </div>
            <div className="mt-20 rounded-2xl border-2 overflow-hidden border-gradient relative flex">
              <Image src={robotImg} alt="Robot Image" />
              <div className="absolute bottom-2 left-1/2 md:bottom-4 -translate-x-1/2 px-4">
                <div className="bg-gray-950/80 flex items-center gap-4 px-4 py-2 rounded-2xl w-[320px] max-w-full">
                  <Loader className="text-violet-400" />
                  <div className="font-semibold text-xl text-gray-100">
                    AI is generating<span>|</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
