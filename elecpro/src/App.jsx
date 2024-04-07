import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import RegionWiseIsntall from './components/RegionWiseIsntall';
import SateWiseInstall from './components/SateWiseInstall';
import RenewableInstall from './components/RenewableInstall';
import PowerGen from './components/PowerGen';
import Growth from './components/Growth';
import Sales from './components/Sales';
import Calculator from './components/Calculator';
import AboutUs from './components/AboutUs';

const App = () => {
  return (
    <div className='p-0 overflow-hidden bg-black font-sans' 
    style={{
      fontFamily: 'manrope'
    }}>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/installregion' element={<RegionWiseIsntall/>} />
        <Route path='/installstate' element={<SateWiseInstall/> } />
        <Route path='/instllrenewable' element={<RenewableInstall/>} />
        <Route path='/installregion' element={<RegionWiseIsntall/>} />
        <Route path='/powgeneration' element={<PowerGen/>} />
        <Route path='/growth' element={<Growth/>} />
        <Route path='/sales' element={<Sales/>} />
        <Route path='/calculator' element={<Calculator/>} />
        <Route path='/about' element={<AboutUs/>} />
      </Routes>
    </div>
  )
}

export default App
