import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "../ui/Spotlight";
import { DirectionAwareHover } from "../ui/direction-aware-hover";
import ProfileImg from "../../assets/images/profile.jpeg";

const HeroSection = () => {
  return (
    <div className="absolute top-0 flex h-[30rem] md:min-h-screen w-full overflow-hidden  bg-white dark:bg-black antialiased items-center justify-center">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      /> */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
        <div className="flex items-center justify-center my-6">
          <DirectionAwareHover imageUrl={ProfileImg}>
            <p className="font-bold text-xl">Profile</p>
          </DirectionAwareHover>
        </div>
        <h1 className=" bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
          Dominic Lakshan
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-gray-600 dark:text-neutral-300">
          Final year IT undergraduate with a passion for solving real-world
          problems through innovative software — building tech that makes life
          better for everyone.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
