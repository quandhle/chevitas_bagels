import React from 'react'
import './carousel.css'

class Carousel extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			hrefString: '',
			hrefInt: 1
		}
		this.updateCarouselHref = this.updateCarouselHref.bind(this)
	}

	updateCarouselHref(event) {
		if (event.target.id === 'right' && this.state.hrefInt === 7) {
			let newHrefInt = 1
			let newHrefString = `#carousel__slide${newHrefInt}`;
			this.setState({
				hrefString: newHrefString,
				hrefInt: newHrefInt
			});
		} else if (event.target.id === 'right') {
			let newHrefInt = this.state.hrefInt
			newHrefInt++
			let newHrefString = `#carousel__slide${newHrefInt}`
			this.setState({
				hrefString: newHrefString,
				hrefInt: newHrefInt
			});
		} else if (event.target.id === 'left' && this.state.hrefInt === 1) {
			let newHrefInt = 7
			let newHrefString = `#carousel__slide${newHrefInt}`;
			this.setState({
				hrefString: newHrefString,
				hrefInt: newHrefInt
			});
		} else {
			let newHrefInt = this.state.hrefInt;
			newHrefInt--;
			let newHrefString = `#carousel__slide${newHrefInt}`;
			this.setState({
				hrefString: newHrefString,
				hrefInt: newHrefInt
			});
		};
	}

	render() {
		return (
			<>
				<div className="row flex justify-content-center carousel-wrapper text-white ">
					<section className="carousel mt-5" aria-label="Gallery">
						<div className="carousel__viewport align">
							<li id="carousel__slide1" className="carousel__slide">
								<div>
									<img className="image1"src="/images/san1.jpg" alt=""></img>
									<div className="carousel__snapper"></div>
								</div>
								<div className="carousel__snapper"></div>
							</li>
							<li id="carousel__slide2" className="carousel__slide">
								<div>
									<img className="image1"src="/images/carousel1.jpg" alt="1"></img>
									<div className="carousel__snapper"></div>
								</div>
								<div className="carousel__snapper"></div>
							</li>
							<li id="carousel__slide3" className="carousel__slide">
								<div>
									<img className="image1"src="/images/carousel2.jpg" alt="2"></img>
									<div className="carousel__snapper"></div>
								</div>
								<div className="carousel__snapper"></div>
							</li>
							<li id="carousel__slide4" className="carousel__slide">
								<div>
									<img className="image1"src="/images/carousel3.jpg" alt="3"></img>
									<div className="carousel__snapper"></div>
								</div>
								<div className="carousel__snapper"></div>
							</li>
							<li id="carousel__slide5" className="carousel__slide">
								<div>
									<img className="image1"src="/images/carousel4.jpg" alt="4"></img>
									<div className="carousel__snapper"></div>
								</div>
								<div className="carousel__snapper"></div>
							</li>
							<li id="carousel__slide6" className="carousel__slide">
								<div>
									<img className="image1"src="/images/san2.jpg" alt="5"></img>
									<div className="carousel__snapper"></div>
								</div>
								<div className="carousel__snapper"></div>
							</li>
							<li id="carousel__slide7" className="carousel__slide">
								<div>
									<img className="image1"src="/images/carousel6.jpg" alt="6"></img>
									<div className="carousel__snapper"></div>
								</div>
								<div className="carousel__snapper"></div>
							</li>
						</div>
						<aside className="carousel__navigation shadowed mb-5">
							<div className="carousel__navigation-item">
								<a onClick={this.updateCarouselHref} href={this.state.hrefString}>
									<span className="material-icons" id="left">
										arrow_back_ios
									</span>
								</a>
							</div>
							<div className="carousel__navigation-item">
								<a onClick={this.updateCarouselHref} href={this.state.hrefString}>
									<span className="material-icons" id="right">
										arrow_forward_ios
									</span>
								</a>
							</div>
						</aside>
					</section>
				</div>
			</>
		);
	}
}


export default Carousel;
