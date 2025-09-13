import React from 'react'
import Button from './Button.jsx'

const Events = () => {
    const logIn = () => {
        alert('User logged in')
    }
    const register = () => {
        alert('User registered')
    }
  return (
    <>
    <Button func={logIn} text="Log In"/>
    <Button func={()=>{alert('logged in')}} text="Log In 2"/>
    <Button func={register} text="Register"/>
    </>
  )
}

export default Events