import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "../App.css";
import Properties from "./components/Properties/Properties";
import AboutUs from "./components/AboutUs/AboutUs";
import Latest from "./components/Latest/Latest";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <div className="App">
        <div>
          <div className="blue-gradient" />
          <Header />
        </div>
        <Properties />
        <Hero />
        <AboutUs />
        <Latest />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
