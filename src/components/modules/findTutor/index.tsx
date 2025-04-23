import Image from "next/image";
import React from "react";

const TutorsFindBanner = () => {
  return (
    <div className="w-full bg-[#ac0ed4ad] ">
      <section className="flex flex-col md:flex-row items-center justify-between  px-20 rounded-2xl shadow-lg">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-white">
            Find the Best Tutors for Your Needs
          </h1>
          <p className="mt-4 text-lg text-white">
            Browse experienced tutors, filter by subject & rating, and book your
            session in just a few clicks!
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <Image
            src="https://i.ibb.co.com/8DKxgM71/1815078.webp"
            alt="Find Tutors"
            width={400}
            height={200}
            className="w-[300px]"
          />
        </div>
      </section>
    </div>
  );
};

export default TutorsFindBanner;
