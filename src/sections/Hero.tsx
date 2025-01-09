import { Button } from "@/components/ui/button";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="pt-8 pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC,#EAEEFE_100%)]">
      <div className="container">
        <div className="">
          <div className="text-sm inline-flex border border-[#000] px-3 py-1 rounded-lg text-black tracking tight">
            Version 1.0 is here
          </div>
          <h1 className="text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-6">
            Pathway to productivity
          </h1>
          <p className="text-xl text-[#000000] tracking-tight mt-6">
            Celebrate the joy of accomplishement with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>
          <div className="flex gap-1 items-cnter mt-[30px]">
            <Button variant="primary">Get for free</Button>
            <Button variant="text">
              <span>Learn more</span>
              <ArrowIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="mt-20">
          <Image src={cogImage} alt="Cog Image" />
        </div>
      </div>
    </section>
  );
};
