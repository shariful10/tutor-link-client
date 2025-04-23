import { subjects } from "@/contants/subjcetName";

const FindSubjcet = () => {
  return (
    <div className="px-24 mt-24 mb-10 container mx-auto w-full">
      <div>
        <h1 className="text-center lg:text-4xl text-2xl font-medium text-gray-700">
          Find Your Subject Specialist
        </h1>
        <p className="text-center lg:text-2xl text-xl text-gray-700 mt-3 mb-10">
          Find Our Specialist to reach your dream goal
        </p>
      </div>
      {/* card */}
      <div className="relative w-full py-4 overflow-hidden">
        <div className="flex space-x-6 animate-scroll">
          {subjects.concat(subjects).map((subject, index) => (
            <div
              key={index}
              className="border-2  border-gray-300 w-[240px] text-center p-4 text-2xl text-gray-700 font-medium "
            >
              {subject}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindSubjcet;
