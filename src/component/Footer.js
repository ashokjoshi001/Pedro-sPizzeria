import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import React from 'react'
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className="socialMedia">
            <Instagram />
            <Twitter />
            <Facebook />
            <LinkedIn />
            <p> &copy; 2023 pedrotechpizza.com</p>
        </div>
    </div>
  )
}

export default Footer
