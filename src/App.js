import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";


function App() {
  return (
    <div className="">
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Jobs/>
      <Experience />
      <Contact />
      
      <SocialLinks />
      
    </div>
  );
}

export default App;
