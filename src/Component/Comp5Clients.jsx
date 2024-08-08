import React from 'react'
import Slider from 'react-slick';
import Heading from './Heading';

function Comp5Clients() {
    let carddata=[
        {
            img:require("../assets/image/team-1.jpg"),
            name:"Nashid Martis",
            proffesion:"client",
        },
        {
            img:require("../assets/image/team-2.jpg"),
            name:"Nashid Martis",
            proffesion:"client",
        },
        {
            img:require("../assets/image/team-3.jpg"),
            name:"Nashid Martis",
            proffesion:"client",
        },
        {
            img:require("../assets/image/team-4.jpg"),
            name:"Nashid Martis",
            proffesion:"client",
        },
        {
          img:require("../assets/image/team-3.jpg"),
          name:"Nashid Martis",
          proffesion:"client",
      },
    ] 
    var settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false, // Set to false to continue autoplay on hover
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
             
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
              
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
             
            }
          }
        ]
      };
  return (
    <>
    <div data-aos="zoom-in" data-aos-delay="50"
    data-aos-duration="1800">
        <Heading headingtittle={"Our Clients"} headingpera={" Our clients refers to the entity or individual who initiates or sponsors the development of a software product."}/>
    </div>
    <div className='container text-center overflow-hidden py-4 pb-5'>
        <Slider {...settings} >
{
    carddata?.map((x,i)=>{
        return(
            <>   
                
              <div className='card h-100 border-0 m-2' key={i} >
              <img src={x.img} alt="" className="img-fluid" />
    <div className='card-body'>
    <div className='fs-6 fs-lg-5 fw-bold'>{x.name}</div>
      <div className='proffesion fw-medium'>{x.proffesion}</div>
    </div>
  </div>

      </>
          )
      })
  }
  </Slider>
  </div>
</>

  )
}

export default Comp5Clients