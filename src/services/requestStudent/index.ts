/* eslint-disable @typescript-eslint/no-explicit-any */

export const getStudentRequsts = async (email: string) => {
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_BASE_API}/api/requests/get/${email}`,
			{
				next: {
					tags: ["PRODUCT"],
				},
			}
		);
		const data = await res.json();
		return data; // Return the response data
	} catch (error: any) {
		return { status: false, message: error.message }; // Return error message if failed
	}
};
