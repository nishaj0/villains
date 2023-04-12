import React from "react";

import { Navbar } from "./components/";
import { Home } from "./containers";

import "./index.css";
import "./app.css";

const App = () => {
   return (
      <div className="App">
         <Navbar />
         <Home />
      </div>
   );
};

export default App;
