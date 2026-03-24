import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import './common.css'

function CustomButton(props) {
  return (
    <Button className="custom-btn">
      {props.innerText}
      <span className="btn-icon">
        <i className="fa-solid fa-arrow-right"></i>
      </span>
    </Button>
  )
}

export default CustomButton