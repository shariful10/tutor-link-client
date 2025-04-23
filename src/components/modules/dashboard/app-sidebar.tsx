"use client";

import { Calendar, DollarSign, Home, Inbox, Send, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavUser } from "./nav-user";
import { useUser } from "@/context/UserContext";


const tutorItems = [
  { title: "Dashboard", url: "/tutors/dashboard", icon: Home },
  { title: "Profile", url: "/tutors/profile", icon: Settings },
  { title: "Student Request", url: "/tutors/requestStudent", icon: Send },
  { title: "Home", url: "/", icon: Home },
];

const studentItems = [
  { title: "Dashboard", url: "/student/dashboard", icon: Home },
  { title: "Profile", url: "/student/profile", icon: Inbox },
  { title: "MY Request", url: "/student/myrequest", icon: Calendar },
  { title: "Payment", url: "/student/payment", icon:DollarSign },
  { title: "Home", url: "/", icon: Home },
];


export function AppSidebar() {
  const { user, isLoading } = useUser();

  if (isLoading) return <p>Loading...</p>;

  const items = user?.role === "tutor"? tutorItems:studentItems 
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            {user?.role?.toUpperCase() || "GUEST"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
