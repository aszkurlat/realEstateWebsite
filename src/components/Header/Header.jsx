import "./Header.css";
import logoImg from "/logoGold.png";
import { HiLocationMarker } from "react-icons/hi";

function Header() {
  return (
    <section className="h-wrapper">
      <div className="flexCenter h-container paddings innerWidth">
        <img src={logoImg} alt="logo" className="logo" />
        <div className="flexCenter h-menu">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">About us</a>
          <a href="#">Contact</a>
        </div>
        <div className="flexCenter search-bar">
          <HiLocationMarker color="var(--blue)" size={25} />
          <input type="text" />
          <button className="button">Search</button>
        </div>
      </div>
    </section>
  );
}

export default Header;
