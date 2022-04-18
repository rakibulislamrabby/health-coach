import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Service = (props) => {
    const { id, name, price, img, description } = props.service;

    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>Fee: ${price}</p>
                    <p className="card-text">{description}</p>
                    <Link to="/checkout"><Button className="btn btn-success">Appoinment Now</Button></Link>

                </div>
            </div>
        </div>
    );
};

export default Service;