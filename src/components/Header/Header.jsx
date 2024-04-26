import "./Header.css";
import logoImg from "../../assets/logo.png";

function Header() {
  return (
    <section className="h-wrapper">
      <div className="flexCenter h-container paddings innerWidth">
        <img src={logoImg} alt="logo" className="logo" />
        <div className="flexCenter h-menu">
          <a href="#">Home</a>
          <a href="#">Properties</a>
          <a href="#">Services</a>
          <a href="#">About us</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </section>
  );
}

export default Header;
