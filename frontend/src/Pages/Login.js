import React from 'react'
import logo from '../assets/logo.svg'
import './Login.css'

export const Login = () =>{
  return(
    <div className='login-container'>
      <form>
        <img src={logo} alt='TinDev' />
        <input placeholder='Digite seu usuario no Github' />
        <button type='submit'>Enviar</button>
      </form>

    </div>
  )
}