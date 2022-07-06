import React from 'react'
import Alert from 'react-bootstrap/Alert'
function AlertBanner({ message, variant}) {
    const alertMessage = message || "An unexpected error occured! Please try again..";
    const alertVariant = variant || 'danger'
  return (
    <Alert variant={alertVariant} style={{ backgroundColor:'red', color:'#fff'}}>{alertMessage}</Alert>
  )
}

export default AlertBanner