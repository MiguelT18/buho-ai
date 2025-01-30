"use client";

import React from "react";
import { ClipIcon, SendIcon, TrashIcon } from "../icons";
import { useNotification } from "@/hooks/useNotification";
import { useChat } from "@/hooks/useChat";

export default function ChatForm() {
  const { showNotification } = useNotification();
  const { resetChat } = useChat();

  return (
    <form className="px-4 block w-full py-5 bg-white dark:bg-black">
      <div className="w-full max-w-[800px] mx-auto space-y-2">
        <textarea
          className="w-full max-h-[200px] bg-transparent border dark:border-light-gray border-light-gray/15 text-black dark:text-white p-2 rounded-md resize-none textarea-autoheight"
          placeholder="Escribe tu consulta legal aquí..."
        ></textarea>

        <div className="w-full flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <button
              onClick={resetChat}
              type="button"
              className="transition-all p-2 hover:dark:bg-red-700/15 hover:bg-red-500/15 rounded-md"
            >
              <TrashIcon className="text-red-500 dark:text-red-700 size-6" />
            </button>
            <button
              type="button"
              onClick={() =>
                showNotification("Funcionalidad aún no disponible", "error")
              }
              className="transition-all p-2 hover:dark:bg-light-gray hover:bg-light-gray/15 rounded-md"
            >
              <ClipIcon className="text-black dark:text-white size-6" />
            </button>
          </div>

          <button
            type="button"
            onClick={() =>
              showNotification("Funcionalidad aún no disponible", "error")
            }
            className="p-2 size-10 rounded-full dark:bg-white hover:dark:bg-white/80 bg-black hover:bg-black/80 transition-all"
          >
            <SendIcon className="text-white dark:text-black size-full" />
          </button>
        </div>
      </div>
    </form>
  );
}
