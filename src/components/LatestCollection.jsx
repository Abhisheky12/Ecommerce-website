import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const {products}=useContext(Shopcontext);
    const [latestProducts,setLatestProducts]=useState([]);
    console.log(latestProducts);
    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    },[])
    
  return (
    <div className='my-10'>
       <div className='text-center py-8 text-3xl'>
              <Title text1='LATEST' text2='COLLECTIONS'/>
              <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
              Our Latest Collection features a curated selection of cutting-edge products that embody the latest trends, technology, and style for every need and occasion. From fashion-forward apparel to innovative gadgets and home essentials, our new arrivals are designed to inspire and elevate your lifestyle.
              </p>
       </div>
       {/* {rendering products} */}
       <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
              {
                latestProducts.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                ))
              }
       </div>

    </div>
  )
}

export default LatestCollection
