import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Popupform from './pages/Contact';
import Footer from './components/Footer';
import DisclaimerPopup from './components/DisclaimerPopup';
import Termsconditions from './pages/Termsconditions';
import Refundpolicy from './pages/Refundpolicy';
import Services from './pages/Services';

function App() {

  return (
    <BrowserRouter>
      <header className='bg-white shadow'>
        <DisclaimerPopup />
        <nav className='flex px-40 py-3 container mx-auto justify-between items-center align-middle'>
          <div className='text-2xl text-blue-900 font-bold'>
            <Link to='/'>Option and Trade</Link>
          </div>
          <div className='flex space-x-12 '>
            <Link to='/' className='relative text-lg text-black hover:text-blue-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'>Home</Link>
            <Link to="/Services" className='relative text-lg text-black hover:text-blue-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'>Services and Packages</Link>
            <Link to='/Aboutus' className='relative text-lg text-black hover:text-blue-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]'>About us</Link>
          </div>
          <div>
            <Link to="/Popupform" className='text-gray-700 hover:text-blue-600 transition colors'>
              <button type="button" className="text-gray-900 text-md bg-gray-100 hover:bg-blue-100  font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center  mb-2">
                Contact us
              </button></Link>
          </div>
          
        </nav>
      </header>

      <main>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Aboutus' element={<Aboutus/>} />
          <Route path='/Popupform' element={<Popupform/>} />
          <Route path='/Termsconditions' element={<Termsconditions/>} />
          <Route path='/Refundpolicy' element={<Refundpolicy/>} />
          <Route path='/Services' element={<Services/>} />
        </Routes>
      </main>

      <Footer/>
    </BrowserRouter>
  )
}


export default App
