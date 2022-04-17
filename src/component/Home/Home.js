import React from 'react';
import { Carousel } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Services from './Services/Services';
import Banner from './Banner/Banner';
import CustomerReview from './CustomerReview/CustomerReview';
import Service from './Service/Service';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;