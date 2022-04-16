import React from 'react';
import { Carousel } from 'react-bootstrap';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import Service from './Service/Service';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;