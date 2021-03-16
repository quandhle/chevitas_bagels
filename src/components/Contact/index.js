import Page from "./page"
import Widget from "./widget"


const Contact = ({
  lang,
  load
}) => (
  load === 'page' ? <Page lang={lang}/> : <Widget lang={lang}/>
)

export default Contact;
