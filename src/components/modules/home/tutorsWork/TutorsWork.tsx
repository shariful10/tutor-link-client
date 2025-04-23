"use client";
import Image from "next/image";

const TuitionProcess = () => {
  return (
    <div>
      <h1 className="text-center  py-10 text-4xl font-bold ">
        How does it work for tutors?
      </h1>
      <div className="flex justify-start xl:px-28 md:px-14 px-8 items-center bg-gray-50 py-10">
        <div className="relative flex flex-col items-center space-y-12">
          {/* Step 1 - Create Profile */}
          <div
            data-aos="fade-right"
            data-aos-delay="800"
            className=" flex  items-start space-x-4"
          >
            <div className="flex flex-col items-start bg-white p-5 rounded-xl shadow-lg shadow-[#ac0ed457]  border md:w-[650px] ">
              <div className="md:flex flex-row item-center gap-4 justify-between">
                <Image
                  src="https://i.ibb.co.com/Ym8Nmvv/tutor02.png"
                  alt="Create Profile"
                  width={200}
                  height={200}
                />
                <div>
                  <h3 className="text-2xl font-semibold ">
                    Complete Your Profile
                  </h3>
                  <p className="text-md ">
                    Complete your profile by including your personal,
                    educational, tuition related and supporting documentation
                    details.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="800"
            className="flex  space-x-4 relative xl:left-3/4 lg:left-3/7"
          >
            <div className="flex flex-col items-start bg-white p-5 shadow-[#ac0ed457]  rounded-xl shadow-lg border-[text-[#ac0ed4e5] border md:w-[650px]">
              <div className="md:flex flex-row items-center gap-4 justify-between">
                <Image
                  src="https://i.ibb.co.com/Ym8Nmvv/tutor02.png"
                  alt="Create Profile"
                  width={200}
                  height={200}
                />
                <div>
                  <h3 className="text-2xl font-semibold ">
                    Apply to Your Desired Tuition Job
                  </h3>
                  <p className="text-md ">
                    Check the job board everyday and apply on desirable tuition
                    jobs which match with you the most.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div
            data-aos="fade-right"
            data-aos-delay="800"
            className=" flex  items-start space-x-4"
          >
            <div className="flex flex-col items-start bg-white p-5 shadow-[#ac0ed457] rounded-xl shadow-lg border-[text-[#ac0ed4e5] border  md:w-[650px] ">
              <div className="md:flex flex-row item-center gap-4 justify-between">
                <Image
                  src="https://i.ibb.co.com/Ym8Nmvv/tutor02.png"
                  alt="Create Profile"
                  width={200}
                  height={200}
                />
                <div>
                  <h3 className="text-2xl font-semibold ">Get Selected</h3>
                  <p className="text-md ">
                    Get shortlisted from system and selected by the
                    guardian/student based on your provided information in
                    profile.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos-delay="800"
            data-aos="fade-left"
            className="flex space-x-4 relative xl:left-3/4 lg:left-3/7"
          >
            <div className="flex flex-col items-start bg-white p-5 rounded-xl shadow-lg shadow-[#ac0ed457]  border-[text-[#ac0ed4e5] border  md:w-[650px]">
              <div className="md:flex flex-row items-center gap-4 justify-between">
                <Image
                  src="https://i.ibb.co.com/Ym8Nmvv/tutor02.png"
                  alt="Create Profile"
                  width={200}
                  height={200}
                />
                <div>
                  <h3 className="text-2xl font-semibold ">Start Tutoring</h3>
                  <p className="text-md ">
                    Take the trial classes and confirm your expected tuition
                    job. Happy tutoring!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TuitionProcess;
