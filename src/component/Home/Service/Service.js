import React from 'react';
import { Button } from 'react-bootstrap';

const Service = (props) => {
    const { name, price, img, description } = props.service;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>Fee: ${price}</p>
                    <p className="card-text">{description}</p>
                    <Button href="#" className="btn btn-primary">Appoinment Now</Button>
                </div>
            </div>
        </div>
    );
};

export default Service;