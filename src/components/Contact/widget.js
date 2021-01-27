import "./widget.css"
import { contactText } from "../messages/contact";

export default function ContactWidget({lang}) {
  const widgetText = contactText.contactWidget[lang];
  const headerText = widgetText.header;
  const bodyText = widgetText.body;
  return (
    <section className="contact-widget">
      <div className="contact-header">
        <h2>{headerText[0]}</h2>
        <div className="divider"></div>
        <h2>{headerText[1]}</h2>
        <div className="divider"></div>
        <h2>{headerText[2]}</h2>
      </div>
      <div className="contact-info-wrapper">
        <div className="contact-info">
          <h3>{bodyText[0]}</h3>
          <p>(714) 852-3650</p>
          <p>209 W 4th Street, Santa Ana</p>
        </div>
        <div className="hours">
          <h3>{bodyText[1]}</h3>
          <p>{bodyText[2]}</p>
          <p>8am - 3pm</p>
        </div>
      </div>
      <div className="map-frame">
        <div className="map">
          <iframe title="chevita's juice and bagels location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.4834773503026!2d-117.87124618479288!3d33.748170280689784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd911d3f49e81%3A0x95a1f369d22a8b3c!2sChevita&#39;s%20Juice%20%26%20Bagels!5e0!3m2!1sen!2sus!4v1609192593088!5m2!1sen!2sus">
          </iframe>
        </div>
      </div>
    </section>
  )
}
