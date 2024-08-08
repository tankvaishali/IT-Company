import React from 'react'
import HocCom from './HocCom';



function Develop_Card(props) {
    console.log(props);

  return (
   <>
<div className='card h-100 devlophover border-0'  data-aos="zoom-in" data-aos-delay="50"
    data-aos-duration="1800">
    <div className='py-2 iconcard'>
    {props.iconcard}
    </div>
    <div className='fs-5 fs-lg-5 fw-bold px-3 carddevlop '>{props.tittle}</div>
    <div className='p-4 text-center cardtext py-3 pb-4 pera'>{props.pera}</div>
</div>
   </>
  )
}

export default Develop_Card