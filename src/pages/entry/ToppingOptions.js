import React, {useContext} from 'react'
import Col from 'react-bootstrap/Col'
import { OrderContext } from '../../context/orderContext'

function TopingOptions({item}) {
  const { updateOrderItems } = useContext(OrderContext)
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{textAlign:'center'}}>
      <img
        src={`http://localhost:3030${item.imagePath}`}
        alt={`${item.name} topping`}
        style={{width:'50%'}}
      />
      <div className='d-flex align-items-center justify-content-center mb-3'>
        <input type="checkbox" id={item.name} onChange={(e)=>updateOrderItems(item.name, e.target.checked? 1 : 0, "toppings")}/>
        <label htmlFor={item.name} className='ms-1 text-light'>{item.name}</label>
      </div>
    </Col>
  )
}

export default TopingOptions