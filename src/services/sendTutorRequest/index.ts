export const TutorRequest = async (tutorId: string, userEmail: string) => {
	console.log(tutorId, userEmail, "get data");
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_BASE_API}/api/requests/create`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					tutorId,
					userEmail,
				}),
			}
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error sending request:", error);
		throw error;
	}
};
