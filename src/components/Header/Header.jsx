import "./Header.css";
import logoImg from "/logoGold.png";
import { motion } from "framer-motion";
import { HiLocationMarker } from "react-icons/hi";
import { Link } from "react-scroll";

function Header() {
  return (
    <>
      <section className="h-wrapper" id="home">
        <div className="flexCenter h-container paddings innerWidth">
          <Link className="logo" to="home" spy={true} smooth={true}>
            <img src={logoImg} alt="logo" className="logoImg" />
          </Link>
          <div className="flexCenter h-menu">
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
          <div className="flexCenter search-bar">
            <HiLocationMarker
              color="var(--blue)"
              size={20}
              style={{ marginRight: ".3rem" }}
            />
            <input type="text" />
            <button className="button">Search</button>
          </div>
        </div>
        <div className="h-top flexColCenter">
          <motion.h1
            initial={{ x: "-10rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring",
            }}
            className="titleText "
          >
            Explore <br />
            Your Ideal
            <br />
            Property
          </motion.h1>
          <motion.h2
            initial={{ x: "10rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring",
            }}
            className="goldText"
          >
            Discover a diverse selection of homes tailored to your needs
            <br />
            Simplify your search for the perfect residence
          </motion.h2>
        </div>
      </section>
    </>
  );
}

export default Header;
