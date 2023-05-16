"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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

const CarouselComponent = () => {
  return (
    <div className="flex w-full">
      <Carousel showThumbs={false} className="flex w-full border-4">
        {images.map((image) => (
          <div key={image.src} className="flex w-fit h-screen object-cover ">
            <Image src={image.src} alt={image.alt} fill />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
