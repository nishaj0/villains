import React from 'react'

import './home.css'

import kanekiSit from "../../assets/kaneki-sitting.png"

const Home = () => {
  return (
    <div className='villains__home '>
      <div className="villains__home-image">
        <img src={kanekiSit} alt="kaneki" />
        <div className="gradient__bg villains__home-image_gradient"></div>
      </div>
      <div className="villains__home-content">
        <h1>Villains are not born,</h1>
        <p> they are made by the world around them.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ut vitae esse harum in iste et obcaecati fugit fuga alias.</p>
        <button>explore now</button>
      </div>
    </div>
  )
}

export default Home