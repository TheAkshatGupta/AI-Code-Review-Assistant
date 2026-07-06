"use client";

import Link from "next/link";
import { LayoutDashboard, FileCode, History, User, LogOut } from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "New Review",
    href: "/review",
    icon: FileCode,
  },
  {
    title: "History",
    href: "/history",
    icon: History,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: User,
  },
];

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-white">
      <div className="border-b p-6">
        <h1 className="text-xl font-bold">
          AI Code Review
        </h1>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-4 py-3 transition hover:bg-gray-100"
            >
              <Icon size={20} />

              {item.title}
            </Link>
          );
        })}
      </nav>

      <button className="m-4 flex items-center gap-3 rounded-lg border p-3 hover:bg-red-50">
        <LogOut size={20} />

        Logout
      </button>
    </aside>
  );
}