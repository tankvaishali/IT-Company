import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import HomeCom from './Component/HomeCom';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Companypage from './Component/Companypage';
import CapabilityPage from './Component/CapabilityPage';
import Contactus from './Component/Contactus';
import PortfolioPage from './Component/PortfolioPage';
import ScrollToTop from './Component/ScrollToTop';
import { useEffect, useState } from 'react';
import { RingLoader } from 'react-spinners';

function App() {
  const [Loading, setLoading] = useState(true);
  useEffect(()=>{
    const fakeDataFetch=()=>{
      setTimeout(()=>{
        setLoading(false)
      },1500)
    };
fakeDataFetch()
  },[])
  
  return (
  <>
{
  Loading?
  <>
   <div className='d-flex align-items-center text-center  justify-content-center w-100' style={{height:"100vh"}}>
   <RingLoader loading={Loading}  size={70} color='#027ad6'/>
   </div>
  </>
  :
  <>
  <BrowserRouter>
  <ScrollToTop/>
<Routes>
  <Route path='/' element={ <HomeCom/>}/>
  {/* <Route path='/Homepage' element={<HomeCom/>}/> */}
  <Route path='/Companypage' element={<Companypage/>}/>
  <Route path='/Capabilitypage' element={<CapabilityPage/>}/>
  <Route path='/Contactus' element={<Contactus/>}/>
  <Route path='/Portfoliopage'element={<PortfolioPage/>}/>
</Routes>
</BrowserRouter>
</>
}



{/* <HomeCom/> */}
  </>
  );
}

export default App;
