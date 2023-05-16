"use client";

import Image from "next/image";
import gbcLogo from "../../../public/assets/images/GBC-Logo.png";
import raceCourse from "../../../public/assets/images/2022-race-course.png";
import RaceCarousel from "../../components/RacePageCarousel";

import { useState } from "react";

const images = [
  {
    src: "/assets/images/racing/1.jpeg",
    alt: "Image 1",
  },

  {
    src: "/assets/images/racing/3.jpeg",
    alt: "Image 3",
  },
  {
    src: "/assets/images/racing/4.jpeg",
    alt: "Image 4",
  },
  {
    src: "/assets/images/racing/5.jpeg",
    alt: "Image 5",
  },
  {
    src: "/assets/images/racing/6.jpeg",
    alt: "Image 6",
  },
];

const RacingPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  return (
    <section className="flex flex-col w-full items-center min-h-screen">
      <div className="flex flex-col w-4/5 gap-4">
        <div className="border-b-2 border-gray-300 py-2 mb-4">
          <div className="flex w-full items-center justify-between">
            <h2 className="text-4xl tracking-tighter">Racing</h2>
            <button
              onClick={() => setShowModal(true)}
              className="secondary-btn"
            >
              View Race Courses
            </button>
          </div>
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
        <RaceCarousel images={images} />
      </div>
      {showModal && (
        <div className="fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-0 right-0 m-4 text-black hover:text-slate-50 bg-red-50 hover:bg-red-500 border-slate-900 hover:border-red-900 transition-colors ease-in-out duration-200"
            >
              X
            </button>
            <Image src={raceCourse} alt="race course" />
          </div>
        </div>
      )}
    </section>
  );
};

export default RacingPage;
