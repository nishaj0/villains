import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='villains__navbar' >
      <div className="villains__navbar-links">
        <div className="villains__navbar-links_logo">
          <h2>VILLAINS</h2>
        </div>
        <div className="villains__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#home">Home</a></p>
          <p><a href="#home">Home</a></p>
          <p><a href="#home">Home</a></p>
        </div>
      </div>
        <div className="villains__navbar-sign">
          <p>Sign In</p>
          <button type='button'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar