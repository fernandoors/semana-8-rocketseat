import React, {useState} from 'react'
import logo from '../assets/logo.svg'
import './Login.css'
import { api } from '../services/api';

export const Login = ({history}) =>{
  const [username, setUsername] = useState('')
   const handleSubmit = async (e) =>{
    e.preventDefault()
    const response = await api.post('/devs',{
      username
    })
    const { _id } = response.data
    history.push(`/dev/${_id}`)
  }
  return(
    <div className='login-container'>
      <form onSubmit={handleSubmit}>
        <img src={logo} alt='TinDev' />
        <input placeholder='Digite seu usuario no Github' 
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}