import Page from "./page"
import Widget from "./widget"

function Contact(props) {
  return (props.load === "page" ? <Page /> : <Widget />);
}

export default Contact;
