import React, { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("Services.json")
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <h2 className='text-info text-center mt-5'> Services</h2>
            <div className='row row-cols-1   g-4'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;