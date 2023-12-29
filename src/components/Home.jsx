import React from 'react'
import bgimg from '../assets/bg-image.jpg'

const Home = () => {

    let myHomeStyle = {
        height: "92vh",
        backgroundImage: `url(${bgimg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
    }

  return (
    <div style={myHomeStyle} className='d-flex justify-content-center align-items-center'>
        <h1 className='bg-dark text-light display-1 fw-bold'>WELCOME TO TECHREL</h1>
    </div>
  )
}

export default Home
