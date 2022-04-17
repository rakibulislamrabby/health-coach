import React from 'react';
import "./Banner.css"
import { Carousel } from 'react-bootstrap';
import banner1 from "../../../images/banner/011.jpg"
import banner2 from "../../../images/banner/022.jpg"
import banner3 from "../../../images/banner/033.jpg"
import bg from "../../../images/banner/bg1.jpg"

const Banner = () => {
    return (
        <div className='container pt-5'>
            <div className="row ">
                <div className="col-lg-8  ">
                    <div>
                        <h2 className='Header-title'>Hey <span className='text-success fw-bold'>I am Nick Mitchell</span></h2>
                        <h2 className='Header-title'>Your Personal Health Coach</h2>
                    </div>
                    <div>
                        <p className='Header-desc'>Work towards your fitness goal with one amazing personal trainer.Evreytime Your Goal is My Goal.Suffering physically and mentally.Seeing darkness all around in depression?Can't lose weight even after trying hard to lose weight? Then hand over your health and plan to Nick Mitchell. For the Price of just one of cup coffee per week.</p>
                    </div>
                    <a href="https://en.wikipedia.org/wiki/Nick_Mitchell" target="_blank"> <button className='btn btn-success  px-4 mb-4'>Starting Journey</button></a>

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