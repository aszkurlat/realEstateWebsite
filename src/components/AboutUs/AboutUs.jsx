import "./AboutUs.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../utils/accordion.jsx";
import { useState } from "react";

function AboutUs() {
  const [className, setClassName] = useState("");
  return (
    <section className="about-wrapper" id="about">
      <div className="paddings innerWidth flexCenter about-container">
        {/* left side */}
        <div className="about-left">
          <div className="image-container">
            <img src="./about.jpg" alt="about us" />
          </div>
        </div>

        {/* right side */}
        <div className="flexColStart about-right">
          <span className="orangeText">About Us</span>
          <span className="primaryText">Value We Give to You</span>
          <span className="secondaryText">
            We&apos;re here to help with top-quality services that fit your
            needs
            <br />
            We believe a good home makes life better.
          </span>
          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              return (
                <AccordionItem
                  key={i}
                  className={`accordionItem ${className}`}
                  uuid={i}
                >
                  <AccordionItemHeading className="accordionHeading">
                    <AccordionItemButton className="accordionButton">
                      <AccordionItemState>
                        {({ expanded }) => {
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed");
                        }}
                      </AccordionItemState>
                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
