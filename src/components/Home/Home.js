import './Home.css'
export default function Home() {
   return(
      <div className='home'>
         <div className='home--img-div home--col-1'>
            <div className='home--img-gradient'>
            <img className='home--img' alt='' src={require('../../assets/sharingan_3.webp')}/>
            </div>
         </div>
         <div className='home--h-div home--col-2'>
            <h2 className='home--h2'>Villains</h2>
            <h2 className='home--h3'>are not born they made by society</h2>
         </div>
      </div>
   )
}