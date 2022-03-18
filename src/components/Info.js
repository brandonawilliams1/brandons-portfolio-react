import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Info.css'

const Info = () => {
  return (
            <div className='info-section'>

                <div className="info-about">
                    <h3>About <span>Brandon</span></h3>
                    <p className='info-about-status'>
                    Currently I am employed as a Cable Installer, I a 15 year veteren of the communications industry, my experience includes Cable television, Broadband Internet, IPoV Telephony, Wan/Lan Neworking and Fiber Optic modem setup.
                    </p>
                    <div className="info-btn">
                        <Link to='/'>More</Link>
                    </div>
                </div>


                <div className="info-content">
                <h1>Who is Brandon </h1>
                <p>Father & Husband</p>
                <p>Full-Stack Software Developer</p>
                <p>React js Programmer</p>
                <p>JavaScript Developer</p>
                <p>Cable, Phone, Internet Technician</p>
                <p>Musician</p>
                <p>15 years of experience in Cable & Internet</p>
                <p>6 months of experience in Full-Stack Web Development</p>
                <p>SQL Developer</p>
                </div>
            </div>
        );
};

export default Info;
