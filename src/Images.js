import React from 'react'
import './Images.css';
import { Carousel } from 'react-bootstrap';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function Images() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="carousel_image"
                        src="https://m.media-amazon.com/images/I/61ujAzankBL._SX1500_.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel_image"
                        src="https://m.media-amazon.com/images/I/61STk08CFwL._SX3000_.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel_image"
                        src="https://m.media-amazon.com/images/I/61qAWP73IFL._SX3000_.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel_image"
                        src="https://m.media-amazon.com/images/I/61ikk2EFK4L._SX3000_.jpg"
                        alt="Fourth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel_image"
                        src="https://m.media-amazon.com/images/I/61Bi5iGOLnL._SX3000_.jpg"
                        alt="Fifth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel_image"
                        src="https://m.media-amazon.com/images/I/61WDjJ73VTL._SX3000_.jpg"
                        alt="Fifth slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Images
