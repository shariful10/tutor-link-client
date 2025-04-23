import { Chart } from "@/components/modules/dashboard/chart/Chart";

export default function UserDashboard() {
  return (
    <div>
      <p className=" text-center text-orange-600 text-4xl">
        Well Come to Deshboard student
      </p>
      <div className="w-[700px] mx-auto  justify-center ">
        <Chart />
      </div>
    </div>
  );
}
