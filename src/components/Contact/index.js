import Page from "./page"
import Widget from "./widget"

const Contact = ({
  lang,
  load
}) => (
  load === 'page' ? <Page/> : <Widget/>
)

export default Contact;
