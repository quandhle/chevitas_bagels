import React, {Fragment} from 'react';
import "./page.css"
import HeroImage from "../Hero-Image";
import contactImage from "../images/contact-us-background-1.jpg";

export default function Page(props) {
  const heroStyles = {
    header: {
      position: "fixed",
      top: 0,
      right: 0,
      left: 0,
      zIndex: "-1000",
      backgroundImage: `url(${contactImage})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      opacity: 0.30
    }
  }
  return (
    <Fragment>
      <HeroImage heroStyles={heroStyles}/>
      <main className="contact-page">
        <section className="contact-info">
          <div className="phone">
            <h2>Phone Number</h2>
            <p>(714) 852-3650</p>
          </div>
          <div className="hours">
            <h2>Hours of Operation</h2>
            <p>Monday - Sunday</p>
            <p>8am - 3pm</p>
          </div>
          <div className="address">
            <h2>Come Visit Us!</h2>
            <iframe title="chevita's juice and bagels location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.4834773503026!2d-117.87124618479288!3d33.748170280689784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd911d3f49e81%3A0x95a1f369d22a8b3c!2sChevita&#39;s%20Juice%20%26%20Bagels!5e0!3m2!1sen!2sus!4v1609192593088!5m2!1sen!2sus">
            </iframe>
          </div>
        </section>
      </main>
    </Fragment>
  )
}
