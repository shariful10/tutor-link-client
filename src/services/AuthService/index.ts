"use server";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const registerUser = async (data: FieldValues) => {
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_BASE_API}/api/auth/register`,
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			}
		);

		if (!res.ok) {
			throw new Error(`HTTP Error: ${res.status} - ${res.statusText}`);
		}

		const result = await res.json();
		// console.log(result);
		return result;
	} catch (error) {
		console.error("Registration Error:", error);
		return { success: false, message: "Registration failed!" };
	}
};

export const loginUser = async (userData: FieldValues) => {
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_BASE_API}/api/auth/login`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(userData),
			}
		);
		const result = await res.json();
		console.log(result.token, "token dekhbo");

		if (result.status && result.token) {
			(await cookies()).set("accessToken", result.token, {
				httpOnly: true,
				secure: process.env.NODE_ENV === "production",
				path: "/",
				maxAge: 60 * 60 * 24 * 7, // 7 Days
			});
		}
		return result;
	} catch (error) {
		console.error(error);
	}
};

export const currentUser = async () => {
	const accessToken = (await cookies()).get("accessToken")?.value;
	// console.log(accessToken)
	let decodedData = null;
	if (accessToken) {
		decodedData = await jwtDecode(accessToken);
		return decodedData;
	} else {
		return null;
	}
};

export const logout = async () => {
	(await cookies()).delete("accessToken");
};
