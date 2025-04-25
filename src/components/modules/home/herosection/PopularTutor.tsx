"use client";
import { Button } from "@/components/ui/button";
import { getAllUser } from "@/services/user";
import { ITutors } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const PopularTutor = () => {
	const [tutorsData, setTutorsData] = useState<ITutors[]>([]);
	const [loading, setLoading] = useState<boolean>(true); // Loading state
	console.log(tutorsData);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getAllUser();
				if (response.status) {
					setTutorsData(response.result);
				} else {
					console.error("Failed to fetch users:", response.message);
				}
			} catch (error) {
				console.error("Error fetching data:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	if (loading) {
		return (
			<div className="text-center mt-16">
				<p>Loading Tutors...</p>
			</div>
		);
	}

	return (
		<div className="mt-16 container mx-auto w-full px-4">
			<h1 className="text-center lg:text-4xl text-2xl font-medium">
				Our Popular<span className="text-[#ac0ed4e5]"> Tutors</span>
			</h1>
			<p className="text-center lg:text-xl text-xl text-gray-800 mt-3 mb-2">
				Here are a few of the Verified Teachers
			</p>
			<div className="flex justify-end mb-7">
				<Link href="/findTutors">
					{" "}
					<Button className="px-4 py-1 bg-[#ac0ed4e5] text-sm">
						View More
					</Button>
				</Link>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3">
				{tutorsData?.map((tutor) => (
					<div
						key={tutor._id}
						className="lg:w-[300px] sm:w-[300px] h-[435px] w-[350px] mx-auto rounded-lg overflow-hidden shadow-lg bg-[#ffffffb6] mb-4"
					>
						<div className="w-full p-2 h-48 relative">
							<Image
								src={
									tutor?.photo?.trim() ||
									"https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-622.jpg?semt=ais_hybrid"
								}
								alt="img"
								width={500}
								height={500}
								style={{ objectFit: "cover" }}
								unoptimized
							/>
						</div>
						<div className="px-4 py-4">
							<div className="font-bold text-lg mb-2">{tutor?.name}</div>
							<p className="text-gray-700 text-base">
								{tutor?.bio?.slice(0, 60)}
							</p>
							<div className="w-full border border-gray-700 mt-2"></div>
						</div>
						<div className="px-6 flex justify-between pt-2 pb-2">
							<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
								{tutor?.location}
							</span>
							<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
								271 Views
							</span>
						</div>
						<div className="px-6 mt-3 mb-2 w-full pb-4">
							<Link href={`/findTutors/${tutor?._id}`}>
								<button className="bg-[#ac0ed4cb] w-full text-white font-bold py-2 px-4 rounded">
									View Details
								</button>
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default PopularTutor;
