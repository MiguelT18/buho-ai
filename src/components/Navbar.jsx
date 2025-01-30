"use client";

import { useTheme } from "@/hooks/useTheme";
import {
  UserIcon,
  MenuFoldIcon,
  MoonRisingIcon,
  SunRisingIcon,
  OwlIcon,
} from "@/icons/index";
import Link from "next/link";

export default function Navbar({ openSidebar }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex items-center justify-between container mx-auto p-4">
      <button
        onClick={openSidebar}
        type="button"
        className="p-2 rounded-md hover:bg-light-gray/15 hover:dark:bg-light-gray transition-all"
      >
        <MenuFoldIcon className="size-6 dark:text-white text-black" />
      </button>

      <div className="max-sm:hidden flex items-center justify-center gap-2">
        <OwlIcon className="size-12" />
        <h1
          className={`inline-block uppercase font-bold text-md ${
            theme === "dark" ? "text-gradient-dark" : "text-gradient-light"
          }`}
        >
          Buho AI
        </h1>
      </div>

      <ul className="flex items-center gap-2 [&>li]:transition-all">
        <li
          onClick={toggleTheme}
          className="p-2 hover:dark:bg-light-gray hover:bg-light-gray/15 rounded-md cursor-pointer"
        >
          {theme === "dark" ? (
            <MoonRisingIcon className="size-6 text-white" />
          ) : (
            <SunRisingIcon className="size-6 text-black" />
          )}
        </li>
        <li className="hover:bg-light-gray/15 hover:dark:bg-light-gray rounded-md cursor-pointer">
          <Link className="p-2 block" href="/user/signin">
            <UserIcon className="size-6 dark:text-white text-black" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
