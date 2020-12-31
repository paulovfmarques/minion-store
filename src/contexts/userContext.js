import React, { createContext, useState } from "react";

export const userContext = createContext();

export default function UserProvider({ children, ...rest }) {
  const [sessionEmail, setSessionEmail] = useState("");
  return (
    <userContext.Provider
      value={{
        ...rest,
        sessionEmail, 
        setSessionEmail,
      }}
    >
      {children}
    </userContext.Provider>
  );
}
