import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Login } from './Pages/Login';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Login} />
    </BrowserRouter>
  )
}