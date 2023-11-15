import React from "react";
import HeroImg from "../assets/hero.png";
import { Button } from "./custom/button";

export const HeroSection = () => {
  return (
    <section>
      <div className="hero">
        <img src={HeroImg} alt="hero image" />
      </div>
      <article className="pt-7 px-4 text-center">
        <h2 className="font-poppins text-[32px]/[48px] not-italic font-bold tracking-[0.2px] uppercase border border-blue-700">
          CUBE OF THE MONTH NOMINATIONS
        </h2>
        <p className="pt-3 font-anon text-base">
          At cube we’re passionate about recognising the great work that our
          cubes do. Each month one of our cubes are crowned cube of the month
          👑⭐. Please nominate who you think deserves this months title.
        </p>
      </article>

      <div
        className="flex justify-center w-full mt-[154px] px-6 py-[21px]"
        style={{
          boxShadow: "0px 2px 10px 0px rgba(26, 26, 25, 0.24)",
        }}
      >
        <Button text="GET STARTED" />
      </div>
    </section>
  );
};