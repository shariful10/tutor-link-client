import Image from "next/image";

const Trusted = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-16 flex flex-col lg:flex-row-reverse items-center justify-between gap-5">
        {/* Left Side Content */}
        <div data-aos="fade-left"  data-aos-duration="50000"  className="w-full max-w-lg text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            Trusted by Parents & Teachers
          </h1>
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            MyTutor is the UK’s most trusted tutoring platform by parents. We
            are rated{" "}
            <span className="font-semibold text-gray-900">4.96/5</span> by
            students and parents from the
            <span className="font-semibold text-gray-900">
              {" "}
              3.8 million+{" "}
            </span>{" "}
            lessons we’ve delivered so far.
          </p>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            And because our tutors get such good results, schools use them to
            support their teaching. We work with
            <span className="font-semibold text-gray-900">
              {" "}
              1,500+ schools{" "}
            </span>
            across the UK, helping teens achieve their goals.
          </p>
        </div>

        {/* Right Side Image */}
        <div data-aos="fade-right"  data-aos-duration="4000" className="w-full  max-w-md">
          <Image
            src="https://i.ibb.co.com/Rkd0qpQt/Apply-Availability.png"
            width={500}
            height={400}
            alt="Affiliate Partner"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Trusted;
