import React, { createContext, useState } from "react";

export const userContext = createContext();

export default function UserProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <userContext.Provider
      value={{
        isLogged,
        setIsLogged
      }}
    >
      {children}
    </userContext.Provider>
  );
}
