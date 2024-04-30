import "./Header.css";
import logoImg from "/logoGold.png";
import { motion } from "framer-motion";
import { HiLocationMarker } from "react-icons/hi";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-scroll";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };

  return (
    <>
      <section className="h-wrapper" id="home">
        <div className="flexCenter h-container paddings innerWidth">
          <Link className="h-logo" to="home" spy={true} smooth={true}>
            <img src={logoImg} alt="logo" className="logo" />
          </Link>

          <OutsideClickHandler
            onOutsideClick={() => {
              setMenuOpened(false);
            }}
          >
            <div
              className="flexCenter h-menu"
              style={getMenuStyles(menuOpened)}
            >
              <div onClick={() => setMenuOpened(false)}>
                <Link to="home" spy={true} smooth={true}>
                  Home
                </Link>
              </div>
              <div onClick={() => setMenuOpened(false)}>
                <Link to="services" spy={true} smooth={true}>
                  Services
                </Link>
              </div>
              <div onClick={() => setMenuOpened(false)}>
                <Link to="about" spy={true} smooth={true}>
                  About Us
                </Link>
              </div>
              <div onClick={() => setMenuOpened(false)}>
                <Link to="contact" spy={true} smooth={true}>
                  Contact
                </Link>
              </div>
            </div>
          </OutsideClickHandler>

          <div className="menu-icon">
            <BiMenu
              size={30}
              onClick={() => setMenuOpened((prevState) => !prevState)}
            />
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
