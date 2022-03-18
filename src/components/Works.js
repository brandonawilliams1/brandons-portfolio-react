import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import WorksCard from './WorksCard'
import Card from "@material-ui/core/Card";

import './styles/Works.css';

// import waveImg from "./wave.png";


const Works = () => {
  return (
        <>
        <div className='Works'>
            <Header />
        </div>
        <div className='workscard'>
        <WorksCard />
        </div>    
        <div className='workscard'>
        <WorksCard />
        </div>    
            
        </>

        
    );
};

export default Works;
