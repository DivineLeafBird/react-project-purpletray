import "./App.css";
import About from "./components/About";
import Features from "./components/Features";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      {/* import components */}
      <Navbar />
      <Home />
      <Features />
      <About />
    </>
  );
}

export default App;
