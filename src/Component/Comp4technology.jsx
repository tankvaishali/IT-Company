import React from "react";
import Heading from "./Heading";
import { FaCheckDouble } from "react-icons/fa";

function Comp4technology() {
  return (
    <div className="py-5">
      <div  data-aos="zoom-in" data-aos-delay="50"
    data-aos-duration="1500">
        <Heading
          headingtittle={"Software Development Technologies"}
          headingpera={
            "The purpose of software technologies is to control complexity. with the help of different languages, framework and libraries etc..."
          }
        />
      </div>

      <div class="container py-5 ">
        <div className="row g-2">
          <div className="col-sm-12 col-md-5 col-lg-5 pe-0 pe-lg-4 h-100">
            <ul class="nav nav-pills d-block h-100" id="pills-tab" role="tablist">
              <li class="nav-item shadow rounded " role="presentation"  data-aos="flip-left"
                  data-aos-delay="50"
                  data-aos-duration="1500">
                <button
                  class="nav-link active text-start "
                  id="pills-foruntend-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-foruntend"
                  type="button"
                  role="tab"
                  aria-controls="pills-foruntend"
                  aria-selected="true"
                 
                >
                  <p className="fs-3 fw-bold portfont pt-2">
                    <span className="pe-2">
                      <FaCheckDouble />
                    </span>
                     Frontend
                  </p>
                  <p className="prtflpera ps-2 pera">
                  The development of the graphical user interface of a website, through the use of HTML, CSS, JavaScript, React Js etc., so that users can view and interact with that website.              </p>
                </button>
              </li>
              <li class="nav-item mt-3 shadow rounded h-100" role="presentation"  data-aos="flip-left"
                  data-aos-delay="50"
                  data-aos-duration="1500">
                <button
                  class="nav-link text-start"
                  id="pills-backend-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-backend"
                  type="button"
                  role="tab"
                  aria-controls="pills-backend "
                  aria-selected="false"
                >
                  <p className="fs-3 fw-bold portfont pt-2">
                    <span className="pe-2">
                      <FaCheckDouble />
                    </span>
                    Backend
                  </p>
                  <p className="prtflpera ps-2 pera">
               Back-end ensure the website performs correctly, focusing on databases, back-end logic, application programming interface (APIs), architecture, and servers.
                  </p>
                </button>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-7 col-lg-7 shadow rounded">
            <div class="tab-content h-100" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-foruntend"
                role="tabpanel"
                aria-labelledby="pills-foruntend-tab"
                tabindex="0"
              >
                <div class="row row-cols-2 row-cols-lg-3 m-0 g-5 py-3 pt-1">
                  <div
                    class="col h-100"
                    data-aos="zoom-in"
                    data-aos-delay="50"
                    data-aos-duration="1500"
                  >
                    <div class="card h-100 border-0 ">
                      <img
                        src={require("../assets/image/1631110818-logo-react-js.png")}
                        class="prtimg card-img-top img-fluid"
                        alt="..."
                      />
                    </div>
                  </div>
                  <div
                    class="col"
                    data-aos="zoom-in"
                    data-aos-delay="50"
                    data-aos-duration="1500"
                  >
                    <div class="card h-100 border-0 ">
                      <img
                        src={require("../assets/image/WordPress-Logo-1.png")}
                        class="prtimg card-img-top img-fluid"
                        alt="..."
                      />
                    </div>
                  </div>
                  <div
                    class="col"
                    data-aos="zoom-in"
                    data-aos-delay="50"
                    data-aos-duration="1500"
                  >
                    <div class="card h-100 border-0 ">
                      <img
                        src={require("../assets/image/Vuejs-logo.png")}
                        class="prtimg card-img-top img-fluid"
                        alt="..."
                      />
                    </div>
                  </div>
                  <div
                    class="col"
                    data-aos="zoom-in"
                    data-aos-delay="50"
                    data-aos-duration="1500"
                  >
                    <div class="card h-100 border-0 ">
                      <img
                        src={require("../assets/image/angular.png")}
                        class="prtimg card-img-top img-fluid"
                        alt="..."
                      />
                    </div>
                  </div>
                  <div
                    class="col "
                    data-aos="zoom-in"
                    data-aos-delay="50"
                    data-aos-duration="1500"
                  >
                    <div class="card h-100 border-0 ">
                      <img
                        src={require("../assets/image/ajaxlogo.png")}
                        class="prtimg card-img-top img-fluid"
                        alt="..."
                      />
                    </div>
                  </div>
                  <div
                    class="col"
                    data-aos="zoom-in"
                    data-aos-delay="50"
                    data-aos-duration="1500"
                  >
                    <div class="card h-100 border-0 ">
                      <img
                        src={require("../assets/image/bootstrap.jpg")}
                        class="prtimg card-img-top img-fluid"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-backend"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
                tabindex="0"
              >
                <div class="row row-cols-2 row-cols-lg-3 m-0 g-5 py-3 pt-1">
                  <div class="col h-100">
                    <div class="card h-100 border-0 m-2">
                      <img
                        src={require("../assets/image/net-mvclogo.png")}
                        class="prtimg card-img-top img-fluid"
                        alt="..."
                      />
                    </div>
                  </div>
                  <div class="col">
                    <div class="card h-100 border-0 ">
                      <img
                        src={require("../assets/image/mongodb.png")}
                        class="prtimg card-img-top img-fluid"
                        alt="..."
                      />
                    </div>
                  </div>
                  <div class="col">
                    <div class="card h-100 border-0">
                      <img
                        src={require("../assets/image/1_49Ge0PYuwyPqpG3vl9N9zg-removebg-preview.png")}
                        class="prtimg card-img-top img-fluid"
                        alt="..."
                      />
                    </div>
                  </div>
                  
                  <div class="col">
                    <div class="card h-100 border-0">
                      <img
                        src={require("../assets/image/sql.png")}
                        class="prtimg card-img-top img-fluid"
                        alt="..."
                      />
                    </div>
                  </div>
                  <div class="col">
                    <div class="card h-100 border-0 ">
                      <img
                        src={require("../assets/image/sqlserver.png")}
                        class="prtimg card-img-top img-fluid"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comp4technology;
