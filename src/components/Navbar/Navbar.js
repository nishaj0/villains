import './Navbar.css'
export default function Navbar(){
   return(
      <nav className="nav">
         <h1 className="nav--h1">Head</h1>
         <ul className="nav--ul">
            <li><a href='#'>contact</a></li>
            <li><a href='#'>about</a></li>
         </ul>
      </nav>
   )
}