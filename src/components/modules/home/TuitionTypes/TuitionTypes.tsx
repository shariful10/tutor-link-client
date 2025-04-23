"use client"
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TuitionTypes = () => {
    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true, 
        easing: "ease-in-out",
      });
    }, []);

  const cards = [
    {
      title: "Home Tutoring",
      description:
        "Looking for one-to-one classes? Learn at home with personalized teaching tailored to your needs.",
      bgColor: "bg-gay-100",
      image:
        "https://i.ibb.co.com/7NXX4pY5/165667673931855cute-little-boy-study-with-father-home-together-removebg-preview.png",
    },
    {
      title: "Online Tutoring",
      description:
        "Get connected with expert tutors from anywhere and take interactive online classes with ease.",
      bgColor: "bg-gay-100",
      image:
        "https://i.ibb.co.com/21K2CW15/4b9d5dd1-35e2-4389-a7c6-bffa33dcbd4b-removebg-preview.png",
    },
    {
      title: "Group Tutoring",
      description:
        "Enjoy a collaborative learning experience with peers while keeping tuition fees affordable.",
      bgColor: "bg-gay-100",
      image:
        "https://i.ibb.co.com/RGLKjV6G/165665874841939students-and-teacher1-removebg-preview-removebg-preview.png",
    },
  ];

  return (
    <div className="container mx-auto px-10 py-8">
      {/* Title Section */}
      <div className="text-center">
        <h1 className="text-3xl lg:text-4xl font-bold text-[#2A2B2C]">
          Service <span className="text-[#ac0ed4c5]">Categories</span>
        </h1>
        <p className="mt-3 text-lg text-gray-700">
          Find the best tuition type that suits you best.
        </p>
      </div>

      {/* Card Grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
          data-aos="fade-up"
     data-aos-duration="4000"
            key={index}
            className={`${card.bgColor} rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:scale-105`}
          >
            {/* Image Section */}
            <div className="relative w-full h-56 rounded-lg overflow-hidden mb-6">
              <Image
                src={card.image}
                alt={card.title}
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* Text Content */}
            <h3 className="text-2xl font-semibold text-gray-900">
              {card.title}
            </h3>
            <p className="text-gray-700 mt-2">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TuitionTypes;
