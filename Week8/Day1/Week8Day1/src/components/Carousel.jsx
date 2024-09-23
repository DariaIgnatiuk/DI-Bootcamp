import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src='../../public/images/HongKong.jpg'/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="../../public/images/Macao.webp" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="../../public/images/Japan.webp" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="../../public/images/LasVegas.webp" />
                    <p className="legend">Legend 4</p>
                </div>
            </Carousel>
        );
    }
};
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

export default DemoCarousel;