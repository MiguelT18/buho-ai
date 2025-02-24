"use client";

import Chat from "@/components/layouts/Chat";
import ChatForm from "@/components/layouts/ChatForm";
import { ChatProvider } from "@/hooks/useChat";
import { useEffect, useState } from "react";

export default function Home() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [availableHeight, setAvailableHeight] = useState(0);

  useEffect(() => {
    const header = document.querySelector("header");
    const calculatedHeaderHeight = header ? header.offsetHeight : 0;
    setHeaderHeight(calculatedHeaderHeight);

    // Calcular la altura restante de la ventana
    const calculateAvailableHeight = () => {
      const newAvailableHeight = window.innerHeight - calculatedHeaderHeight;
      setAvailableHeight(newAvailableHeight);
    };

    calculateAvailableHeight();

    window.addEventListener("resize", calculateAvailableHeight);

    return () => {
      window.removeEventListener("resize", calculateAvailableHeight);
    };
  }, [headerHeight]);

  if (headerHeight === 0) return null; // Evitar renderizar antes de que se calcule la altura

  return (
    <main
      style={{ height: `${availableHeight}px` }}
      className="h-full w-full flex flex-col justify-between items-center bg-gradient-light dark:bg-gradient-dark"
    >
      <ChatProvider>
        <Chat />
        <ChatForm />
      </ChatProvider>
    </main>
  );
}
