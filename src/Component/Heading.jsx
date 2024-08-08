import React from 'react'

function Heading(props) {
  return (
  <>
   <div className='container text-center py-3'>
   <div className='text-center headings'>{props.headingtittle}</div>
    <div className='text-secondary pera pt-3'>{props.headingpera}</div>
   </div>
  </>
  )
}

export default Heading