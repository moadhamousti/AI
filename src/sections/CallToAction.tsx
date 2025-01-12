import { Button } from "@/components/Button";
import { SectionBorder } from "@/components/SectionBorder";
import { SectionContent } from "@/components/SectionContent";
import underlineImage from "@/assets/images/underline.svg?url";
import { Orbit } from "@/components/Orbit";
import { Planet } from "@/components/Planet";

export const CallToAction = () => {
  return (
    <section className="pb-[1000px]">
      <div className="container">
        <SectionBorder borderTop>
          <SectionContent className="relative overflow-hidden isolate">
            <div className="absolute -z-10 inset-0 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)]" />
            <div className="absolute inset-0 -z-10">
              <Orbit className="size-[200px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <Orbit className="size-[350px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <Orbit className="size-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <Orbit className="size-[650px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <Orbit className="size-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
              <Planet size="lg" color="violet" className=""/>
            </div>
            <h2 className="text-gray-200 font-semibold text-3xl text-center leading-tight md:text-4xl">
              Join the AI Revolution with{" "}
              <span className="relative isolate">
                <span>Sphereal</span>
                <span
                  className="absolute top-full left-0 w-full h-4 bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-teal-300),var(--color-violet-400),var(--color-fuchsia-400))] -translate-y-1/2 "
                  style={{
                    maskImage: `url(${underlineImage.src})`,
                    maskSize: "contain",
                    maskPosition: "top",
                    maskRepeat: "no-repeat",
                  }}
                ></span>
              </span>
            </h2>
            <p className="text-center text-xl mt-8 ">
              Experience the transformative of AI with Sphereal. Boost your
              productivity and streamline your workflow with our innovative AI
              chat platform.
            </p>
            <div className="flex justify-center mt-10">
              <Button variant="secondary">Get Started</Button>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default CallToAction;
