import React from 'react'
import HocCom from './HocCom'
import Develop_Company from './Develop_Company'
import Heading from './Heading'
import { FaHtml5 } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { FaWordpress } from "react-icons/fa6";
import { FaAngular } from "react-icons/fa6";
import { IoLogoVue } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiPhp } from "react-icons/si";

function CapabilityPage() {
    let capability=[
        {
            icon:<FaHtml5 />,
            capbltname:"HTML",
        },
        {
            icon:<RiReactjsLine />,
            capbltname:"REACT",
        },
        {
            icon:<IoLogoVue />,
            capbltname:"VUE JS",
        },
        {
            icon:<SiPhp />,
            capbltname:"PHP",
        },
        {
            icon:<FaCss3Alt />,
            capbltname:"CSS",
        },
        {
            icon:<FaPython />,
            capbltname:"PYTHON",
        },
        {
            icon:<FaNode />,
            capbltname:"NODE JS",
        },
        {
            icon:<SiMysql />,
            capbltname:"MySQL",
        },
        {
            icon:<FaAngular />,
            capbltname:"ANGULAR",
        },
        {
            icon:<SiMicrosoftsqlserver />,
            capbltname:"SQLSERVER",
        },
        {
            icon:<DiJavascript />,
            capbltname:"JAVASCRIPT",
        },
        {
            icon:<FaBootstrap />,
            capbltname:"BOOTSTRAP",
        },
        {
            icon:<FaWordpress />,
            capbltname:"WORD PRESS",
        },
        {
            icon:<SiMongodb />,
            capbltname:"MONGO DB",
        },
    ]
  return (
<>
<div className='capabilitypage_back'>
        <div className='d-flex justify-content-center align-content-center align-items-center headings' data-aos="zoom-in" data-aos-delay="50"
    data-aos-duration="1800">Capability</div>
    </div>
 <div className='pt-5'>
    <Develop_Company/>
 </div>

 <div className='container py-5 ' data-aos="zoom-in" data-aos-delay="50"
    data-aos-duration="1500">
    <Heading headingtittle={"Technologies We Work with"} />
    <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4 g-5 m-0 pb-5' >
{
    capability?.map((x,i)=>{
        return(
            <>
            <div className='col' key={i} data-aos="zoom-in" data-aos-delay="50"
    data-aos-duration="1500">
    <div className='cpblttext fw-medium py-2 p-1 pt-0 h-100 text-center'><span className='cpblticon fs-1'>{x.icon}</span> {x.capbltname} </div>
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

export default HocCom(CapabilityPage)