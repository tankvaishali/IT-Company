import React from 'react'
import Heading from './Heading'

function PortfolioWork() {
    let developmentdata=[
        {
          img:require("../assets/image/webdesign.jpg"),
          development:"Web Development",
          work:"Web Design",
          Pera:"Web design involves creating the visual elements and layout of a website, designs into a functional website using programming languages like HTML, CSS, JavaScript, React Js etc..."
        },
        {
          img:require("../assets/image/ecomm.png"),
          development:"Web Development",
          work:"E-Commerce Web",
          Pera:"E commerce is the process of buying and selling goods and services online. like Amazon, Flipkart, Snapdeal, and Myntra etc. also strong hold india market building by web developers."
        },
        {
          img:require("../assets/image/webdevelop.jpg"),
          development:"Web Development",
          work:"Search Engine Optomization",
          Pera:"The science of improving a website to increase its visibility when people search for products or services.The more visibility a website has on search engines, the more likely it is that brand captures business."
        },
        {
            img:require("../assets/image/softwaredev.jpg"),
            development:"Software Development",
            work:"API",
            Pera:"API stands for Application Programming Interface.interface can be thought of as contract of service between two applications. This  defines how the two communicate with each other using requests and responses."
          },
        {
          img:require("../assets/image/course-3.jpg"),
          development:"Software Development",
          work:"IT Consultancy",
          Pera:"IT consulting services are important because they play a vital role in businesses by covering the management, implementation, deployment, and maintenance of an IT infrastructure."
        },      
      ]
  return (
   <>
    <div className='container py-5  pt-5'>
<Heading headingtittle={"Our Works"} headingpera={"A software company is a company whose primary products are various forms of software, software technology, distribution, and software product development."}/> 
<div className='row g-4 m-0 py-5 pt-2 w-100'>
{
  developmentdata?.map((x,i)=>{
    return(
      <>
      <div className='col-12 col-md-6 col-lg-4 py-2' key={i} div data-aos="zoom-in" data-aos-delay="50"
    data-aos-duration="1800">
  <div className='card h-100 workimage border-0 shadow rounded'>
   <div className='zoom_img overflow-hidden rounded-top'>
   <img src={x.img} alt="" className='img-fluid'/>
   </div>
   <div className='p-3'>
   <div className='text-white p-2 fw-medium text-start webdev px-3 my-2'>{x.development}</div>
    <div className='fw-bold fs-5 py-2'>{x.work}</div>
    <div className='pera text-secondary pb-1'>{x.Pera}</div>
   </div>
  </div>
</div>
      </>
    )
  })
}
</div>
    </div>

   </>
  )
}

export default PortfolioWork