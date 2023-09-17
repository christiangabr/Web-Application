import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar_Home/Navbar_Home';

const Home = () => {
  return (
    <div>
      <div className='home-container'>
        < Navbar/>
        <img src="/power-station.jpg" alt="" className='home-img'/>
        <h1 className='mid-container'>The Future of Fuel Calculation</h1>
      </div>
      {/* <div className='home-form'>
        <h1>Content PlaceHolder</h1>
      </div> */}
    </div>

  )
}

export default Home