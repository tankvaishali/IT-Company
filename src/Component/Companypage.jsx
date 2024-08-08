import React from "react";
import HocCom from "./HocCom";
import { FaRegCheckCircle } from "react-icons/fa";
import Heading from "./Heading";
import { IoMdCheckboxOutline } from "react-icons/io";
import { FaFileInvoice } from "react-icons/fa6";
import { RiBox2Fill } from "react-icons/ri";
import { BsFillDatabaseFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { GoCheckCircleFill } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";

function Companypage() {
  let navigate = useNavigate();
  let learn_more = () => {
    navigate("/Portfoliopage");
  };
  return (
    <>
      <div className="companypage_back">
        <div
          className="d-flex justify-content-center align-content-center align-items-center headings"
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="1500"
        >
          Our Company
        </div>
      </div>
   
      <div className="aboutcompany_bck">
       
          <div className="row g-5 m-0 ">
            <div className="col-12 col-md-12 col-lg-5 p-0 p-md-2 text-center">
              <img
                src={require("../assets/image/companyabout-removebg-preview.png")}
                alt=""
                className="img-fluid h-100 w-100 object-fit-cover"
              />
            </div>
            <div className=" col-12 col-md-12 col-lg-7 ">
              <div className= "container bg-transparent py-2 h-100" data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="1800" >
              <div class="fw-bolder h1 pt-4 pb-2  whyhead">
                About Our Company ?
              </div>
              <div class="ipsum  pera py-1 fw-medium">
              Software development refers to a set of computer science activities dedicated to the process of creating, designing, deploying and supporting software.
                <p className="fs-2 pt-2 fw-bold whyhead border-0"> What We Do ?</p>
               <span className="visioncolor fs-3"><GoCheckCircleFill /></span> Identifying the need.
                <br></br>
                <span className="visioncolor fs-3"><GoCheckCircleFill /></span> Developing the software.
                <br></br>
                <span className="visioncolor fs-3"><GoCheckCircleFill /></span> Testing & quality assurance.
                <br></br>
                <span className="visioncolor fs-3"><GoCheckCircleFill /></span> Release and maintenance.
                <p className="pt-2">Our Software development company have to design, develop and
                maintain applications, frameworks or other software components
                for businesses or consumers and our clients requirements.</p>
              </div>
              
                <button
                  class="staff_btn rounded-pill p-2 px-3 px-lg-5 fw-medium mb-3"
                  onClick={learn_more}
                >
                  Learn More <span className="ps-1 fs-5"><FaArrowRightLong /></span>
                </button>  
              </div>
            </div>
          </div>
        </div>

<div className="container py-5">
<div className="py-2" data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="1500">
<Heading
            headingtittle={"We Provide Our Best"}
            headingpera={
              "Our best and important steps in developing software is testing and integration, planning, analysis, maintenance, design, implementation."
            }
            />
</div>
              <div className="row m-0 p-0 pb-5 g-4">
    <div className="col-12 col-lg-4" data-aos="flip-left"
                  data-aos-delay="50"
                  data-aos-duration="1800">
    <div class="card1 text-center pt-4 h-100 shadow" >
                                <div class="iconbg rounded-circle m-auto fs-1 d-flex align-items-center justify-content-center">
                                <FaFileInvoice />
                                </div>
                                <div class="content fs-4 pt-3 p-3">
                                   Our Company Projects
                                </div>
                                <div class="text-secondary p-3 pt-0 pb-4 pera">
                                Our projects start from small, simple applications to large,we are do  the projects with an outsourcing companies.
                                </div>
                            </div>
    </div>
    <div className="col-12 col-lg-4" data-aos="flip-left"
                  data-aos-delay="50"
                  data-aos-duration="1800">
    <div class="card1 text-center pt-4 h-100 shadow" >
                                <div class="iconbg rounded-circle m-auto fs-1 d-flex align-items-center justify-content-center">
                                <RiBox2Fill />
                                </div>
                                <div class="content fs-4 pt-3 p-3">
                                Our Company Development
                                </div>
                                <div class="text-secondary p-3 pt-0 pb-4 pera">
                                Our aim is to build software or software applications that include identifying a need, designing the software and coding it.
                                </div>
                            </div>
    </div>
    <div className="col-12 col-lg-4" data-aos="flip-left"
                  data-aos-delay="50"
                  data-aos-duration="1800">
    <div class="card1 text-center pt-4 h-100 shadow" >
                                <div class="iconbg rounded-circle m-auto fs-1 d-flex align-items-center justify-content-center">
                                <BsFillDatabaseFill />
                                </div>
                                <div class="content fs-4 pt-3 p-3">
                                    Our Company Services
                                </div>
                                <div class="text-secondary p-3 pt-0 pb-4 pera">
                                Our company services specific activities such as gathering requirements prototyping, modification, testing and maintenance.
                                </div>
                            </div>
    </div>
  </div>
</div>
 
      <div className="py-5 pt-2">
        <div
          className="py-1"
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="1800"
        >
          <Heading
            headingtittle={"Our Vision"}
            headingpera={
              "Our Vision is to be a leading software development company in IT sector and progress in our current position in market. We know that Customer's growth is our growth."
            }
          />
        </div>
        <div className="container py-4">
          <div className="row g-3 m-0">
            <div
              className="col-12 col-lg-6"
              data-aos="zoom-in"
              data-aos-delay="50"
              data-aos-duration="1800"
            >
              <div className="h-100">
                <div className="fs-3 fw-bold pera">
                  what is quality of Software Development Services India?
                </div>
                <div className="pera fst-italic text-secondary py-2 ">
                  Let's see the characteristics that a website must have in
                  order to be considered quality and professional :-
                </div>
                <div className="pt-2 pera">
                 
                  <span className="visioncolor fs-4 pe-1">
                    <FaRegCheckCircle />
                  </span>
                   In any development project, meetings are always held to
                  develop an initial analysis, gathering all the requirements
                  and objectives of the web that the client wants.
                </div>
                <div className="pt-2 pera">
                  
                  <span className="visioncolor fs-4 pe-1">
                    <FaRegCheckCircle />
                  </span>
                   At this point you should have a proactive ideas, proposing
                  functionalities that could be interesting.
                </div>
                <div className="pt-2 pera">
                  
                  <span className="visioncolor fs-4 pe-1">
                    <FaRegCheckCircle />
                  </span>
                  Alternative thoughts that we know can generate good results.
                </div>
                <div className="pt-3 pera">
                  
                  We commit to design, develop, and deliver complex smart
                  solutions on time and on budget using a creative and
                  result-oriented approach.
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="1500"
                className=" h-100"
              >
                <img
                  src={require("../assets/image/slider.jpg")}
                  alt=""
                  className="img-fluid h-100 object-fit-cover w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
   
      <div className="py-5 mission mt-4">
        <div
          className="py-2"
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="1800"
        >
          <Heading
            headingtittle={"Our Mission"}
            headingpera={
              " Our mission is to deliver the best possible reliable software solutions to help our clients improve IT efficiency and business profitability."
            }
          />
        </div>
        <div className="container py-3">
          <div
            className="row g-4 pb-4 pt-0 m-0"
            data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="1500"
          >
            <div className="col-12 col-lg-6 ">
              <div
                className="h-100"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="1800"
              >
                <img
                  src={require("../assets/image/ourmission2.jpg")}
                  alt=""
                  className="img-fluid object-fit-cover w-100 h-100"
                />
              </div>
            </div>
            <div className="col-12 col-lg-6 pera">
              <div
                className="h-100"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="1800"
              >
                <div className="pera">
                  Our mission is to be our customers preferred development team
                  by delivering innovative Web and Software management solutions
                  through a high-performance culture. We promote moral, win
                  business for the company, employees and our clients. like
                  Custom Software Development , Project Management , Outsourcing
                  , Consulting. A company's mission statement explains its
                  culture, beliefs, ethics, core aims, and agenda.
                </div>

                <div className="py-2">
                  <span className="visioncolor fs-4 pe-1">
                    <IoMdCheckboxOutline />
                  </span>
                  Our company's mission is the development of high-quality and
                  affordable web solutions.
                </div>
                <div className="py-2">
                  <span className="visioncolor fs-4 pe-1">
                    <IoMdCheckboxOutline />
                  </span>
                  The right frame of project management efforts.
                </div>
                <div className="py-2">
                  <span className="visioncolor fs-4 pe-1">
                    <IoMdCheckboxOutline />
                  </span>
                  We value authenticity and its connection to our mission.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HocCom(Companypage);
