// import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "../App.css";
import Properties from "./components/Properties/Properties";

function App() {
  return (
    <>
      <div className="App">
        <div>
          <div className="blue-gradient" />
          <Header />
          <Hero />
        </div>
        <Properties />
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
