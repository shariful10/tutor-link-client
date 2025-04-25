"use client";
import { useUser } from "@/context/UserContext";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export interface IRequest {
	_id: string;
	tutorId: string;
	userEmail: string;
	__v: number;
	status: string;
}

const StudentRequestForm = () => {
	const user = useUser();
	const tutorId = user?.id;
	const [requests, setRequests] = useState<IRequest[]>([]);
	console.log(requests);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (!user) {
			toast.error("You need to log in to view the requests.");
			return;
		}

		if (!tutorId) {
			setError("Tutor ID not available.");
			setLoading(false);
			return;
		}

		const fetchRequests = async () => {
			try {
				setLoading(true);
				setError(null);
				const response = await fetch(
					`${process.env.NEXT_PUBLIC_BASE_API}/api/requests/get-requests/${tutorId}`
				);
				const data = await response.json();
				if (data.status) {
					setRequests(data.data);
				} else {
					setError(data.message);
				}
			} catch (error) {
				console.error(error);
				setError("Failed to fetch requests.");
			} finally {
				setLoading(false);
			}
		};

		fetchRequests();
	}, [tutorId, user]);

	const deleteData = async (id: string) => {
		try {
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_BASE_API}api/requests/request-delete/${id}`,
				{
					method: "DELETE",
				}
			);

			const result = await response.json();
			if (result.status) {
				toast.success("Request deleted successfully.");
				setRequests((prevRequests) =>
					prevRequests.filter((request) => request._id !== id)
				);
			} else {
				toast.error(result.message || "Failed to delete request.");
			}
		} catch (error) {
			console.error("Error deleting request:", error);
			toast.error("An error occurred while deleting.");
		}
	};

	return (
		<div className="max-w-4xl mx-auto p-4 bg-white rounded-lg">
			<h1 className="text-2xl font-bold text-center">Request Form</h1>

			{/* Loading State */}
			{loading && <p className="text-center text-blue-500">Loading...</p>}

			{/* Request List */}
			{!loading && !error && (
				<>
					{requests.length > 0 ? (
						<div className="space-y-4 mt-4">
							{requests.map((request) => (
								<div
									key={request._id}
									className="p-4 border rounded-lg shadow-md bg-gray-50 flex items-center justify-between"
								>
									<div>
										<h3 className="text-lg font-semibold">
											{request.userEmail}
										</h3>
										<p className="text-gray-600">Request message</p>
									</div>
									<div className="flex gap-5 items-center">
										<button
											onClick={() => deleteData(request._id)}
											className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
										>
											Delete
										</button>

										<button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
											{request?.status}
										</button>
									</div>
								</div>
							))}
						</div>
					) : (
						<p className="text-center text-gray-500 mt-4">No requests found.</p>
					)}
				</>
			)}
		</div>
	);
};

export default StudentRequestForm;
