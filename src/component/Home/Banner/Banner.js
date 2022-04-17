import React from 'react';
import "./Banner.css"
import { Carousel } from 'react-bootstrap';
import banner1 from "../../../images/banner/011.jpg"
import banner2 from "../../../images/banner/022.jpg"
import banner3 from "../../../images/banner/033.jpg"
import bg from "../../../images/banner/bg1.jpg"

const Banner = () => {
    return (
        <div className='container mt-5'>
            <div className="row ">
                <div className="col-lg-8 mt-5">
                    <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, non.</h2>
                </div>
                <div className="col-lg-4">
                    <img className='rounded' style={{ width: "300px" }} src={bg} alt="" />
                </div>
            </div>
        </div>
        // <Carousel>
        //     <Carousel.Item>
        //         <img
        //             className="d-block w-100"
        //             src={banner3}
        //             alt="First slide"
        //         />
        //         <Carousel.Caption>
        //             <h3>First slide label</h3>
        //             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img
        //             className="d-block w-100"
        //             src={banner2}
        //             alt="Second slide"
        //         />

        //         <Carousel.Caption>
        //             <h3>Second slide label</h3>
        //             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img
        //             className="d-block w-100"
        //             src={banner3}
        //             alt="Third slide"
        //         />

        //         <Carousel.Caption>
        //             <h3>Third slide label</h3>
        //             <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        // </Carousel>
    );
};

export default Banner;