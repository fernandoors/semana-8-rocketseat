import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import logo from '../assets/logo.svg'
import like from '../assets/like.svg'
import dislike from '../assets/dislike.svg'
import itsamatch from '../assets/itsamatch.png'
import { Link } from 'react-router-dom'
import './Main.css'
import { api } from '../services/api';

export const Main = ({ match }) => {
  const [users, setUsers] = useState([])
  const [matchDev, setMatchDev] = useState(null)
  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/devs', {
        headers: { user: match.params.id }
      })
      setUsers(response.data)
    }
    loadUsers()
  }, [match.params.id])
  useEffect(() => {
    const socket = io('http://localhost:3333', {
      query: { user: match.params.id }
    })
    socket.on('match', dev => {
      setMatchDev(dev)
    })
  }, [match.params.id])
  const handleLike = async (id) => {
    await api.post(`/devs/${id}/likes`, null, {
      headers: { user: match.params.id }
    })
    setUsers(users.filter(user => user._id !== id))
  }
  const handleDislike = async (id) => {
    await api.post(`/devs/${id}/dislikes`, null, {
      headers: { user: match.params.id }
    })
    setUsers(users.filter(user => user._id !== id))
  }
  return (
    <div className='main-container'>
      <Link to='/'>
        <img src={logo} alt='TinDev' />
      </Link>
      {users.length === 0
        ? <div className='empty'>Acabou :(</div>
        :
        <ul>
          {users.map(user => (
            <li key={user._id}>
              <img src={user.avatar} alt={user.name} />
              <footer>
                <strong>{user.name}</strong>
                <p>{user.bio}</p>
              </footer>
              <div className='buttons'>
                <button type='button' onClick={() => handleDislike(user._id)}>
                  <img src={dislike} alt='dislike' />
                </button>
                <button type='button' onClick={() => handleLike(user._id)}>
                  <img src={like} alt='like' />
                </button>
              </div>
            </li>
          ))}
        </ul>
      }
      {matchDev &&
        <div className='match-container'>
          <img src={itsamatch} alt="It's a match" />
          <img className='avatar' src={matchDev.avatar} alt="Dev" />
          <strong>{matchDev.name}</strong>
          <p>{matchDev.bio}</p>
          <button type='button' onClick={() => setMatchDev(null)}>FECAHAR</button>
        </div>
      }
    </div>
  )
}