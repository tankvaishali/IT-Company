import React from 'react'
import Header from './Header'
import Footer from './Footer'

function HocCom(Component) {
    function Newcomponenet(props) {
        return(
            <>
            <Header/>
<div>
    <Component/>
</div>
            <Footer/>
            </>
        )
    }
  return Newcomponenet
   
  
}

export default HocCom