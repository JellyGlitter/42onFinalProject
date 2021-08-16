import React from 'react';
import ConcultancyIcon from './Consultancy.png';
import EmergencyIcon from './Emergency.png';
import TrainingIcon from "./Training.png";
import './idea.css';

function Idea() {

    return (
    <>
        <div className="infoPage">
            <header>
                This is what we're good at
            </header>
        <div className="info">
            <div className="columnOne">
            <div className="consultancy">
                <h2>Consultancy and Support</h2>
                <p>
                    42on provides high quality Ceph consultancy. We assist organizations in designing, deploying, optimizing and upgrading Ceph clusters.
                </p>
            </div>
                <div className="consultancy_icon">
                    <img src={ConcultancyIcon} className="consultancy_icon" alt=""/>
                </div>
            </div>

            <div className="columnTwo">
            <div className="training">
                <h2>Training</h2>
                <p>
                    Ceph training at its best with 42on, based on our 8 years of experience of experience in Ceph solutions, dedication and diligence.
                </p>
            </div>
                <div className="training_icon">
                    <img src={TrainingIcon} className="training_icon" alt=""/>
                </div>
            </div>

            <div className="columnThree">
                <div className="emergency">
                    <h2>Emergency Assistance</h2>
                    <p>
                        Our Ceph experts can help you no matter what situation your data got into. With our expertise and experience we support your team protecting your data.
                    </p>
                </div>
                <div className="emergency_icon">
                    <img src={EmergencyIcon} className="emergency_icon" alt=""/>
                </div>
            </div>
        </div>
        </div>
    </>
    )
}

export default Idea;