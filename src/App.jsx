import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './page/Home'
import Collection from './page/Collection'
import About from './page/About'
import Contact from './page/Contact'
import Product from './page/Product'
import Cart from './page/Cart'
import Login from './page/Login'
import Placeorder from './page/Placeorder'
import Orders from './page/Orders'
import Footer from './components/Footer'
import Search from './components/search'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const App = () => { 
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
      <Search/>
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/collection' element={<Collection/>} />
        <Route  path='/about' element={<About/>} />
        <Route  path='/contact' element={<Contact/>} />
        <Route  path='/product/:productId' element={<Product/>} />
        <Route  path='/cart' element={<Cart/>} />
         <Route  path='/login' element={<Login/>} />
         <Route  path='/place-order' element={<Placeorder/>} />
         <Route  path='/orders' element={<Orders/>} /> 
      </Routes>
      <Footer/>



     </div>
  )
}

export default App
