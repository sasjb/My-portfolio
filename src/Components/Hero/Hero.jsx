import React from 'react'
import './Hero.css'
import profile_img from '../../Assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm abdus Salam,</span> fronted developer based in Bangladesh</h1>
      <p>I am a frontend developer from Dhaka</p>
      <div className="hero-action">
        <div className="hero-contact">Contact with me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
