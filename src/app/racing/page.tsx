"use client";

import Carousel from "../../components/Carousel";
import Image from "next/image";

import gbcLogo from "../../../public/assets/images/GBC-Logo.png";

const images = [
  "/assets/images/racing/1.jpeg",
  "/assets/images/racing/2.jpeg",
  "/assets/images/racing/3.jpeg",
  "/assets/images/racing/4.jpeg",
  "/assets/images/racing/5.jpeg",
  "/assets/images/racing/6.jpeg",
];

const RacingPage = () => {
  return (
    <section className="flex flex-col w-full items-center min-h-screen">
      <div className="flex flex-col w-4/5 gap-4">
        <div className="border-b-2 border-gray-300 py-2 mb-4">
          <h2 className="text-4xl tracking-tighter">Racing</h2>
        </div>
        <div className="flex justify-around w-full gap-4 items-start">
          <div className="border rounded-lg py-12 px-8 w-[90%]">
            <p className="text-2xl flex flex-col gap-4 tracking-wider leading-8">
              If you would like to improve your sailing skills, there is no
              better way than racing!{" "}
              <span>
                We are always happy to bring on new racing crew. The more boats,
                the merrier.
              </span>
              <span>
                Starting on{" "}
                <span className="text-sky-900 font-medium">
                  Tuesday nights{" "}
                </span>
                beginning in May, we will be running through some of the basics
                of crewing on a racing boat and we hope that many of you will
                join us.
              </span>
              <span>
                That’s how most sailors get started racing: you crew on
                someone’s boat and then you get the confidence to take your own
                boat out. Once the race is done, everyone gathers for a
                post-race debrief which consists of friendly banter and
                beverages. If you are interested and would like more
                information, please contact our{" "}
                <span className="text-sky-800">Fleet Captain</span>,{" "}
                <span className="text-blue-700 font-normal">Douglas Young</span>
                .
              </span>
            </p>
          </div>
          <Image src={gbcLogo} alt="" />
        </div>
        <Carousel loop>
          {images.map((src, i) => {
            return (
              // 👇 style each individual slide.
              // relative - needed since we use the fill prop from next/image component
              // h-64 - arbitrary height
              // flex[0_0_100%]
              //   - shorthand for flex-grow:0; flex-shrink:0; flex-basis:100%
              //   - we want this slide to not be able to grow or shrink and take up 100% width of the viewport.
              <div className="relative h-[400px] flex-[0_0_100%]" key={i}>
                {/* use object-cover + fill since we don't know the height and width of the parent */}
                <Image src={src} fill className="object-cover" alt="alt" />
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default RacingPage;
