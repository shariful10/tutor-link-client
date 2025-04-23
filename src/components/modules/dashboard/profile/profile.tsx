"use client";
import { useUser } from "@/context/UserContext";
import Image from "next/image";

const Profiles = () => {
	const user = useUser();

	return (
		<div className="flex justify-center items-center h-fit w-full">
			{/* Navbar */}
			<div className="flex items-center justify-center p-6 flex-1">
				<div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl flex flex-col md:flex-row gap-6">
					{/* Profile Card */}
					<div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center w-full md:w-1/3 text-center">
						<Image
							src="https://mgcfeni.edu.bd/midea/featuredimage/featuredimage2019-03-04-13-47-19_5c7d1e5732a77.jpg"
							width={400}
							height={400}
							alt="logo"
							className="w-32 h-32 rounded-full border-4 border-white shadow-md"
						/>
						<h2 className="mt-4 text-xl font-semibold">{user?.user?.name}</h2>
						<p className="text-gray-500 text-sm">
							Email:
							<span className="ml-1">{user?.user?.email}</span>
						</p>
					</div>
					{/* Profile Details */}
					<div className="flex-1 p-6 bg-white rounded-lg">
						<h2 className="text-xl font-semibold border-b pb-2">
							Profile Details
						</h2>
						<div className="mt-4 space-y-4">
							<div>
								<p className="text-gray-500 text-sm">Full Name</p>
								<p className="font-medium">{user?.user?.name}</p>
							</div>
							<div>
								<p className="text-gray-500 text-sm">Email</p>
								<p className="font-medium text-blue-600">{user?.user?.email}</p>
							</div>
							<div>
								<p className="text-gray-500 text-sm">Password</p>
								<p className="font-medium">********</p>
							</div>
							<div>
								<p className="text-gray-500 text-sm">User Role</p>
								<p className="font-medium capitalize">{user?.user?.role}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profiles;
