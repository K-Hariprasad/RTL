import React, {useContext} from "react";
import Col from 'react-bootstrap/Col'
import { OrderContext } from "../../context/orderContext";
function ScoopOptions({ item }) {
  const { updateOrderItems } = useContext(OrderContext)
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{textAlign:'center'}}>
      <img
        src={`http://localhost:3030${item.imagePath}`}
        alt={`${item.name} scoop`}
        style={{width:'50%'}}
      />
      <div className='d-flex align-items-center justify-content-center mb-3 mt-1'>
        <input className="text-center" id={item.name} type="number" style={{width:'25%', background:'#fff'}} onChange={(e)=>updateOrderItems(item.name, e.target.value, "scoops")}/>
        <label htmlFor={item.name} className='ms-1 text-light'>{item.name}</label>
      </div>
    </Col>
  );
}

export default ScoopOptions;
