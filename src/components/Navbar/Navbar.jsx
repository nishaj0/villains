import React from "react";

import "./Navbar.css";

import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

 const Navbar = () => {
   const [toggleMenu, setToggleMenu] = React.useState(false);

   return (
      <div className="villains__navbar">
         <div className="villains__navbar-links">
            <div className="villains__navbar-links_logo">
               <h2>VILLAINS</h2>
            </div>
            <div className="villains__navbar-links_container">
               <p>
                  <a href="#home">Home</a>
               </p>
               <p>
                  <a href="#home">Home</a>
               </p>
               <p>
                  <a href="#home">Home</a>
               </p>
               <p>
                  <a href="#home">Home</a>
               </p>
            </div>
         </div>
         <div className="villains__navbar-sign">
            <p>Sign In</p>
            <button type="button">Sign Up</button>
         </div>
         <div className="villains__navbar-menu">
            {toggleMenu ? (
               <RiCloseLine
                  color="#fff"
                  size={27}
                  onClick={() => setToggleMenu(false)}
               />
            ) : (
               <RiMenu3Line
                  color="#fff"
                  size={27}
                  onClick={() => setToggleMenu(true)}
               />
            )}
            {toggleMenu && (
               <div className="villains__navbar-menu_container scale-up-center">
                  <div className="villains__navbar-menu_container-links">
                     <p>
                        <a href="#home">Home</a>
                     </p>
                     <p>
                        <a href="#home">Home</a>
                     </p>
                     <p>
                        <a href="#home">Home</a>
                     </p>
                     <p>
                        <a href="#home">Home</a>
                     </p>
                  </div>
                  <div className="villains__navbar-menu_container-sign">
                     <p>Sign In</p>
                     <button type="button">Sign Up</button>
                  </div>
               </div>
            )}
         </div>
      </div>
   );
};

export default Navbar;
