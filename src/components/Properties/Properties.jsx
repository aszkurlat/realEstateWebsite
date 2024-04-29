import "./Properties.css";
import propertiesData from "../../utils/properties-data.json";

function Properties() {
  return (
    <section className="p-wrapper flexColCenter" id="services">
      <div className="flexColStart p-head innerWidth paddings">
        <span className="orangeText">Current Listings</span>
        <span className="primaryText">Properties for Sale</span>
      </div>
      <div className="p-container innerWidth">
        {propertiesData.map((property, i) => (
          <div className="p-property flexColStart" key={i}>
            <img src={property.image} alt="home" />

            <span className="secondaryText p-price">
              <span style={{ color: "orange" }}>€ </span>
              <span>{property.price}</span>
            </span>

            <span className="primaryText">{property.name}</span>
            <span className="secondaryText p-description">
              {property.detail}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Properties;
