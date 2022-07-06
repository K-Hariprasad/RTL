import React, { useState, useEffect, createContext, useMemo } from "react";
import { sundaeItemsPrice } from "../utils/appConstants";

export const OrderContext = createContext();

const calculateTotal = (orderItems, type) => {
    let optionCount = 0
    for ( let c of orderItems[type].values()){
        optionCount += c
    }
    return (optionCount * sundaeItemsPrice[type])
}

export const OrderContextProvider = ({children}) => {

  const [orderItems, setOrderItems] = useState({
    scoops : new Map(),
    toppings : new Map()
  });

  const [totals, setTotals] = useState({
    scoopsSubtotal : 0,
    toppingsSubtotal : 0,
    grandTotal : 0
  })

  useEffect(()=>{
    const scoopsSubtotal = calculateTotal(orderItems, "scoops")
    const toppingsSubtotal = calculateTotal(orderItems, "toppings")
    const grandTotal = scoopsSubtotal + toppingsSubtotal
    setTotals({ scoopsSubtotal, toppingsSubtotal, grandTotal})
  },[orderItems])

  const value = useMemo(()=>{
      const updateOrderItems = (item, quantity, type) => {
        const newOrderItems = { ...orderItems }
        const orderItemMap = newOrderItems[type]
        orderItemMap.set(item, parseInt(quantity))
        setOrderItems(newOrderItems)
      }
    return {orderItems, updateOrderItems, totals}
  }, [orderItems, totals])
  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
};
