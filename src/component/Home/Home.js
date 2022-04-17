import React from 'react';
import { Carousel } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Services from './Services/Services';
import Banner from './Banner/Banner';
import Service from './Service/Service';
import NeedToChoose from './NeedToChoose/NeedToChoose';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <NeedToChoose></NeedToChoose>
        </div>
    );
};

export default Home;