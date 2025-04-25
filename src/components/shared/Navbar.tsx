"use client";

import { useUser } from "@/context/UserContext";
import { LogOut, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import { protectedRoutes } from "@/contants";
import { logout } from "@/services/AuthService";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { user, setIsLoading } = useUser();

	const pathname = usePathname();
	const router = useRouter();

	const handleLogout = () => {
		logout();
		setIsLoading(true);
		if (protectedRoutes.some((route) => pathname.match(route))) {
			router.push("/");
		}
	};

	type TPath = {
		id: number;
		title: string;
		url: string;
	};

	const studentPaths: TPath[] = [
		{
			id: 1,
			title: "Profile",
			url: "/student/profile",
		},
		{
			id: 2,
			title: "Dashboard",
			url: "/student/dashboard",
		},
	];

	const tutorPaths: TPath[] = [
		{
			id: 1,
			title: "Profile",
			url: "/tutors/profile",
		},
		{
			id: 2,
			title: "Dashboard",
			url: "/tutors/dashboard",
		},
	];

	let dashboardUrl: TPath[];

	switch (user?.role) {
		case "student":
			dashboardUrl = studentPaths;
			break;
		case "tutor":
			dashboardUrl = tutorPaths;
			break;
		default:
			dashboardUrl = [];
			break;
	}

	return (
		<div className=" bg-background w-full sticky top-0 z-10">
			<div className="bg-gradient-to-bl  shadow-md w-full">
				<div className="container py-5 mx-auto md:px-10 px-6 flex justify-between items-center ">
					<Link href="/">
						<h1 className="text-2xl text-[#ac0ed4e5] font-extrabold font-serif">
							TutorLink
						</h1>
					</Link>

					{/* Desktop Menu */}
					<div
						className="hidden m
        lg:flex items-center space-x-6 text-black font-semibold"
					>
						<Link href="/" className="hover:text-[#ac0ed4e5]">
							HOME
						</Link>
						<Link href="/findTutors" className="hover:text-[#ac0ed4e5]">
							FIND TUTORS
						</Link>
						<Link href="/about" className="hover:text-[#ac0ed4e5]">
							ABOUT
						</Link>
						<Link href="/blog" className="hover:text-[#ac0ed4e5]">
							BLOG
						</Link>
						<Link href="/faq" className="hover:text-[#ac0ed4e5]">
							FAQ
						</Link>

						{user ? (
							<DropdownMenu>
								<DropdownMenuTrigger>
									<Avatar>
										<AvatarImage src="https://github.com/shadcn.png" />
										<AvatarFallback>CN</AvatarFallback>
									</Avatar>
								</DropdownMenuTrigger>
								<DropdownMenuContent>
									<DropdownMenuLabel>My Account</DropdownMenuLabel>
									<DropdownMenuSeparator />
									{dashboardUrl?.map((item) => (
										<Link key={item.id} href={item.url}>
											<DropdownMenuItem>{item.title}</DropdownMenuItem>
										</Link>
									))}

									<DropdownMenuSeparator />
									<DropdownMenuItem
										className="text-red-600"
										onClick={handleLogout}
									>
										<LogOut />
										<span>Log Out</span>
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						) : (
							<Link href="/login">
								<Button
									variant="outline"
									className=" text-[#ac0ed4e5] py-1 font-bold px-5 "
								>
									Please Login
								</Button>
							</Link>
						)}
					</div>

					{/* Mobile Menu Icon */}
					<div className="lg:hidden">
						<button onClick={() => setIsOpen(!isOpen)}>
							{isOpen ? <X size={30} /> : <Menu size={30} />}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isOpen && (
					<div className="lg:hidden bg-white shadow-md p-4 space-y-4 text-center text-black">
						<Link href="#" className="block hover:text-[#ac0ed4e5]">
							TUITION JOBS
						</Link>
						<Link href="#" className="block hover:text-[#ac0ed4e5]">
							PREMIUM TUTORS
						</Link>
						<Link href="/blog" className="block hover:text-[#ac0ed4e5]">
							Blog
						</Link>
						<Link href="/faq" className="block hover:text-[#ac0ed4e5]">
							FAQ
						</Link>
						<Link href="/login">
							<Button
								variant="outline"
								className=" text-[#ac0ed4e5] py-1 font-bold px-5 "
							>
								Please Login
							</Button>
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
