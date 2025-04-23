"use client";

import { useState } from "react";
import { LogOut, Menu, X } from "lucide-react";
import Link from "next/link";
import { useUser } from "@/context/UserContext";
import { usePathname, useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { logout } from "@/services/AuthService";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { protectedRoutes } from "@/contants";

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

  const dashboardUrl =
    user?.role === "student"
      ? "/student/dashboard"
      : user?.role === "tutor"
      ? "/tutors/dashboard"
      : "/dashboard";

  return (
    <div className=" bg-background w-full sticky top-0 z-10">
      <div className="bg-gradient-to-bl  shadow-md w-full">
        <div className="container py-5 mx-auto md:px-10 px-6 flex justify-between items-center ">
          <Link href="/">
            <h1 className="text-2xl text-[#ac0ed4e5] font-extrabold font-serif">
              TutorsyncX
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
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <Link href={dashboardUrl}>
                    <DropdownMenuItem>Dashboard</DropdownMenuItem>
                  </Link>
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
