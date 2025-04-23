import { getSingleUser } from "@/services/user";
import Image from "next/image";

const ProfileCard = async ({ userId }: { userId: string }) => {
	const myProfile = await getSingleUser(userId);
	console.log(myProfile);

	return (
		<div className="bg-gray-200 flex flex-col">
			{/* Navbar */}
			<div className="flex items-center justify-center p-6 flex-1">
				<div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl flex flex-col md:flex-row gap-6">
					{/* Profile Card */}
					<div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center w-full md:w-1/3 text-center">
						<Image
							src="https://i.ibb.co.com/KpMYqbB6/61k-MAf-Irw-L-AC-UF1000-1000-QL80.jpg"
							width={400}
							height={400}
							alt="logo"
							className="w-32 h-32 rounded-full border-4 border-white shadow-md"
						/>
						<h2 className="mt-4 text-xl font-semibold">Hanna Gover</h2>
						<p className="text-gray-500 text-sm">Accounts Manager, Amix Corp</p>
						<div className="mt-4 flex gap-6 text-gray-600">
							<div className="flex items-center gap-1">
								<span className="text-lg">👥</span> 254
							</div>
							<div className="flex items-center gap-1">
								<span className="text-lg">📧</span> 54
							</div>
						</div>
						<button className=" mt-10 text-teal-500 btn btn-outline">
							{" "}
							LogOut
						</button>
					</div>
					{/* Profile Details */}
					<div className="flex-1 p-6 bg-white rounded-lg">
						<h2 className="text-xl font-semibold border-b pb-2">
							Profile Details
						</h2>
						<div className="mt-4 space-y-4">
							<div>
								<p className="text-gray-500 text-sm">Full Name</p>
								<p className="font-medium">..</p>
							</div>
							<div>
								<p className="text-gray-500 text-sm">Email</p>
								<p className="font-medium text-blue-600">
									{" "}
									{/* {user?.user?.email}{" "} */}
								</p>
							</div>
							<div>
								<p className="text-gray-500 text-sm">Password</p>
								<p className="font-medium">********</p>
							</div>
							<div>
								<p className="text-gray-500 text-sm">Phone No</p>
								<p className="font-medium">..</p>
							</div>
							<div>
								<p className="text-gray-500 text-sm">Message</p>
								<p className="font-medium"> .. </p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;
