import "./Contact.css";

const Contact = () => {
  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleClick() {
    console.log("action will be here soon");
  }
  return (
    <section className="c-wrapper" id="contact">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Get in Touch</span>
          <span className="primaryText">Reach out to us effortlessly</span>
          <span className="secondaryText">
            We&apos;re always prepared to assist you with top-notch services.
            <br />
            We&apos;re firm believers that a conducive living environment <br />
            enhances quality of life.
          </span>
          <div className="flexColStart c-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label className="secondaryText" htmlFor="firstName">
                  Your Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="c-input"
                  required
                />
              </div>
              <div>
                <label className="secondaryText" htmlFor="email">
                  Email Address:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="c-input"
                  required
                />
              </div>
              <div>
                <label className="secondaryText" htmlFor="message">
                  Your Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="c-textarea"
                  required
                />
              </div>
              <button type="submit" className="c-button" onClick={handleClick}>
                Send Message
              </button>
            </form>
          </div>
        </div>
        {/* right side */}
        <div className="c-right">
          <div className="image-container">
            <img
              className="contact-us-image"
              src="/contact-us.jpg"
              alt="contact"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
