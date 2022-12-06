import './App.css';
import Home from './components/Home';
import Jobs from './components/Jobs';
import Bids from './components/Bids';
import Marketplace from './components/Marketplace';
import Machines from './components/Machines';

import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Menu1 from './components/Menu1';
import Menu2 from './components/Menu2';

function App() {
  return (
    <>
      <Navbar/>

      <div className='flex'>
        <div className='background-lat-menu w-[311px] h-[calc(100vh-80px)] flex-column'>
          <div className='ml-[38px] mt-[38px] flex-none'>
            <Menu1/>
          </div>

          <div className='ml-[38px] mt-[200px] flex-none'>
            <Menu2/>
          </div>
        </div>
        
        <div className='flex-1'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/jobs' element={<Jobs/>} />
            <Route path='/bids' element={<Bids/>} />
            <Route path='/marketplace' element={<Marketplace/>} />
            <Route path='/machines' element={<Machines/>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
