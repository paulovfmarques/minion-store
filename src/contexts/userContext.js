import React, { createContext } from "react";

export const userContext = createContext();

export default function UserProvider({ children, ...rest }) {
  return (
    <userContext.Provider
      value={{
        ...rest
      }}
    >
      {children}
    </userContext.Provider>
  );
}
