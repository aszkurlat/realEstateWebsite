import "./Hero.css";
import houseImg from "../../assets/house.jpg";
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
          className="primaryText "
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
          className="orangeText"
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
            d="M0,224L48,218.7C96,213,192,203,288,218.7C384,235,480,277,576,288C672,299,768,277,864,229.3C960,181,1056,107,1152,101.3C1248,96,1344,160,1392,192L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
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
            d="M0,96L40,112C80,128,160,160,240,165.3C320,171,400,149,480,160C560,171,640,213,720,229.3C800,245,880,235,960,234.7C1040,235,1120,245,1200,234.7C1280,224,1360,192,1400,176L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
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
          className="primaryText"
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
