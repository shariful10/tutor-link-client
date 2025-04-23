"use client";
import SeccessCard from "@/components/modules/payment/Seccess";
import { useParams } from "next/navigation";

const PaymentSuccess = () => {
  const { tranId } = useParams();
  return (
    <div className="w-full mx-auto container">
      {tranId ? (
        <SeccessCard tranId={tranId} />
      ) : (
        <p className="text-center text-red-500">Transaction ID not found!</p>
      )}
    </div>
  );
};

export default PaymentSuccess;
