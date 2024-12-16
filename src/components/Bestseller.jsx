import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import Title from './Title';
import ProductItem from './ProductItem';

const Bestseller = () => {
    const {products}=useContext(Shopcontext);
    const[bestSeller,setbestSeller]=useState([]);
    useEffect(()=>{
        const bestProduct=products.filter((item)=>(item.bestseller));
        setbestSeller(bestProduct.slice(0,5));
    },[])
  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
           <Title text1='BEST' text2='SELLERS'/>
           <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Our Best Seller Collection features the most popular and highly rated products that customers are loving right now. These items have earned their place at the top due to their exceptional quality, outstanding value, and trend-setting appeal. Whether you're looking for fashion staples, cutting-edge electronics, or everyday essentials, our best sellers deliver on both performance and style.</p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
      {
      bestSeller.map((item,index)=>(
        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/> 
      ))


      }
      </div>
    
    </div>
  )
}

export default Bestseller
