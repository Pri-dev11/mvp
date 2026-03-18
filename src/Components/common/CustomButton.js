import React from 'react'
import Button from 'react-bootstrap/esm/Button'

function CustomButton(props) {
  return (
    <Button variant={props.variant} className="" onClick={props.onButtonClick}>
      {props.innerText} <i className="fa fa-arrow-right" aria-hidden="true"></i>
    </Button>
  )
}

export default CustomButton