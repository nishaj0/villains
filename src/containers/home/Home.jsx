import React from 'react'

import './Home.css'

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
        <h1>Villains</h1>
        <p>Villains are not born, but rather created by the societal factors that influence their behavior. By addressing these factors and providing support to those at risk, we can prevent the emergence of villains and work towards a more just and compassionate society.</p>
      </div>
    </div>
  )
}

export default Home