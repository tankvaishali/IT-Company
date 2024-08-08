import React from "react";
import Heading from "./Heading";
import "./Develop_Card";
import Develop_Card from "./Develop_Card";
import { GrCloudComputer } from "react-icons/gr";
import { PiComputerTowerBold } from "react-icons/pi";
import { TbDeviceImacStar } from "react-icons/tb";
import { MdImportantDevices } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbDeviceMobileCode } from "react-icons/tb";
import { FaArrowRightLong } from "react-icons/fa6";

function Develop_Company() {
  let developcards = [
    {
      iconcard: <GrCloudComputer />,
      tittle: "Custom Software Development",
      pera: "the process of designing software applications that meet the specific needs of an individual or a company. Unlike commercial off-the-shelf (COTS) software, custom options are usually targeting specific problems. ",
    },
    {
      iconcard: <RiSecurePaymentLine />,
      tittle: "Payment Gateway Integrationt",
      pera: "Payment gateway integration isn't just about accepting online payments - it's also about enhancing the customer experience, improving conversion rates, and ensuring transaction security. it can be a dedicated source of revenu.",
    },
    {
      iconcard: <TbDeviceImacStar />,
      tittle: "SaaS Development",
      pera: "Software as a Service is commonly accessed through a web browser, with users logging into the system using a username and password. Instead of each user can access the program via the internet.",
    },
    {
      iconcard: <PiComputerTowerBold />,
      tittle: "Web Application Development",
      pera: "Web development refers to the creating, building, and maintaining of websites.There are  main types of web development. front-end development, back-end development etc. refers to the overall process of creating web applications, including the project's design, layouts.",
    },
    
    {
      iconcard: <MdImportantDevices />,
      tittle: "eCommerce Development",
      pera: "Building and designing an ecommerce website where consumers can purchase products online. Because ecommerce websites are so popular with consumers, developing an ecommerce website can help you generate more conversions and revenue for your business.",
    },
   
    {
      iconcard: <TbDeviceMobileCode />,
      tittle: "Mobile App Development",
      pera: "A mobile app developer uses programming languages and development skills to create, test, and develop applications on mobile devices. They work in operating system environments like iOS, Android and often take into account UI and UX principles .",
    },
  ];
  return (
    <>
      <div className="py-5 " >
        <div className="py-1" data-aos="zoom-in" data-aos-delay="50"
    data-aos-duration="1800" >
          <Heading
            headingtittle={"Software Development Services Company"}
            headingpera={
              "How to choose a best website development company  IT Solutions is the best Software development company. When choosing a development company for your website. it is very important the quality of the work you hope to obtain and it is that a good Web of quality, realized of the hand of good engineers who have been working in the sector for years.We have hundreds of young and creative programmers who will to share with each other their quotes about programming for developers."
            }
          />
          <div className="text-secondary pera text-center container">
            
A software service company  focus is providing software development service or any service related with software products such as testing, UI/UX design etc.
          </div>
        </div>
        <div className="container">
          <div className="row m-0 p-0 g-5" >
            {developcards?.map((x, i) => {
              return (
                <div
                  className="col-sm-12 col-md-6 col-lg-4 text-center"
                  key={i}
                >
                  <Develop_Card
                    iconcard={x.iconcard}
                    tittle={x.tittle}
                    pera={x.pera}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Develop_Company;
