/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { useUser } from "@/context/UserContext";
import { toast } from "sonner";
import { getStudentRequsts } from "@/services/requestStudent";
import { getStudentRequst } from "@/services/user";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ITutors } from "@/types";

const StudentRequest = () => {
  const user = useUser();
  const [requests, setRequests] = useState<ITutors | null>(null);
  console.log(requests)
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const userEmail = user?.email;
    if (!userEmail) {
      setError("");
      return;
    }

    const fetchRequests = async () => {
      try {
        setLoading(true);

        const studentData = await getStudentRequsts(userEmail);
        // console.log("Student Data Response:", studentData);

        if (
          !studentData.status ||
          !studentData.data ||
          studentData.data.length === 0
        ) {
          setError("No requests found.");
          setLoading(false);
          return;
        }

        const tutorId = studentData.data[0]?.tutorId;
        console.log("Extracted Tutor ID:", tutorId);

        if (!tutorId) {
          setError("Tutor ID not found.");
          setLoading(false);
          return;
        }
        const tutorRequests = await getStudentRequst(tutorId);
        // console.log("Tutor Request Responssssssse:", tutorRequests);
        setRequests(tutorRequests);
      } catch (error: any) {
        toast.error("Failed to fetch requests.");
        console.error("Fetch Error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, [user?.email]);

  // Function to handle payment
  const handlePayment = async (request: ITutors) => {
    try {
      // Prepare the payment data
      const paymentData = {
        userEmail: user?.email,
        tutorData: {
          tutorId: request._id,
          name: request.name,
          salary: request.salary,
          subject: request.subject,
        },
      };

      // Send the payment data to the backend
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}api/payment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(paymentData),
        }
      );

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        const paymentUrl = data.url;

        if (paymentUrl) {
          window.location.href = paymentUrl;
        } else {
          toast.error("Payment page URL not returned.");
        }
      } else {
        toast.error(`Error: ${data.message || "Something went wrong"}`);
      }
    } catch (error) {
      toast.error("Failed to process payment.");
      console.error("Payment Error:", error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl text-center text-orange-400 mb-10">
        My Requests
      </h1>

      {loading && <p className="text-center text-blue-500">Loading...</p>}

      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Table */}
      <div className="px-10 overflow-x-auto">
        <Table className="min-w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Salary</TableHead>
              <TableHead className="w-[70px]">Id</TableHead>
              <TableHead className="text-right w-[80px]">Email</TableHead>
              <TableHead className="text-right">Class</TableHead>
              <TableHead className="text-right">Subject</TableHead>
              <TableHead className="text-right w-[10px]">Payment</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">
                {requests?.name ?? "N/A"}
              </TableCell>
              <TableCell>{requests?.salary ?? "N/A"}</TableCell>
              <TableCell>{requests?._id ?? "N/A"}</TableCell>
              <TableCell className="text-right">
                {requests?.email ?? "N/A"}
              </TableCell>
              <TableCell className="text-right">
                {requests?.class ?? "N/A"}
              </TableCell>
              <TableCell className="text-right">
                {requests?.subject ?? "N/A"}
              </TableCell>
              <TableCell className="text-right">
                {requests ? (
                  <Button onClick={() => handlePayment(requests)}>
                    Payment
                  </Button>
                ) : (
                  <span className="text-gray-500">N/A</span>
                )}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default StudentRequest;
