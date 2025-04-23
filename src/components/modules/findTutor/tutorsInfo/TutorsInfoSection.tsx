"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@/context/UserContext";
import { TutorRequest } from "@/services/sendTutorRequest";
import { ITutors } from "@/types";
import React, { useState } from "react";
import { toast } from "sonner";
import Review from "./Review";

const ProfileSection = ({ tutor }: { tutor: ITutors | null }) => {
  const user = useUser();
  const [requestStatus, setRequestStatus] = useState<string | null>(null);
  if (!tutor) {
    return <p>Loading tutor data...</p>;
  }

  const handleRequest = async () => {
    if (!user?.email) {
      toast.error("Please login to send a request!");
      return;
    }

    try {
      if (user?.email) {
        setRequestStatus("pending");
        const response = await TutorRequest(tutor?._id, user.email);
        // console.log(response ,"reeee")
        if (response.status) {
          toast.success("Request sent successfully!");
          setRequestStatus("sent");
        } else {
          toast.error("All ready request!");
          setRequestStatus(null);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg">
        <div className="text-end flex justify-end items-center gap-3">
          <Button
            className="bg-orange-400"
            onClick={handleRequest}
            disabled={requestStatus === "pending"}
          >
            {requestStatus === "pending"
              ? "Request Pending..."
              : "Send Request"}
          </Button>
          <Button className="bg-orange-400" asChild>
            <a href={`tel:${tutor?.phone}`}>Call</a>
          </Button>
          <div>
            <Review tutorId={tutor?._id} />
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold">About</h2>

          <p>
            I am going on a trip with my best friend this time, Célia. She is a
            Parisian recently and I am in Bordeaux in the south west of France.
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold">Overview</h2>
          <div className="mt-2">
            <p></p>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-lg mb-2 font-semibold">
            Expected Minimum Salary : <span>{tutor?.salary}</span> Tk/Month
          </h2>
          <h2 className="text-lg mb-2 font-semibold">
            Current Status for Tuition : {tutor.tuition}
          </h2>
          <h2 className="text-lg mb-2 font-semibold">
            Days Per Week : 4 Day/Week, 5 Day/Week
          </h2>
          <h2 className="text-lg mb-2 font-semibold">
            Tuitoring Experience : {tutor.experience}{" "}
          </h2>
          <h2 className="text-lg mb-2 font-semibold">
            Extra Facilities : {tutor.phone}
          </h2>
          <h2 className="text-lg mb-2 font-semibold">
            Preferred Medium of Instruction : {tutor.subject}
          </h2>
          <h2 className="text-lg mb-2 font-semibold">
            Rating : {tutor.rating}
          </h2>
        </div>
      </div>
    </>
  );
};

export default ProfileSection;
