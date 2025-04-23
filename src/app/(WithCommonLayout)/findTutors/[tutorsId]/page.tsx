import ShowReview from "@/components/modules/findTutor/tutorsInfo/ShowReview";
import ProfileSection from "@/components/modules/findTutor/tutorsInfo/TutorsInfoSection";
import TutorsProfile from "@/components/modules/findTutor/tutorsProfile/TutorsProfile";
import { getStudentRequst } from "@/services/user";

const Detailspage = async ({
  params,
}: {
  params: Promise<{ tutorsId: string }>;
}) => {
  const { tutorsId } = await params;

  const tutor = await getStudentRequst(tutorsId);
  // console.log(tutor, "iddddd");

  return (
    <div className="container  bg-amber-50 w-full mx-auto">
      <div className="flex py-10 justify-start items-start">
        <TutorsProfile
          name={tutor?.name}
          photo={tutor?.photo}
          location={tutor?.location}
          email={tutor?.email}
        />
        <ProfileSection tutor={tutor} />
      </div>
      <div className="container mx-auto p-4">
      <ShowReview tutorId={tutor._id} />
    </div>
    </div>
  );
};

export default Detailspage;
