import TutorsFindBanner from "@/components/modules/findTutor";
import FindTutors from "@/components/modules/findTutor/tutorFilter/FindTutors";

const FindTutorpage = () => {
  return <div>
    <TutorsFindBanner/>
   <div className="w-full px-10 mx-auto container mt-10">
   <FindTutors/>
   </div>
  </div>;
};

export default FindTutorpage;
