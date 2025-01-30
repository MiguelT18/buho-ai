"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "../Navbar";
import SidebarMenu from "../SidebarMenu";
import { PrimaryButton } from "../Buttons";
import { SearchIcon } from "../icons";
import { useNotification } from "@/hooks/useNotification";
import Input from "../Input";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  const { showNotification } = useNotification();

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  if (pathname.startsWith("/user")) return null;

  return (
    <header>
      <Navbar openSidebar={() => setIsSidebarOpen(true)} />

      <SidebarMenu
        isOpen={isSidebarOpen}
        closeSidebar={() => setIsSidebarOpen(false)}
      />

      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-5 flex items-center gap-2"
      >
        <Input type="text" placeholder="Buscar códigos, leyes y artículos..." />
        <PrimaryButton
          type="submit"
          onClick={() =>
            showNotification("Funcionalidad aún no disponible", "error")
          }
        >
          <span className="block -scale-x-100">
            <SearchIcon className="size-5 text-light-background dark:text-light-gray/70" />
          </span>
          Buscar
        </PrimaryButton>
      </form>
    </header>
  );
}
