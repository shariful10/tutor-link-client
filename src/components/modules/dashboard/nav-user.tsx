"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "@/components/ui/sidebar";
import { protectedRoutes } from "@/contants";
import { useUser } from "@/context/UserContext";
import { logout } from "@/services/AuthService";
import { ChevronsUpDown, LogOut } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export function NavUser() {
	const { isMobile } = useSidebar();
	const { user, setIsLoading } = useUser();

	const router = useRouter();
	const pathname = usePathname();

	const handleLogout = () => {
		logout();
		setIsLoading(true);

		if (protectedRoutes.some((route) => pathname.match(route))) {
			router.push("/");
		}
	};

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton
							size="lg"
							className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
						>
							<Avatar className="h-8 w-8 rounded-lg">
								<AvatarImage
									src="https://mgcfeni.edu.bd/midea/featuredimage/featuredimage2019-03-04-13-47-19_5c7d1e5732a77.jpg"
									alt="@shadcn"
								/>
								<AvatarFallback className="rounded-lg">
									{user?.name}
								</AvatarFallback>
							</Avatar>
							<div className="grid flex-1 text-left text-sm leading-tight">
								<span className="truncate text-xs">{user?.name}</span>
								<span className="truncate text-xs">{user?.email}</span>
							</div>
							<ChevronsUpDown className="ml-auto size-4" />
						</SidebarMenuButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
						side={isMobile ? "bottom" : "right"}
						align="end"
						sideOffset={4}
					>
						<DropdownMenuLabel className="p-0 font-normal">
							<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
								<Avatar className="h-8 w-8 rounded-lg">
									<AvatarImage
										src="https://mgcfeni.edu.bd/midea/featuredimage/featuredimage2019-03-04-13-47-19_5c7d1e5732a77.jpg"
										alt="@shadcn"
									/>
									<AvatarFallback className="rounded-lg">
										{user?.role}
									</AvatarFallback>
								</Avatar>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate text-xs">{user?.name}</span>
									<span className="truncate text-xs">{user?.email}</span>
								</div>
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Account</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem onClick={() => handleLogout()}>
							<LogOut />
							Log out
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	);
}
