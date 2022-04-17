import React from 'react';
import bg from "../../images/aboutMe/bg.png"

const AboutMe = () => {
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-lg-8 mt-5">
                    <h2 className='fw-bold'> Hi I'm <span className='text-success fs-1 fw-bold'>Md Rakibul Islam</span></h2>
                    <p>I’m a passionate web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript. And Spacially I practice and learn Javascript Library React.js. At this time I do well learn in HTML, CSS, and also CSS Library BOOTSTRAP and TAILWIND CSS. I build websites that delight and inform.</p>
                    <p>My home district is  Kushtia. I passed Diploma in Computer Department at Jhenaidah Polytechnic in 2020. And then I'm doing  BSc in Computer Science and Engineering department at the Green University of Bangladesh. </p>
                    <p>Now my first goal is to build myself as a very good at Programming Logic. After that, when I become proficient in these, I will get a job in a good company in the country or abroad. The main purpose of the job is to make me better and gain more knowledge. I want to work for a long time. And when I think I can build a software company, I want to start a company. The rest is God's will.</p>
                </div>
                <div className="col-lg-4">
                    <img style={{ width: "400px" }} src={bg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;