import React from 'react'
import Navbar from './Navbar'
const HomePage = () => {
  return (
    <>
    <div>
        <Navbar/>
      <img id="homephoto" src="./src/assets/home-car-wallpapers.jpg"></img>
    </div>
    <h2>Popular categoris</h2>
    <div>
      <button>Electric</button>
      <button>Hybrid</button>
      <button>SUV</button>
    </div>
    </>
  )
}
export default HomePage