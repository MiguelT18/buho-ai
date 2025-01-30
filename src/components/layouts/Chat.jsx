import { useChat } from "@/hooks/useChat";
import React from "react";

const defaultUserMessages = [
  {
    id: 1,
    role: "user",
    content: "¿Qué códigos de procedimiento tienes en cuenta?",
    response:
      "Tengo en cuenta el Código de Procedimiento Civil, Penal y Administrativo de Bolivia.",
  },
  {
    id: 2,
    role: "user",
    content: "¿Qué artículos de ley tienes en cuenta?",
    response:
      "Considero los artículos relevantes de la Constitución Política del Estado y leyes nacionales vigentes.",
  },
  {
    id: 3,
    role: "user",
    content: "¿Qué normas de derecho tienes en cuenta?",
    response:
      "Incluyo normas de derecho civil, penal, administrativo y comercial aplicables en Bolivia.",
  },
];

export default function Chat() {
  const {
    chatHistory,
    isQuestionSelected,
    setChatHistory,
    setIsQuestionSelected,
  } = useChat();

  const handleQuestionClick = (id) => {
    const selectedMessage = defaultUserMessages.find((msg) => msg.id === id);
    if (selectedMessage) {
      // Agregar solo la pregunta y el texto temporal "Pensando..."
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { role: "user", content: selectedMessage.content },
        { role: "bot", content: "Pensando..." }, // Texto temporal
      ]);
      setIsQuestionSelected(true); // Ocultar la sección de preguntas

      // Reemplazar "Pensando..." con la respuesta después de 2 segundos
      setTimeout(() => {
        setChatHistory((prevHistory) => {
          const updatedHistory = [...prevHistory];
          updatedHistory[updatedHistory.length - 1] = {
            role: "bot",
            content: selectedMessage.response,
          };
          return updatedHistory;
        });
      }, 2000);
    }
  };

  return (
    <section className="px-4 w-full max-w-[800px] mx-auto py-5 overflow-y-auto size-full space-y-5">
      {/* Historial del chat */}
      <div className="space-y-4">
        {chatHistory.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`p-2 ${
                message.role === "user"
                  ? "dark:bg-white bg-light-gray rounded-l-xl rounded-se-xl dark:text-black text-white"
                  : "dark:bg-light-gray bg-white rounded-e-xl rounded-tl-xl dark:text-white text-black"
              } text-sm text-pretty max-w-[90%]`}
            >
              <p>{message.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mostrar las preguntas solo si no se ha seleccionado ninguna */}
      {!isQuestionSelected && (
        <>
          <p className="text-center">Escoge una pregunta</p>
          <div className="flex max-sm:flex-col w-full gap-4">
            {defaultUserMessages.map((userMessage) => (
              <div
                key={userMessage.id}
                className="p-2 dark:bg-white bg-light-gray rounded-xl dark:text-black text-white text-sm text-pretty cursor-pointer hover:dark:bg-white/80 hover:bg-light-gray/80 transition-all"
                onClick={() => handleQuestionClick(userMessage.id)}
              >
                <p>{userMessage.content}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
