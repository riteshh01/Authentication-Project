import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard.jsx'
import Login from './Pages/Login.jsx'

const App = () => {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/dashboard' element={<Dashboard/>} />
  </Routes>
  </BrowserRouter>
  )
}

export default App