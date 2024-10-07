"use client"

import Image from "next/image";
import React, {FC} from "react";
import FormSearch from "../FormSearch";

interface HeroProps{

}

const Hero: FC<HeroProps> = ({})=>{
  return(
    <div className="flex flex-row justify-between items-center">
      <div className="w-1/2">
        <div className="text-7xl font-semibold text-slate-600 w-max relative">
          Discover <br /> more then <br /> {" "}
          <span className="text-primary">5000+ Jobs</span>
        </div>
        <Image src='/images/pattern2.png' alt="pattern" width={455} height={32}/>
        <div className="text-muted-foreground text-lg">
          Greet platform for the job seeker that searching for <br />
          new career heights and passionate about startups.
        </div>
        <FormSearch/>
      </div>
      <div className="block mt-2">
        <Image src="/images/hero.png" alt="hero" width={501} height={710} objectFit="contain"/>
      </div>
    </div>
  );
}

export default Hero;