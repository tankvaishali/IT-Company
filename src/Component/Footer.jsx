import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa6";
function Footer() {
  return (
    <>
      <div className="footer py-3">
        <div className="container py-4">
          <div className="row g-2 w-100 pt-3">
            <div className="col-12 col-lg-3 text-white" data-aos="zoom-in" data-aos-delay="50"
    data-aos-duration="1500">
              <div className="fs-1">
                <img src="" alt=""  />
                Logo
              </div>
              <div className="py-2 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus ipsa laborum sed quisquam reiciendis itaque dolores
                voluptatibus animi? Maxime, architecto?
              </div>
              <div className="d-flex fs-4 my-2">
                <div className="footericon text-center p-2 mx-1 ms-0 pt-0 ">
                  <FaFacebookF />
                </div>
                <div className="footericon text-center p-2 mx-1 pt-0 ">
                  <FaInstagram />
                </div>
                <div className="footericon text-center p-2 mx-1 pt-0 ">
                  <FaLinkedinIn />
                </div>
                <div className="footericon text-center p-2 mx-1 pt-0 ">
                  <FaTwitter />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-2 text-white ps-0 ps-lg-5" data-aos="zoom-in" data-aos-delay="50"
    data-aos-duration="1500">
              <div className="fs-3 fs-lg-2 whyhead p-1 ">Link</div>
          
              <div className="selectlink p-1 ps-0 mt-2">
                <Link to={"/"} className="nav-link pera"><MdKeyboardArrowRight /> Home </Link>
              </div>
              <div className="selectlink p-1 ps-0"> 
                <Link to={"/Companypage"} className="nav-link pera"><MdKeyboardArrowRight /> Company</Link>
              </div>
              <div className="selectlink p-1 ps-0"> 
                <Link to={"/Capabilitypage"} className="nav-link pera"><MdKeyboardArrowRight /> Capability</Link>
              </div>
              <div className="selectlink p-1 ps-0">
                <Link to={"/Portfoliopage"} className="nav-link pera"><MdKeyboardArrowRight /> Portfolio</Link>
              </div>
              <div className="selectlink p-1 ps-0">
                <Link to={"/Contactus"} className="nav-link pera"><MdKeyboardArrowRight /> Contact us</Link>
              </div>
            
            </div>
            <div className="col-12 col-lg-4 text-white ps-0 ps-lg-5" data-aos="zoom-in" data-aos-delay="50"
    data-aos-duration="1500">
              <div className="fs-3 fs-lg-2 whyhead p-1">Services</div>
              <div className="selectlink p-1 ps-0 mt-2">
                <Link to={"/Capabilitypage"} className="nav-link pera"><MdKeyboardArrowRight /> Custom Software Development</Link>
              </div>
              <div className="selectlink p-1 ps-0">      
                <Link to={"/Capabilitypage"} className="nav-link pera"> <MdKeyboardArrowRight /> Web Application Development</Link>
              </div>
              <div className="selectlink p-1 ps-0">              
                <Link to={"/Capabilitypage"} className="nav-link pera"> <MdKeyboardArrowRight /> SaaS Development</Link>
              </div>
              <div className="selectlink p-1 ps-0">             
                <Link to={"/Capabilitypage"} className="nav-link pera">  <MdKeyboardArrowRight /> eCommerce Development</Link>
              </div>
              <div className="selectlink p-1 ps-0">             
                <Link to={"/Capabilitypage"} className="nav-link pera">   <MdKeyboardArrowRight /> Payment Gateway Integrationt</Link>
              </div>
              <div className="selectlink p-1 ps-0"> 
                <Link to={"/Capabilitypage"} className="nav-link pera"><MdKeyboardArrowRight /> Mobile App Development</Link>
              </div>
            </div>
            <div className="col-12 col-lg-3 text-white" data-aos="zoom-in" data-aos-delay="50"
    data-aos-duration="1500">
              <div className="fs-3 fs-lg-2 whyhead p-1 ">Contact Us</div>
              <div className=" p-1 ps-0 mt-4 border-bottom border-top border-secondary py-3">
              <FaLocationDot className="fs-4 fs-lg-3 pera"/> 1212,Lorem ipsum dolor sit amet.
              </div>
              <div className="footercontact p-1 ps-0 pt-3 border-bottom border-secondary py-3">
              <IoCallSharp className="fs-4 fs-lg-3 pera fticon"/> +1111 222 332
              </div>
              <div className="footercontact p-1 ps-0 border-bottom border-secondary py-3">
              <IoIosMail className="fs-4 fs-lg-3 pera fticon"/> company@example.com
              </div>
            </div>
          </div>
        </div>
        {/* <div className="">
          <img src={require("../assets/image/waved-removebg-preview.png")} alt="" className="img-fluid w-100 h-25" />
        </div> */}
      </div>

    
    </>
  );
}

export default Footer;
