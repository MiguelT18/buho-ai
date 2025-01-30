import React, { createContext, useContext, useState } from "react";

// Crear contexto
const ChatContext = createContext();

// Hook para usar el contexto
export const useChat = () => useContext(ChatContext);

// Componente proveedor del contexto
export const ChatProvider = ({ children }) => {
  const [chatHistory, setChatHistory] = useState([]);
  const [isQuestionSelected, setIsQuestionSelected] = useState(false);

  // Función para resetear el chat
  const resetChat = () => {
    setChatHistory([]);
    setIsQuestionSelected(false);
  };

  return (
    <ChatContext.Provider
      value={{
        chatHistory,
        isQuestionSelected,
        setChatHistory,
        setIsQuestionSelected,
        resetChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
