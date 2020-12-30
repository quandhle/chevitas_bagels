import "./home.css"
import ContactUs from "../Contact"
import Carousel from '../Carousel'

function Home({setView}) {
  return (
    <div className="home">
      <Carousel />
      <div className="social-media-wrapper-home">
        <div className="social-media-home">
          <span className="material-icons">facebook</span>
          <span className="material-icons">facebook</span>
          <span className="material-icons">facebook</span>
          <span className="material-icons">facebook</span>
          <span className="material-icons">facebook</span>
          <span className="material-icons">facebook</span>
        </div>
      </div>
      <ContactUs load="widget"/>
    </div>
  )
}

export default Home;
