import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="home-sec">
        <Home />
      </section>
    </div>
  );
}

export default App;
