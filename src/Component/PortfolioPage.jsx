import React from 'react';
import HocCom from './HocCom';
import PortfolioWork from './PortfolioWork';
import PortfolioCarousel from './PortfolioCarousel';
import { useNavigate } from 'react-router-dom';
import { IoCheckmarkDoneSharp } from "react-icons/io5";

function PortfolioPage() {
  let navigate=useNavigate()
  let let_talk=()=>{
navigate("/Contactus")
  }
  return (
    <>
     <div className='client_back'>
        <div className='d-flex justify-content-center align-content-center align-items-center headings' data-aos="zoom-in" data-aos-delay="50"
    data-aos-duration="1800">Our Portfolio</div>
    </div>
  <PortfolioWork/>
  <PortfolioCarousel/>
  
<div className='container py-5 h-100 mb-3'>
    <div className='whyhead py-1'>Let's Talk About Company</div>
    <div className='py-2 pera text-secondary'><span className='visioncolor fs-4'><IoCheckmarkDoneSharp /></span> Our company is software development company who end-to-end software development.</div>
    <div className='py-2 pera text-secondary'><span className='visioncolor fs-4'><IoCheckmarkDoneSharp /></span> Our company Software development company typically offer web application development services tailored to a customer's needs. These services can range from creating a custom web application from scratch to modifying an existing application to fit a customer's specific requirements better.</div>
    <div className='py-2 pera text-secondary'><span className='visioncolor fs-4'><IoCheckmarkDoneSharp /></span> If you want to connect with someone you briefly wish work on your projects via the internet, you can send them a keeping in touch email or contact , with the purpose of establishing communication with them.</div>
<button type='button' className='staff_btn p-1 px-5 fw-bold fs-5 mt-2' onClick={let_talk}>Let,s Talk</button>
</div>
    </>
  )
}

export default HocCom(PortfolioPage)