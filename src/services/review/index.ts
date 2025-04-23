"use server";
import { FieldValues } from "react-hook-form";

export const review = async (data: FieldValues) => {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/review`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		});

		if (!res.ok) {
			throw new Error(`HTTP Error: ${res.status} - ${res.statusText}`);
		}

		const result = await res.json();
		// console.log(result,'data');
		return result;
	} catch (error) {
		console.error("Review Error:", error);
		return { success: false, message: "Review failed!" };
	}
};

export const TutorReview = async (tutorId: string) => {
	console.log(tutorId, "mainget");
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_BASE_API}api/review/${tutorId}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					tutorId,
				}),
			}
		);

		const data = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		console.error("Error sending tutor request:", error);
		throw new Error("Failed to send request");
	}
};
