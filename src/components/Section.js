import React,{useState} from 'react';
import './styles/Section.css'
import { Link } from 'react-router-dom';
import Modal from './Modal';

const Section = () => {

  const [modalActive,setModalActive] = useState(false)

  const showModal = () => {
    setModalActive(!modalActive)
  }

  return (
    <div className='main'>


      <div>
        <h1 className='main-header'>Hey my name is <span>Brandon Williams</span> </h1>
        <p className='main-status'>I am currently A studen at NorthWestern College's bootcamp for Full-Stack Web Development with a focus on the MERN Stack, Eager to learn, and easily coachable, looking to change career paths. I work well in teams or independently, my intention is to become a senior developer and continue to grow in my new skillset. Becoming a web developer is a personal goal as well as a perfessional one. </p>
        <div className='main-btn'>
          <Link onClick={showModal} to='/'>see work</Link>
        </div>

        {modalActive && <Modal showModal={showModal} />}
      </div>

    </div>
  )
    ;
};

export default Section;
