import React from "react";
import { FaCity } from "react-icons/fa";
import { GrOptimize } from "react-icons/gr";
import { TbHeartHandshake } from "react-icons/tb";


function Comp3Why() {
    
  let differentdata = [
    {
      icons: <FaCity />,
      tittle: "Our Company History",
      pera: "If we want users to like our software, we should design it to behave like a likable person.",
    },
    {
      icons: <GrOptimize />,
      tittle: "Our Success Mission",
      pera: "We Delivering innovative and reliable solutions to meet our client's needs with utmost quality and unwavering ethics.",
    },
    {
      icons:<TbHeartHandshake />,
      tittle: "Our Future Plan",
      pera: "Our Predictions for the future of software development paramount - technical program management and our company to Become Standard. ",
    },
  ];

  return (
    <>
      <div className="container py-5">
        <div className="row pt-4 g-4 ">
          <div className="col-12 col-lg-6 pt-2">

  <div className="h-100"  data-aos="zoom-in" data-aos-delay="50"
    data-aos-duration="1500">
  <img src={require("../assets/image/why002.jpg")} class="img-fluid object-fit-cover h-100"  alt="..."/>
  </div>

          </div>
          <div className="col-12 col-lg-6 h-100" data-aos="zoom-in" data-aos-delay="50"
    data-aos-duration="1500">
         <div className="h-100">
             <div className="text-start whyhead mb-4">Why We Are Different?</div>
          {
            differentdata?.map((x,i)=>{
                return(
                    <>
                      <div className="row iconhovers" key={i} >
              <div className=" col-1 iconcolor">
                {x.icons}
              </div>
              <div className="col-11 pt-1 ps-4 ">
                <div className="pt-1 fontstyles">{x.tittle}</div>
                <p className="text-secondary pera">
                {x.pera}
                </p>
              </div>
            </div>
                    </>
                )
            })
          }
         </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comp3Why;
