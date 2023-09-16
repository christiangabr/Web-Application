import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Profile from './Profile'
import FuelQuote from './FuelQuote'
import FuelQuoteHistory from './FuelQuoteHistory'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/fuelquote' element={<FuelQuote />} />
      <Route path='/fuelquotehistory' element={<FuelQuoteHistory />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App