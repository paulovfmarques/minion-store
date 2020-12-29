import React, { createContext, useState } from "react";

export const reservationContext = createContext();

export default function ReservationProvider({ children }) {
  const [reservationDone, setReservationDone] = useState(false);
  const [productsArr, setProductsArr] = useState("");

  return (
    <reservationContext.Provider
      value={{
        reservationDone,
        setReservationDone,
        productsArr,
        setProductsArr
      }}
    >
      {children}
    </reservationContext.Provider>
  );
}
