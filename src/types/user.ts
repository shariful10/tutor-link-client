export interface IUser {
	name: string;
	email: string;
	role: "student" | "tutor";
	iat?: number;
	exp?: number;
	id?: string;
}
