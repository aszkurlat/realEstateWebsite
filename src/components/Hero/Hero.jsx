import "./Hero.css";
import houseImg from "/house.jpg";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { HiLocationMarker } from "react-icons/hi";

function Hero() {
  return (
    <section className="hero-wrapper flexColCenter">
      <div className="hero-top">
        <motion.h1
          initial={{ x: "-10rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2,
            type: "spring",
          }}
          className="titleText "
        >
          Discover <br />
          The Most Suitable
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
          Find a variety of properties that suit you very easilty <br />
          Forget all difficulties in finding a residence for you
        </motion.h2>
      </div>
      <div className="hero-centre">
        <svg
          className="waves-top"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#2a0368"
            fillOpacity="1"
            d="M0,96L60,106.7C120,117,240,139,360,122.7C480,107,600,53,720,48C840,43,960,85,1080,101.3C1200,117,1320,107,1380,101.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
        <img src={houseImg} alt="house" />
        <svg
          className="waves-bottom"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#2a0368"
            fillOpacity="1"
            d="M0,96L60,106.7C120,117,240,139,360,122.7C480,107,600,53,720,48C840,43,960,85,1080,101.3C1200,117,1320,107,1380,101.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="hero-bottom">
        <motion.h2
          initial={{ y: "2rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 2,
            type: "spring",
          }}
          className="titleText"
        >
          We pride ourselves on being a reliable and trusted name in the real
          estate industry, known for our solid track record of success.
        </motion.h2>
        <h3 className="secondaryText">
          As leaders in the market, we strive to provide unparalleled service
          <br />
          and deliver the best outcomes for our clients, setting us apart as the
          top choice for all real estate needs.
        </h3>
        {/* STATS */}
        <div className="stats flexCenter">
          <div className="flexColCenter stat">
            <span>
              <CountUp start={88000} end={90000} duration={4} />
              <span>+</span>
            </span>
            <span className="secondaryText">Premium Products</span>
          </div>
          <div className="flexColCenter stat">
            <span>
              <CountUp start={1950} end={2000} duration={4} />
              <span>+</span>
            </span>
            <span className="secondaryText">Happy Customers</span>
          </div>
          <div className="flexColCenter stat">
            <span>
              <CountUp end={28} />
              <span>+</span>
            </span>
            <span className="secondaryText">Award Winings</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
