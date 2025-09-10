import React from 'react'
import Button from './Button.jsx'

const Events = () => {
    const logIn = () => {
        console.log('User logged in')
    }
    const register = () => {
        alert('User registered')
    }
  return (
    <>
    <Button func={logIn} text="Log In"/>
    <Button func={register} text="Register"/>
    </>
  )
}

export default Events
