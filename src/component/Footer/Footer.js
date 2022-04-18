import React from 'react';

const Footer = () => {
    return (
        <div className='container-fluid bg-success mt-5'>
            <div className="row">
                <div className="col-lg-4 mt-5 text-center text-white">
                    <p>Developer Rabby</p>
                    <p>copyright deserved &copy; 2022</p>
                </div>
                <div className="col-lg-4 text-white">
                    <h4 className='my-3 text-white'>Other Services</h4>
                    <p>- Balance Body & Mind</p>
                    <p>- Nutrition Plan</p>
                    <p>- Fitness & Performance</p>
                </div>
                <div className='col-lg-4 text-white'>
                    <h4 className='my-3'>Get in Touch</h4>
                    <p>- 54B, Tailstoi Town 5238 MT, La city, IA 522364</p>
                    <p>- +0188779657</p>
                    <p>- example@example.com</p>
                </div>
            </div>

        </div>
    );
};

export default Footer;