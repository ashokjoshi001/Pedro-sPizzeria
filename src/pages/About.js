import React from 'react'
import "../styles/About.css"
import MultipleImage from "../assets/MultipleImage.jpg"

function About() {
  return (
    <div className='about'>
      <div className="aboutTop" style={{ backgroundImage: `url(${MultipleImage})` }}>

      </div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt inventore nihil asperiores. Rem facere placeat commodi iure! Quaerat, quam sit! Laborum sequi alias obcaecati est? Sed deleniti eos sint reiciendis explicabo quaerat assumenda tenetur laborum porro dolores ipsam minima dicta mollitia non doloremque, necessitatibus molestiae! Suscipit rem optio magnam architecto.</p>
      </div>
    </div>
  )
}

export default About
