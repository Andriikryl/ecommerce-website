import React from "react";
import HeroImg from "../img/bg_hero_two.jpg";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-pink-200 relative  h-[800px] bg-hero bg-no-repeat bg-cover bg-center">
      <div className="container mx-auto flex flex-col h-full items-center justify-center">
        <div className="flex flex-col justify-center translate-y-[200px]">
          <div>
            <h2>New trend</h2>
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4 ">
            Your choiese
          </h1>
        </div>
        <div className="hidden lg:block ">
          <img src={HeroImg}></img>
        </div>
      </div>
    </section>
  );
};

export default Hero;
