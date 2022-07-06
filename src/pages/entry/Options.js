import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import ScoopOptions from "./ScoopOptions";
import Row from "react-bootstrap/Row";
import ToppingOptions from "./ToppingOptions";
import AlertBanner from "../common/AlertBanner";
import {sundaeItemsPrice} from '../../utils/appConstants';
import { formatCurrency } from "../../utils/appFunctions";
import { OrderContext } from "../../context/orderContext";

function Options({ optionType }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const { totals } = useContext(OrderContext)
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => setError(true));
  }, [optionType]);
  const ItemComponent = optionType === "scoops" ? ScoopOptions : ToppingOptions;
  if (error) {
    return <AlertBanner />;
  }
  const optionItems = items.map((i) => <ItemComponent key={i.name} item={i} />);
  return (
    <>
      <h2 className="text-light">{optionType[0].toUpperCase() + optionType.slice(1).toLowerCase()}</h2>
      <div className='d-flex align-items-center justify-content-between mb-2 text-light'>
        <em>{formatCurrency(sundaeItemsPrice[optionType])} each</em>
        <strong>{optionType[0].toUpperCase() + optionType.slice(1).toLowerCase()} total : {formatCurrency(totals[`${optionType}Subtotal`])}</strong>
      </div>
      <Row>{optionItems}</Row>
    </>
  )
}

export default Options;
