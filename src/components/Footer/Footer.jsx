import "./Footer.css";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <Link to="home" spy={true} smooth={true}>
            <img className="logo" src="./logoGold.png" alt="logo" width={120} />
          </Link>
          <span className="secondaryText">
            Our goal is to create optimal living environments <br /> for
            everyone, tailored to their needs and preferences.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">
            Damstraat 123, 1012 AB, Amsterdam, Netherlands
          </span>
          <div className="flexCenter f-menu">
            <Link to="home" spy={true} smooth={true}>
              Home
            </Link>
            <Link to="services" spy={true} smooth={true}>
              Services
            </Link>
            <Link to="about" spy={true} smooth={true}>
              About Us
            </Link>
            <Link to="contact" spy={true} smooth={true}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
