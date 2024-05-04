import { GraduationCap, Hand, LayoutIcon, Settings } from "lucide-react";

export const sideMenu = [
  {
    id: 1,
    name: "Dashboard",
    icon: LayoutIcon,
    path: "/dashboard",
  },
  {
    id: 2,
    name: "Students",
    icon: GraduationCap,
    path: "/dashboard/students",
  },
  {
    id: 3,
    name: "Attendance",
    icon: Hand,
    path: "/dashboard/attendance",
  },
  {
    id: 4,
    name: "Settings",
    icon: Settings,
    path: "/dashboard/settings",
  },
];
