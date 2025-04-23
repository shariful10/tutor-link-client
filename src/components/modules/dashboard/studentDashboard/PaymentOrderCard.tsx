/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useUser } from "@/context/UserContext";
import { getPaymentRequsts } from "@/services/payment";
import { IPayment } from "@/types";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const PaymentOrderCard = () => {
  const user = useUser();
  const [payments, setPayments] = useState<IPayment[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const userEmail = user?.email;
    if (!userEmail) {
      setError("User email not found.");
      return;
    }

    const fetchRequests = async () => {
      try {
        setLoading(true);
        setError(null); // Reset error state before fetching

        const studentData = await getPaymentRequsts(userEmail);

        if (!studentData || !studentData.data || studentData.data.length === 0) {
          setError("No payment records found.");
          setPayments([]);
        } else {
          setPayments(studentData.data);
        }
      } catch (error: any) {
        toast.error("Failed to fetch payment requests.");
        setError(error.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, [user?.email]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center md:mb-10">
        My Orders
      </h2>

      {/* Loading State */}
      {loading && <p className="text-center text-blue-500">Loading...</p>}

      {/* Error Message */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Display Table Only If There Are Payments */}
      {!loading && !error && payments.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">#</th>
                <th className="border p-2">Transaction ID</th>
                <th className="border p-2">User Email</th>
                <th className="border p-2">Total Amount</th>
                <th className="border p-2">Paid Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={payment._id} className="text-center hover:bg-gray-100">
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{payment.transaction}</td>
                  <td className="border p-2">{payment.userEmail}</td>
                  <td className="border p-2">${payment.totalAmount}</td>
                  <td
                    className={`border p-2 font-bold ${
                      payment.paidStatus ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {payment.paidStatus ? "Paid ✅" : "Not Paid ❌"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        !loading && !error && <p className="text-center text-gray-500">No payment records available.</p>
      )}
    </div>
  );
};

export default PaymentOrderCard;
