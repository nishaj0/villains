import React from 'react'

import './home.css'

import kanekiSit from "../../assets/kaneki_sit_hd.png"
// import kanekiBg from "../../assets/kanaki-bg-hd.jpg"
// import kanekiMask from "../../assets/kaneki-mask-no-bg.webp"

const Home = () => {
  return (
    <div className='villains__home section__padding'>
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