"use client";
import TutorsCard from "@/components/ui/cors/TutorsCard";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { getAllUser } from "@/services/user";
import { ITutors } from "@/types";

const FindTutors = () => {
	const [tutorsData, setTutorsData] = useState<ITutors[]>([]);
	const [filteredTutors, setFilteredTutors] = useState<ITutors[]>([]);
	const [filters, setFilters] = useState({
		subject: "",
		rating: "",
		price: "",
		location: "",
	});
	console.log(filters);
	// Pagination state
	const [currentPage, setCurrentPage] = useState(1);
	const [tutorsPerPage] = useState(6);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getAllUser();
				if (response.status) {
					setTutorsData(response.result);
					setFilteredTutors(response.result);
				} else {
					console.error("Failed to fetch users:", response.message);
				}
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	if (!tutorsData) {
		return <p>loading ...</p>;
	}

	const applyFilter = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
		const fSubject = form.subject.value;
		const fRating = form.rating.value;
		const fPrice = form.price.value;
		const fLocation = form.location.value;

		setFilters({
			subject: fSubject,
			rating: fRating,
			price: fPrice,
			location: fLocation,
		});

		let filtered = tutorsData.filter((tutor) => {
			let subjectMatch = true;
			let ratingMatch = true;
			let locationMatch = true;

			if (fSubject && fSubject !== "All") {
				subjectMatch = tutor.subject
					?.toLowerCase()
					.replace(/\s+/g, "")
					.includes(fSubject.toLowerCase().replace(/\s+/g, ""));
			}

			if (fRating) {
				if (fRating === "5") {
					ratingMatch = tutor.rating === 5;
				} else if (fRating === "4") {
					ratingMatch = tutor.rating >= 4;
				} else if (fRating === "3") {
					ratingMatch = tutor.rating >= 3;
				}
			}

			if (fLocation) {
				locationMatch = tutor.location
					.toLowerCase()
					.includes(fLocation.toLowerCase());
			}

			return subjectMatch && ratingMatch && locationMatch;
		});

		if (fPrice) {
			filtered = [...filtered];
			if (fPrice === "hightolow") {
				filtered.sort(
					(a, b) =>
						parseInt(b.salary.replace(" BDT", "")) -
						parseInt(a.salary.replace(" BDT", ""))
				);
			} else if (fPrice === "lowtohigh") {
				filtered.sort(
					(a, b) =>
						parseInt(a.salary.replace(" BDT", "")) -
						parseInt(b.salary.replace(" BDT", ""))
				);
			}
		}

		setFilteredTutors(filtered);
		setCurrentPage(1); // Reset to the first page after applying filters
	};

	// Get current tutors per page
	const indexOfLastTutor = currentPage * tutorsPerPage;
	const indexOfFirstTutor = indexOfLastTutor - tutorsPerPage;
	const currentTutors = filteredTutors?.slice(
		indexOfFirstTutor,
		indexOfLastTutor
	);

	// Handle page navigation
	const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

	// Calculate total pages
	const totalPages = Math.ceil(filteredTutors.length / tutorsPerPage);

	return (
		<>
			{" "}
			<div className="flex md:flex-row flex-col justify-between py-10 items-start">
				<div className="mb-16 border md:w-[300px] w-full mx-auto">
					<form
						className="p-4 bg-white flex flex-col gap-5 shadow-md rounded-lg"
						onSubmit={applyFilter}
					>
						<Select name="subject">
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Select Subject" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="All">All</SelectItem>
								<SelectItem value="Mathematics">Mathematics</SelectItem>
								<SelectItem value="Physics">Physics</SelectItem>
								<SelectItem value="English">English</SelectItem>
								<SelectItem value="Biology">Biology</SelectItem>
								<SelectItem value="Chemistry">Chemistry</SelectItem>
								<SelectItem value="Higher Math">Higher Math</SelectItem>
								<SelectItem value="Bangla">Bangla</SelectItem>
								<SelectItem value="General Science">General Science</SelectItem>
								<SelectItem value="Accounting">Accounting</SelectItem>
								<SelectItem value="Economics">Economics</SelectItem>
							</SelectContent>
						</Select>

						<Select name="rating">
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Rating" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="5">5 Stars</SelectItem>
								<SelectItem value="4">4+ Stars</SelectItem>
								<SelectItem value="3">3+ Stars</SelectItem>
							</SelectContent>
						</Select>

						<Select name="price">
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Price" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="hightolow">High To Low</SelectItem>
								<SelectItem value="lowtohigh">Low To High</SelectItem>
							</SelectContent>
						</Select>

						<Input
							type="text"
							placeholder="Location"
							className="w-full"
							name="location"
						/>

						<div className="relative flex items-center justify-center">
							<motion.div
								animate={{
									scale: [1, 1.5, 1],
									opacity: [0.6, 0, 0.6],
								}}
								transition={{
									duration: 1.5,
									repeat: Infinity,
								}}
								className="absolute w-32 h-32 border-4 border-teal-400 rounded-full opacity-50"
							/>

							{/* Main Button */}
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="relative px-6 py-3 text-white bg-gradient-to-r from-purple-500 to-indigo-700 rounded-full shadow-lg"
							>
								Apply Filter →
							</motion.button>
						</div>
					</form>
				</div>

				<div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-7 justify-center">
					{currentTutors.length > 0 ? (
						currentTutors?.map((tutor) => (
							<TutorsCard key={tutor._id} tutor={tutor} />
						))
					) : (
						<p>No tutors found with the applied filters</p>
					)}
				</div>
			</div>
			{/* Pagination */}
			<div className="flex justify-center mt-6 space-x-2">
				<button
					onClick={() => paginate(currentPage - 1)}
					disabled={currentPage === 1}
					className="px-3 py-2 border rounded disabled:opacity-50"
				>
					&lt;
				</button>
				{[...Array(totalPages)].map((_, index) => (
					<button
						key={index + 1}
						onClick={() => paginate(index + 1)}
						className={`px-3 py-2 border rounded ${
							currentPage === index + 1 ? "bg-orange-500 text-white" : ""
						}`}
					>
						{index + 1}
					</button>
				))}
				<button
					onClick={() => paginate(currentPage + 1)}
					disabled={currentPage === totalPages}
					className="px-3 py-2 border rounded disabled:opacity-50"
				>
					&gt;
				</button>
			</div>
		</>
	);
};

export default FindTutors;
