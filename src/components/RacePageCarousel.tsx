import Image from "next/image";
import { useState } from "react";

type CarouselProps = {
  images: {
    src: string;
    alt: string;
  }[];
};

const RaceCarousel = ({ images }: CarouselProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex(
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  return (
    <div className="relative">
      <div className="flex justify-center h-screen">
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded-full opacity-50 hover:opacity-100 focus:outline-none"
          onClick={prevImage}
        >
          Prev
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded-full opacity-50 hover:opacity-100 focus:outline-none"
          onClick={nextImage}
        >
          Next
        </button>
        <Image
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].alt}
          className="w-full h-full object-cover"
          fill
        />
      </div>

      <div className="absolute right-0 bottom-4 justify-center flex w-full">
        <div className="flex justify-center mt-2">
          {images.map((image, index) => (
            <button
              key={index}
              className={`mx-2 ${
                index === currentImageIndex
                  ? "bg-amber-400 text-white cursor-default"
                  : "bg-stone-100 text-black hover:bg-amber-500"
              } h-12 w-12 relative rounded-2xl text-xl hover:text-white focus:outline-none bg-opacity-90`}
              onClick={() => setCurrentImageIndex(index)}
            >
              <div className="absolute top-2 left-[17px]">{index + 1}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RaceCarousel;
