import React from 'react'
import pizzaleft from "../assets/pizzaleft.jpg";
import "../styles/Contact.css"


function Contact() {
  return (
    <div className='contact'>
      <div className="leftSide" style={{ backgroundImage: `url(${pizzaleft})` }}>

      </div>
      <div className="rightSide">
        <h1>Contact us</h1>
        <form action="POST" id='contact-form'>
          <label htmlFor="name">Full Name</label>
          <input type="text" name='name' placeholder='Enter full name...'/>
          <label htmlFor="email">Email</label>
          <input type="email" name='email' placeholder='Enter email...'/>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="" cols="30" rows="6" placeholder='Enter massage...' required></textarea>
          <button type='submit'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
