import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../Carousel.css'

let styles={
margin:'auto',
width:'400px'
}
function CarouselApp(){
    return(
        <div style={styles}>
            <Carousel>
            <div>
                    <img src="image1.jpeg" alt=""></img>
                    <p className="legend">fruit 1</p>
                </div>
                <div>
                    <img src="image2.jpeg" alt=""></img>
                    <p className="legend">fruit 2</p>
                </div>
                <div>
                    <img src="image3.jpeg" alt=""></img>
                    <p className="legend">fruit 3</p>
                </div>
                <div>
                    <img src="image5.jpeg" alt=""></img>
                    <p className="legend">fruit 5</p>
                </div>
                <div>
                    <img src="image6.jpeg" alt=""></img>
                    <p className="legend">fruit 6</p>
                </div>
                <div>
                    <img src="image7.jpeg" alt=""></img>
                    <p className="legend">fruit 7</p>
                </div>
                <div>
                    <img src="image8.jpeg" alt=""></img>
                    <p className="legend">fruit 8</p>
                </div>
                <div>
                    <img src="image9.jpeg" alt=""></img>
                    <p className="legend">fruit 9</p>
                </div>
                <div>
                    <img src="image10.jpeg" alt=""></img>
                    <p className="legend">fruit 10</p>
                </div>
            </Carousel>
        </div>

    );

}
export default CarouselApp;