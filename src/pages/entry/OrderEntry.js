import React, {useContext} from "react";
import { OrderContext } from "../../context/orderContext";
import { formatCurrency } from "../../utils/appFunctions";
import Options from "./Options";

function OrderEntry() {
  const { totals } = useContext(OrderContext)
  return (
    <>
      <h1 className="text-light text-center">Sundae on Demand!</h1>
      <hr/>
      <Options optionType="scoops" />
      <hr/>
      <Options optionType="toppings" />
      <hr/>
      <div className='d-flex align-items-center justify-content-between pb-2'>
        <h2 className="text-light">Grand Total : {formatCurrency(totals["grandTotal"])}</h2>
        <button className="btn btn-light">Order Sundae!</button>
      </div>
    </>
  );
}

export default OrderEntry;
