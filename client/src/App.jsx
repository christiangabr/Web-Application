import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Layout from './Layout'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Hub from './Pages/Hub'
import Profile from './Pages/Profile'
import FuelQuote from './Pages/FuelQuote'
import FuelQuoteHistory from './Pages/FuelQuoteHistory'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* Initial Page */}
        <Route index element={<Home />} />
        {/* Register/Login */}
        <Route path='/register' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        {/* Login Content */}
        <Route  element={<Layout/>}>
          <Route path='/hub' element={<Hub />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/fuelquote' element={<FuelQuote />} />
          <Route path='/fuelquotehistory' element={<FuelQuoteHistory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App