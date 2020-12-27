import React, { createContext, useState } from "react";

export const reservationContext = createContext();

export default function ReservationProvider({ children }) {
  const [reservationDone, setReservationDone] = useState(false);  

  return (
    <reservationContext.Provider
      value={{
        reservationDone,
        setReservationDone,
      }}
    >
      {children}
    </reservationContext.Provider>
  );
}
