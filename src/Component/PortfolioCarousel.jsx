import React from 'react';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
function PortfolioCarousel() {
 
  return (
    <>

    <div className='prtflcarousel text-white'>
    <div id="carouselExampleIndicators" className="carousel slide h-100 ">
  <div className="carousel-indicators pb-2">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner text-center py-5 h-100 d-flex align-content-center align-items-center  w-100">
  <div className="carousel-item active">
    <div className="d-block w-75  m-auto">
        <div className='imgmanage m-auto p-0 px-lg-5 py-1 py-lg-3'>
            <img src={require("../assets/image/team-1.jpg")} alt=""  className='img-fluid rounded-circle h-100 w-100'/>
        </div>
       <p className='pb-2 w-75 m-auto pera'>This company projects and their project management reflects the excellence of a larger company. their team delivers high-quality results, attentive service, and resonable pricing.they found better solutions than were given to them, and with that alongside their excellent ability to comunication, they made our product better, faster, which resulted in customers becoming happier sooner.</p>
       <p className=' pb-4 fs-4 fw-medium '>Mahsklkj Jnbsjs</p>
      </div>
    </div>
    <div className="carousel-item">
    <div className="d-block w-75 m-auto">
        <div className='imgmanage m-auto p-0 px-lg-5 py-1 py-lg-3'>
            <img src={require("../assets/image/team-2.jpg")} alt=""  className='img-fluid rounded-circle h-100 w-100'/>
        </div>
       <p className='pb-2 pera w-75 m-auto '> Also, their communication skill  were great; it never felt like a long- distance project. it feltlike this comapny was  working next door beacuse their project manager was always keeping me updated. i had good project manager who made it seem like they weren't anoverseas company.they also helped our business concept greatly.</p>
       <p className=' pb-4 fs-4 fw-medium'>Cyzuca Jnbsjsa</p>
      </div>
    </div>
    <div className="carousel-item">
    <div className="d-block w-75  m-auto">
        <div className='imgmanage m-auto p-0 px-lg-5 py-1 py-lg-3'>
            <img src={require("../assets/image/team-3.jpg")} alt=""  class='img-fluid rounded-circle h-100 w-100'/>
        </div>
       <p className='pb-2 pera w-75 m-auto'> “This company demonstrates a strong work ethic and a commitment to the team. He actively collaborates with colleagues and willingly offers his support in any way needed. this company ability to give and receive constructive criticism has helped the team maintain a healthy working relationship. leader respects and values the opinions of his team members.  </p>
       <p className=' pb-4  fs-4 fw-medium'>John Jnbsjs</p>
      </div>
    </div>
  </div>
<button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="rounded-circle carouselicon" aria-hidden="true"><IoIosArrowDropleftCircle />
</span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="rounded-circle carouselicon" aria-hidden="true"><IoIosArrowDroprightCircle /></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
   
    </>
  )
}

export default PortfolioCarousel