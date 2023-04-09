import './Navbar.css'
import '../../index.css'
export default function Navbar(){
   return(
      <nav className="nav section container">
         <h1 className="nav--h1">Head</h1>
         <ul className="nav--ul">
            <li><a href='#'>contact</a></li>
            <li><a href='#'>about</a></li>
         </ul>
      </nav>
   )
}