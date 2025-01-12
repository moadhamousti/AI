import robotImg from "@/assets/images/robot.jpg";
import { Button } from "@/components/Button";
import Image from "next/image";
import underlineImage from "@/assets/images/underline.svg?url";
import Loader from "@/assets/images/loader.svg";
import { Orbit } from "@/components/Orbit";
import { Planet } from "@/components/Planet";
import { SectionBorder } from "@/components/SectionBorder";
import { SectionContent } from "@/components/SectionContent";

export const Hero = () => {
  return (
    <section className="">
      <div className="container">
        <SectionBorder>
          <SectionContent className="relative isolate [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            <div className="absolute -z-10 inset-0 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)]"></div>
            <div className="absolute inset-0 -z-10">
              <div className="relative w-full h-full">
                <Orbit className="size-[280px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                <Orbit className="size-[530px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                <Orbit className="size-[780px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                <Orbit className="size-[1030px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                <Orbit className="size-[1280px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-gray-100 text-center leading-tight">
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
            <p className="text-center text-lg mt-8 md:text-xl max-w-3xl mx-auto">
              Harness the power of AI with Sphereal. Elevate your productivity
              and streamline our workflow with cutting-edge AI chat platform.
            </p>
            <div className="flex justify-center">
              <Button variant="secondary" className="mt-10 ">
                Start Chatting
              </Button>
            </div>
            <div className="relative isolate max-w-5xl mx-auto">
              <div className="absolute left-1/2 top-0">
                <Planet
                  size="lg"
                  color="violet"
                  className="-translate-x-[285px] -translate-y-[76px] rotate-135"
                />
                <Planet
                  size="lg"
                  color="violet"
                  className="translate-x-[319px] -translate-y-[190px] -rotate-135"
                />
                <Planet
                  size="sm"
                  color="fuchsia"
                  className="-translate-x-[450px] -translate-y-[390px] rotate-135"
                />
                <Planet
                  size="md"
                  color="teal"
                  className="translate-x-[475px] -translate-y-[360px] -rotate-135"
                />
              </div>
              <div className="absolute left-0 z-10 top-[30%] -translate-x-10 hidden lg:block">
                <div className="bg-gray-800/70 backdrop-blur-md border-gray-700 rounded-xl p-4 w-72">
                  <div className="">
                    Can you generate an incredible frontend dev video tutorial?
                  </div>
                  <div className="text-right text-gray-400 text-sm font-semibold">
                    1m ago
                  </div>
                </div>
              </div>
              <div className="absolute right-0 z-10 top-[50%] translate-x-10 hidden lg:block">
                <div className="bg-gray-800/70 backdrop-blur-md border-gray-700 rounded-xl p-4 w-72">
                  <div className="">
                    <strong>Brainwave:</strong> I created one based on based on
                    videos from Frontend Tribe!
                  </div>
                  <div className="text-right text-gray-400 text-sm font-semibold">
                    1m ago
                  </div>
                </div>
              </div>
              <div className="mt-20 rounded-2xl border-2 overflow-hidden border-gradient relative flex">
                <Image src={robotImg} alt="Robot Image" />
                <div className="absolute bottom-2 left-1/2 md:bottom-4 lg:bottom-10 -translate-x-1/2 px-4">
                  <div className="bg-gray-950/80 flex items-center gap-4 px-4 py-2 rounded-2xl w-[320px] max-w-full">
                    <Loader className="text-violet-400" />
                    <div className="font-semibold text-xl text-gray-100">
                      AI is generating<span>|</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Hero;
