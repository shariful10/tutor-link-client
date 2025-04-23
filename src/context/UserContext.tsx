"use client";
import { currentUser } from "@/services/AuthService";
import { IUser } from "@/types";
import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useContext,
	useEffect,
	useState,
} from "react";

interface IUserProviderValues {
	id?: string;
	email: string | null;
	user: IUser | null;
	isLoading: boolean;
	setUser: (user: IUser | null) => void;
	setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const UserContext = createContext<IUserProviderValues | undefined>(undefined);

const UserProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<IUser | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	const handleUser = async () => {
		const user = await currentUser();
		setUser(user);
		setIsLoading(false);
	};

	useEffect(() => {
		handleUser();
	}, [isLoading]);

	return (
		<UserContext.Provider
			value={{
				email: user?.email || null,
				user,
				id: user?.id || undefined,
				setUser,
				isLoading,
				setIsLoading,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export const useUser = () => {
	const context = useContext(UserContext);

	if (context == undefined) {
		throw new Error("useUser must be used within the UserProvider context");
	}

	return context;
};

export default UserProvider;
