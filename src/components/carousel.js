import React from 'react'
import './carousel.css'

class Carousel extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			hrefString: '',
			hrefIntLeft: 1,
			hrefIntRight: 1
		}
		this.updateCarouselHref = this.updateCarouselHref.bind(this)
	}

	updateCarouselHref(event) {
		if (event.target.id === 'right') {
			let newHrefIntRight = this.state.hrefIntRight
			newHrefIntRight++
			let newHrefIntString = `#carousel__slide${newHrefIntRight}`
			this.setState({
				hrefIntString: newHrefIntString,
				hrefIntRight: newHrefIntRight
			});
		} else {
			let newHrefIntLeft = this.state.hrefIntLeft;
			newHrefIntLeft--;
			let newHrefIntString = `#carousel__slide${newHrefIntLeft}`;
			this.setState({
				hrefIntString: newHrefIntString,
				hrefIntLeft: newHrefIntLeft
			});
		};
	}

	render() {
			console.log(this.state.hrefRight)
			return (
				<>
					<div className="row flex justify-content-center carousel-wrapper text-white ">
						<section className="carousel mt-5 w-50 h-75" aria-label="Gallery">
							<ol className="carousel__viewport align">
								<li id="carousel__slide1" className="carousel__slide">
									<div>
										<img src="/images/san1.jpg" alt=""></img>
										<div className="carousel__snapper"></div>
									</div>
									<div className="carousel__snapper"></div>
								</li>
								<li id="carousel__slide2" className="carousel__slide">
									<div>
										<img src="/images/san2.jpg" alt="1"></img>
										<div className="carousel__snapper"></div>
									</div>
									<div className="carousel__snapper"></div>
								</li>
								<li id="carousel__slide3" className="carousel__slide">
									<div>
										<img src="/images/san1.jpg" alt="2"></img>
										<div className="carousel__snapper"></div>
									</div>
									<div className="carousel__snapper"></div>
								</li>
								<li id="carousel__slide4" className="carousel__slide">
									<div>
										<img src="/images/san1.jpg" alt="3"></img>
										<div className="carousel__snapper"></div>
									</div>
									<div className="carousel__snapper"></div>
								</li>
								<li id="carousel__slide5" className="carousel__slide">
									<div>
										<img src="/images/san1.jpg" alt="4"></img>
										<div className="carousel__snapper"></div>
									</div>
									<div className="carousel__snapper"></div>
								</li>
								<li id="carousel__slide6" className="carousel__slide">
									<div>
										<img src="/images/san2.jpg" alt="5"></img>
										<div className="carousel__snapper"></div>
									</div>
									<div className="carousel__snapper"></div>
								</li>
								<li id="carousel__slide7" className="carousel__slide">
									<div>
										<img src="/images/san2.jpg" alt="6"></img>
										<div className="carousel__snapper"></div>
									</div>
									<div className="carousel__snapper"></div>
								</li>
							</ol>
							<aside className="carousel__navigation shadowed mb-5">
								<ol className="carousel__navigation-list pointer">
									<li className="carousel__navigation-item">
										<a
											id="left"
											onClick={this.updateCarouselHref}
											href={this.state.hrefString}
											className="carousel__navigation-button"
										>
											Go to slide 1
										</a>
									</li>
									<li className="carousel__navigation-item">
										<a
											id="right"
											onClick={this.updateCarouselHref}
											href={this.state.hrefString}
											className="carousel__navigation-button"
										>
											Go to slide 7
										</a>
									</li>
								</ol>
							</aside>
						</section>
					</div>
				</>
			);
		}
	}


export default Carousel;
