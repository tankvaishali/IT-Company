import React from "react";
import Header from "./Header";
import { FaArrowRightLong } from "react-icons/fa6";
import Develop_Company from "./Develop_Company";
import Footer from "./Footer";
import Comp5Clients from "./Comp5Clients";
import Comp6chooseus from "./Comp6chooseus";
import Comp4technology from "./Comp4technology";
import Counter from "./Counter";
import Comp3Why from "./Comp3Why";
import HocCom from "./HocCom";
import { useNavigate } from "react-router-dom";

function HomeCom() {
  let navigate=useNavigate()

  let Develop_company=()=>{
navigate("/Capabilitypage")
  }

  let staff_augmentation=()=>{
navigate("/Companypage")
  }
  return (
    <>
      {/* <Header /> */}
      <div className="homebck_img text-start " >
   <div className="container">
   <div className="row m-0 p-0" >
      <div className="col-12 col-lg-6 d-block container p-3 py-5"  >
          <div className="tittle pt-5">
           We Design Your Business.
          </div>
          <div className="pera py-2">
         We are proffesional software engineers with more than 10 years of experience in delevring superior products.
          </div>
          <div className="py-3 pera">
          We providing best software solution, design solution and it services. We are an agile software development company committed to building and delivering digital software products. With the right technology stack, knowledge, experienced professionals, and dedicated project managers, we ensure the creation of industry-leading solutions at transparent pricing.          </div>
          <div>
            <button className=" fs-5 fw-medium my-3 px-2 px-lg-4 py-1 staff_btn rounded-1 my-1" onClick={staff_augmentation}>
              Staff Augmentation
              <span className="fw-bold ps-2">
                <FaArrowRightLong />
              </span>
            </button>
          </div>
        </div>
        <div className="col-12 col-lg-6">
<div className="p-0 pt-lg-5 ">
{/* <div className="imganimate pt-0 pt-lg-5"  data-aos="zoom-in" data-aos-delay="50"
    data-aos-duration="1800">
<img src={require("../assets/image/webjpg-removebg-preview.png")} alt="" className="img-fluid object-fit-cover" />
</div> */}
</div>
        </div>
      </div>
   </div>
      </div>
      
<Develop_Company/>
<div className="text-center pt-3"> <button className="staff_btn mb-4 p-1 p-lg-2 px-3 px-lg-5 fs-5  rounded" onClick={Develop_company}> Read More <span><FaArrowRightLong /></span></button></div>
   <Comp3Why/>
   <Counter/>
   <Comp4technology/>
   <Comp6chooseus/>
   <Comp5Clients/>
   
    </>
  );
}

export default HocCom(HomeCom);
