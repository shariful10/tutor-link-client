import Image from "next/image";

const AppSchener = () => {
  return (
    <section className="bg-gray-50 py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row md:flex-col items-center justify-between ">
        {/* Left Section (Text and QR code) */}
        <div
          data-aos="fade-down-right"
          data-aos-delay="500"
          data-aos-duration="2000"
          className="bg-white p-8 rounded-lg flex-1"
        >
          <h2 className="text-3xl font-bold mb-8 text-green-600">
            Download App
          </h2>
          <div className="flex items-center mt-4 gap-4">
            <Image
              src="https://i.ibb.co.com/W4MxKNS2/istockphoto-1385983273-612x612.jpg"
              alt="QR Code"
              width={120}
              height={100}
              className="max-w-full h-auto"
            />
            <p className="text-gray-600 text-lg">
              Now, finding a tutor & tuition job is not hard, it will <br />
              catch up like your pet bird. If you wanna grab one, just download
              & open our app.
            </p>
          </div>
          <div className="mt-10 flex gap-4 flex-wrap justify-center">
            <a href="https://play.google.com/store" target="_blank">
              <Image
                src="https://i.ibb.co.com/G42WLQhb/download-4.jpg"
                alt="Google Play"
                width={180}
                height={60}
                className="max-w-full h-auto"
              />
            </a>
            <a href="/" target="_blank">
              <Image
                src="https://i.ibb.co.com/Kj2brQTB/download-3.jpg"
                alt="App Store"
                width={180}
                height={60}
                className="max-w-full h-auto"
              />
            </a>
          </div>
        </div>

        {/* Right Section (Mobile App Preview Image) */}
        <div
          data-aos="fade-up-left"
          data-aos-delay="500"
          data-aos-duration="2000"
          className="mt-8 md:mt-0"
        >
          <Image
            src="https://i.ibb.co.com/0p80vZ9P/screen-2-removebg-preview.png"
            alt="Mobile App Preview"
            width={500}
            height={500}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AppSchener;
