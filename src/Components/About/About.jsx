import React from 'react'
import './About.css'
import theme_pattern from '../../Assets/theme_pattern.svg'
import profile_img from '../../Assets/profile.JPG'

const About = () => {
  return (
      <div className="about">
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" height = "00" width = "500" />
            </div>

        </div>
      </div>
  )
}

export default About
