"user client"
import { MapPin } from "lucide-react";
import Image from "next/image";
import Modal from "./Modal";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Herosection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div className="container mx-auto px-5 md:px-12 lg:mt-2 md:mt-10  border-b shadow">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center text-center md:text-left gap-10">
       {/* left */}
        <div data-aos="fade-right" className="max-w-2xl mx-auto md:mx-0 space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-[#ac0ed4d5]">Best</span> Tutoring Platform
            <br />
            <span>for Home & Online Tuitions</span>
          </h1>

          <p className="flex gap-2 items-center text-gray-600 text-lg md:text-xl">
            <MapPin className="text-[#ac0ed4d5]" />
            Find the Right Tutor in Your Area
          </p>
          <div className="md:mb-4 lg:mb-1">
            <Modal />
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="flex justify-center">
          <Image
            src="https://i.ibb.co/d4fNR8Qx/lesson-concept-illustration-114360-7937-1-removebg-preview.png"
            alt="Tutoring"
            width={450}
            height={500}
            className="max-w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
