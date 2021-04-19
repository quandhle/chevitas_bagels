import React, {Fragment} from 'react';
import {Helmet} from "react-helmet";
import HeroImage from "../Hero-Image";
import {contactText} from "../messages/contact";
import "./page.css";

export default function Page({lang}) {
  const pageText = contactText.page[lang];

  return (
    <Fragment>
      <Helmet>
        <title>Chevitas Bagels - Contact us</title>
      </Helmet>
      <HeroImage page="contact"/>
      <main className="contact-page">
        <section className="contact-info">
          <div className="phone">
            <h2>{pageText[0]}</h2>
            <p>(800)-282-3484</p>
            <h2>{pageText[1]}</h2>
            <a style={{color: "#159639"}} href = "mailto: management@chevitasjuicebagels.com">management@chevitasjuicebagels.com</a>
          </div>
          <div className="hours">
            <h2>{pageText[2]}</h2>
            <p>{pageText[3]}</p>
            <p>8am - 4pm</p>
            <p>{pageText[4]}</p>
            <p>9am - 3pm</p>
          </div>
          <div className="address">
            <h2>{pageText[5]}</h2>
            <iframe title="chevita's juice and bagels location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.4834773503026!2d-117.87124618479288!3d33.748170280689784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd911d3f49e81%3A0x95a1f369d22a8b3c!2sChevita&#39;s%20Juice%20%26%20Bagels!5e0!3m2!1sen!2sus!4v1609192593088!5m2!1sen!2sus">
            </iframe>
          </div>
        </section>
      </main>
    </Fragment>
  )
}
