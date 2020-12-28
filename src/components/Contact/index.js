import "./contact.css"


function Contact(props) {
  return (
    <main className="contact-page">
      <h1>Contact Us</h1>
      <section className="contact-info">
        <section className="phone-number">
          <h2>Phone Number</h2>
          <p>(714) 852-3650</p>
        </section>
        <section className="hours-of-operation">
          <h2>Hours of Operation</h2>
          <p>Monday - Sunday</p>
          <p>8am - 3pm</p>
        </section>
      </section>
      <section className="address">
        <h2>Come Visit Us!</h2>
        <iframe title="chevita's juice and bagels location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.4834773503026!2d-117.87124618479288!3d33.748170280689784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd911d3f49e81%3A0x95a1f369d22a8b3c!2sChevita&#39;s%20Juice%20%26%20Bagels!5e0!3m2!1sen!2sus!4v1609192593088!5m2!1sen!2sus">
        </iframe>
      </section>
    </main>
  )
}

export default Contact;
