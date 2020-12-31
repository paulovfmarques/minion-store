import React, { createContext, useState } from "react";
import { API } from "aws-amplify";

export const reservationContext = createContext();

export default function ReservationProvider({ children }) {
  const [reservationDone, setReservationDone] = useState(false);
  const [productsArr, setProductsArr] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const listProducts = async () => {
    setIsLoading(true);
    try{
        const result = await API.get("list","/list");
        setProductsArr(result);
    }catch(err){
        console.log(err)
    }
    setIsLoading(false);
  };

  return (
    <reservationContext.Provider
      value={{
        reservationDone,
        setReservationDone,
        productsArr,
        setProductsArr,
        isLoading,
        listProducts
      }}
    >
      {children}
    </reservationContext.Provider>
  );
}
