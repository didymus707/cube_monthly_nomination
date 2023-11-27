import React from "react";
import HeroImg from "../assets/hero.png";
import { Button } from "./custom/button";
import { Footer } from "./footer";
import GreenBlob from "../assets/greenBlob.png";

export const HeroSection = () => {
  return (
    <section
      style={{
        background:
          "linear-gradient(90deg, rgba(116,255,6,1) 52%, rgba(35,230,68,1) 63%)",
      }}
    >
      <div className="hero-container relative">
        <div
          className="hero-bg absolute bg-cover bg-no-repeat bg-center bg-[lightgray]/[0.5] w-[1839px] h-[1310px]"
          style={{ backgroundImage: `url(${GreenBlob})` }}
        />
        <article className="content-container relative z-50 max-w-[800px] flex flex-col items-center justify-center mx-auto bg-white top-[40px]">
          <div className="hero flex justify-center">
            <img src={HeroImg} alt="hero image" />
          </div>
          <div className="pt-7 px-4 text-center">
            <h2 className="font-poppins text-[32px]/[48px] not-italic font-bold tracking-[0.2px] uppercase">
              CUBE OF THE MONTH NOMINATIONS
            </h2>
            <p className="pt-3 font-anon text-base sm:max-w-[600px]">
              At cube we’re passionate about recognising the great work that our
              cubes do. Each month one of our cubes are crowned cube of the
              month 👑⭐. Please nominate who you think deserves this months
              title.
            </p>
          </div>
          <Button text="GET STARTED" classes={["w-[286px] my-8"]} />
        </article>
        {/* <img src={GreenBlob} alt="hero background" /> */}
      </div>

      {/* <Footer /> */}

      {/* <div
        className="flex justify-center w-full px-6 pb-6"
        // className="flex justify-center w-full px-6 py-[21px]"
        // style={{
        //   boxShadow: "0px 2px 10px 0px rgba(26, 26, 25, 0.24)",
        // }}
      >
        <Button text="GET STARTED" />
      </div> */}
      <Footer />
    </section>
  );
};
