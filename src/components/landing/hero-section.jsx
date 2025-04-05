import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "../ui/Spotlight";
import { DirectionAwareHover } from "../ui/direction-aware-hover";
import ProfileImg from "../../assets/images/profile.jpeg";

const HeroSection = () => {
  return (
    <div className="absolute top-0 flex h-screen w-full overflow-hidden  bg-black/[0.96] antialiased items-center justify-center">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
        <div className="flex items-center justify-center my-6">
          <DirectionAwareHover imageUrl={ProfileImg}>
            <p className="font-bold text-xl">Profile</p>
          </DirectionAwareHover>
        </div>
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
          Dominic Lakshan
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300">
          Final year IT undergraduate with a passion for solving real-world
          problems through innovative software — building tech that makes life
          better for everyone.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
