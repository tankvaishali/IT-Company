import React from "react";
import Heading from "./Heading";
import { TiGroup } from "react-icons/ti";
import { TiGroupOutline } from "react-icons/ti";
import { GrTechnology } from "react-icons/gr";
import { GiAlarmClock } from "react-icons/gi";
import { MdSyncLock } from "react-icons/md";
import { SiAndroidstudio } from "react-icons/si";
import { GiTeamIdea } from "react-icons/gi";
function Comp6chooseus() {
  let carddata = [
    {
      icon: <TiGroupOutline />,
      name: "Hire Dedicated Developers",
      proffesion:
        "We hire dedicated developers to work with a group of highly skilled experts who are ready to work on your software project and help focus on core . ",
    },
    {
      icon: <GrTechnology />,
      name: "Technology Competence",
      proffesion:
        "Technological competence is the basis of knowledge, skills and abilities in technology. We can improve the quality and effectiveness of our projects.",
    },
    {
      icon: <MdSyncLock />,
      name: "Ideas Paired With Passion",
      proffesion:
        "Our passionate programmers will equally passionate about the user than his code. they  completed a lots of  projects with help of paired ideas.",
    },
    {
      icon: <GiAlarmClock />,
      name: "Timely Delivery",
      proffesion:
        "Software delivery teams are constantly under pressure from the business to deliver high-quality software within a short time.",
    },
 
    {
      icon: <SiAndroidstudio />,
      name: "Latest technologies",
      proffesion:
        "The list of latest  software development trends includes Artificial Intelligence,  Progressive Web etc. Applications.",
    },
    {
      icon: <GiTeamIdea />,
      name: "Dedicated  Teams",
      proffesion:
        "Our dedicated team  is an outsourcing model of collaboration between a client and a dedicated development company.",
    },
  ];
  return (
    <div className="chooseus text-white mb-5 mt-5">
      <div
        className="container pt-5"
        data-aos="zoom-in"
        data-aos-delay="50"
        data-aos-duration="1500"
      >
        <Heading headingtittle={"Why Choose Us ?"} />
        <div className="text-center">
          We are the one-stop IT solutions provider that can meet all your
          business and perfomance needs. like Quality services, Round-the-clock
          support, Commitment and Guaranted results.
        </div>
      </div>
      <div className="container text-center">
        <div
          className="row row-cols-1 row-cols-lg-3 pb-5"
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="1500"
        >
          {carddata?.map((x, i) => {
            return (
              <>
                <div className="col h-100">
                  <div
                    className="card h-100 border-0 m-2 bg-transparent"
                    key={i}
                    data-aos="zoom-in"
                    data-aos-delay="50"
                    data-aos-duration="1500"
                  >
                    <div className="card-body">
                      <div className="text-white chooseicon">{x.icon}</div>
                      <div className=" fs-4 fw-bold text-white choosetittle">
                        {x.name}
                      </div>
                      <div className="choosepera fw-mediu pt-3 ">
                        {x.proffesion}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Comp6chooseus;
