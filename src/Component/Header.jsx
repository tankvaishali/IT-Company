import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const [headerStyle, setHeaderStyle] = useState({
top:0,
position:"",
backgroundColor: '',
    transition: 'all 10s ease-in-out',
    height:"100%",
    
  });
  const [navStyle, setnavStyle] = useState({
// top:0,
position:"",
backgroundColor: '',
    transition: 'all 10s ease-in-out',
    // transform:" translateY(-100%)",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 400) {
        setHeaderStyle({
          position:"sticky",
          top:0,
          backgroundColor: '#02101efd',
          transition:"all 0.5s ease-in-out",
         
        });
      
      }else{
        setHeaderStyle({
          position:"",
          backgroundColor: '',
        });
      }
     
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 400) {
        setnavStyle({
          // position:"sticky",
          // top:0,
          backgroundColor: '#02101efd',
          transition:"all 0.3s ease-in-out",  
          // transform:" translateY(100%)",       
        });     
      }else{
        setnavStyle({
          position:"",
          backgroundColor: '',
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <div class={`container-fluid p-0 m-0 head d-flex`} style={headerStyle}>
    <nav className="navbar navbar-expand-lg position-absolute w-100 top-0" style={navStyle}>
      
      <div className="container">
        <Link to={"/"} className="navbar-brand text-white"> <img src="" width="100px" alt="Logo"/> </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item p-3">
              <NavLink to={"/Companypage"} className="text-decoration-none headmenu" aria-current="page">Company</NavLink>
            </li>
            <li className="nav-item p-3">
              <NavLink to={"/Capabilitypage"} className="text-decoration-none headmenu">Capability</NavLink>
            </li>
            <li className="nav-item p-3">
              <NavLink to={"/Portfoliopage"} className="text-decoration-none headmenu" >Portfolio</NavLink>
            </li>
            <li className="nav-item p-3">
              <NavLink to={"/Contactus"} className="text-decoration-none headmenu">Contact us</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>

    </>
  )
}

export default Header