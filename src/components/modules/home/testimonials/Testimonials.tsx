"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

// Testimonials Data
const testimonials = [
  {
    id: 1,
    name: "Hridoy Chandra Roy",
    title: "North South University\nTutor",
    image: "https://i.ibb.co/XGZX7sM/image-1.png",
    quote:
      "আপনার প্ল্যাটফর্মকে সাধুবাদ জানাই কারণ এই প্ল্যাটফর্মের মাধ্যমে আমি খুব কম সময়ে এবং সহজে ভালো একজন টিউটর পেয়েছি। আপনাদের টিউটর যাচাই প্রক্রিয়াটি বেশ স্বচ্ছ ও গঠনমূলক।",
  },
  {
    id: 2,
    name: "Krishna Bokshi",
    title: "Assistant Professor\nParent",
    image: "https://i.ibb.co.com/CQhr0qv/download-3.jpg",
    quote:
      "Tuition Terminal is one of the most faithful tuition job platforms. They are very active in solving tuition-related issues. Thanks to Tuition Terminal for their cooperation.",
  },
  {
    id: 3,
    name: "Debasish Bokshi",
    title: "Assistant Professor\nParent",
    image: "https://i.ibb.co.com/dp6HKKK/images-14.jpg",
    quote:
      "Tuition Terminal helped me find tuition opportunities quickly. Their verification process is very structured and effective.",
  },
];

// Slider Settings
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  pauseOnHover: true,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

export default function Testimonials() {
  return (
    <section className="py-16 px-8 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
      What People <span className="text-[#ac0ed4e5]">Say</span> About
        Us
      </h2>

      <div className="mt-10 ">
        <Slider {...settings} className="px-2">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-2 h-[370px] relative">
              <div className="bg-white shadow-lg border border-gray-200 p-6 rounded-xl h-full flex flex-col justify-between items-center text-center transition-all hover:shadow-2xl">
                <div className="text-[#ac0ed4e5] absolute left-6 text-6xl">
                  “
                </div>

                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={90}
                  height={90}
                  className="rounded-full w-24 h-24 object-cover border-2 border-gray-300"
                />

                <h3 className="mt-4 text-lg font-semibold text-[#ac0ed4be]">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-600 whitespace-pre-line leading-tight">
                  {testimonial.title}
                </p>

                <p className="mt-4 text-gray-700 text-xl md:text-base leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
