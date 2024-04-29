import "./Hero.css";
import houseImg from "/house-new.jpg";
import { motion } from "framer-motion";
import CountUp from "react-countup";

function Hero() {
  return (
    <section className="hero-wrapper flexColCenter">
      <div className="hero-centre">
        <div className="hero-image-container flexCenter">
          <img src={houseImg} alt="house" />
          <div className="hero-bottom ">
            <motion.h2
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring",
              }}
              className="titleText"
            >
              We pride ourselves on being a reliable and trusted name <br />
              in the real estate industry, known for our solid track <br />
              record of success.
            </motion.h2>
            <h3 className="secondaryText">
              As leaders in the market, we strive to provide unparalleled
              service
              <br />
              and deliver the best outcomes for our clients, setting us apart as
              <br />
              the top choice for all real estate needs.
            </h3>
            {/* STATS */}
            <div className="stats flexCenter">
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={100} end={270} duration={4} />
                  <span>+</span>
                </span>
                <span className="statsText">Exceptional Properties</span>
              </div>
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={1900} end={2000} duration={4} />
                  <span>+</span>
                </span>
                <span className="statsText">Satisfied Homeowners</span>
              </div>
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={2} end={28} duration={8} />
                  <span>+</span>
                </span>
                <span className="statsText">Industry Accolades</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
