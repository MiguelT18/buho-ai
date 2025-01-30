"use client";

import { useTheme } from "@/hooks/useTheme";
import React from "react";
import { MenuUnfoldIcon } from "./icons";
import { SecondaryButton } from "./Buttons";

export default function SidebarMenu({ isOpen, closeSidebar }) {
  const { theme } = useTheme();

  return (
    <aside
      className={`w-full h-full flex flex-col justify-between fixed top-0 left-0 sm:w-[265px] dark:bg-dark-background/85 bg-light-background/85 backdrop-blur-sm transition-transform ease-ease-[cubic-bezier(0.95,0.05,0.795,0.035)] duration-300 ${
        !isOpen ? "-translate-x-full" : "translate-x-0"
      }`}
    >
      <header className="w-full flex justify-between items-center p-4 border-b-2 border-light-gray">
        <h1
          className={`size-fit block uppercase font-bold text-sm ${
            theme === "dark" ? "text-gradient-dark" : "text-gradient-light"
          }`}
        >
          Buho Ai
        </h1>

        <span
          onClick={closeSidebar}
          className="size-fit block p-2 hover:dark:bg-light-gray hover:bg-light-gray/15 rounded-md cursor-pointer"
        >
          <MenuUnfoldIcon className="dark:text-white text-black size-6" />
        </span>
      </header>

      <footer className="w-full mb-5 space-y-2 px-4">
        <SecondaryButton href="/user/signin">Iniciar Sesión</SecondaryButton>
        <SecondaryButton href="/user/signup">Crear Cuenta</SecondaryButton>
      </footer>
    </aside>
  );
}
