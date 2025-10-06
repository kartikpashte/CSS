import React from 'react'
import "../index.css"

const Button = ({text,func}) => {
  return (
    <>
        <button onClick={func}>{text}</button>
    </>
  )
}

export default Button
