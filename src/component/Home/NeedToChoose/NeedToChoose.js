import React from 'react';

const NeedToChoose = () => {
    return (
        <div id='need' className='container my-5'>
            <div>
                <h2 className='text-center text-success mb-3'>Why need health coach for fitness</h2>
                <p className='text-center mb-5'>Fitness coaches can enable you to meet your wellness objectives. They can turn into your instructor, your helper, your mentor and your companion. I am Your fitness coaches was degreed and confirmed by a certify wellness association.</p>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="card" >
                        <img src="https://fitzeous.b-cdn.net/wp-content/uploads/2018/05/cash-1.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-text text-center text-success fw-bold ">Nutrition Strategies</h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card" >
                        <img src="https://fitzeous.b-cdn.net/wp-content/uploads/2018/05/cash-2.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-text text-center text-success fw-bold ">Workout Routine</h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card" >
                        <img src="https://fitzeous.b-cdn.net/wp-content/uploads/2018/05/cash-3.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-text text-center text-success fw-bold ">Individual Support</h4>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default NeedToChoose;