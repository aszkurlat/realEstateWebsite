import "./Properties.css";
import propertiesData from "../../utils/properties-data.json";

function Properties() {
  return (
    <section className="p-wrapper flexColCenter">
      {/* <div className="paddings innerWidth p-container"> */}
      <div className="flexColStart p-head innerWidth">
        <span className="orangeText">Best Choices</span>
        <span className="primaryText">Properties for sale</span>
      </div>
      <div className="p-container innerWidth">
        {propertiesData.map((property, i) => (
          <div className="p-property flexColStart" key={i}>
            <img src={property.image} alt="home" />

            <span className="secondaryText p-price">
              <span style={{ color: "orange" }}>€ </span>
              <span>{property.price}</span>
            </span>

            <span className="primaryText">Costa May</span>
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
