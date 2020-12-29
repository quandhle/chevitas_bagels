import "./home.css"
import Navbar from '../Navbar'
import Carousel from '../Carousel'

function Home({setView}) {
  return (
		<div className="home">
			<Carousel />
			<div className="social-media-wrapper">
				<div className="social-media">
					<span className="material-icons">facebook</span>
					<span className="material-icons">facebook</span>
					<span className="material-icons">facebook</span>
					<span className="material-icons">facebook</span>
					<span className="material-icons">facebook</span>
					<span className="material-icons">facebook</span>
				</div>
			</div>
			<div className="contact-wrapper">
				<div className="contact">
					<h1>This is the contact section</h1>
				</div>
			</div>
		</div>
  );
}

export default Home;
