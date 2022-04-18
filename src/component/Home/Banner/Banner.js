import React from 'react';
import "./Banner.css"
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
    );
};

export default Banner;