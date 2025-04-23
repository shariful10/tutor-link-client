"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Futures = () => {
  const images = [
    {
      id: 1,
      url: "https://i.ibb.co.com/4ZL49mKf/download-6.jpg",
    },
    {
      id: 2,
      url: "https://i.ibb.co.com/vCZMBcP1/download-5.jpg",
    },
    {
      id: 3,
      url: "https://i.ibb.co.com/4nSpxwkt/images.png",
    },
    {
      id: 4,
      url: "https://i.ibb.co.com/d0xcK3Nq/download.png",
    },
    {
      id: 5,
      url: "https://i.ibb.co.com/4ZL49mKf/download-6.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="w-full mx-auto container md:px-16 px-10">
      <h1 className=" text-center text-4xl mb-14 font-bold "> Featured</h1>
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((image) => (
            <div
              key={image.id}
              className="flex justify-center text-center items-center"
            >
              <Image
                src={image.url}
                alt={`Image ${image.id}`}
                width={200}
                height={200}
                className="object-contain h-20 w-32"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Futures;
