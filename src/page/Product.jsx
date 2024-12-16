import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Shopcontext } from '../context/Shopcontext';
import { assets } from '../assets/assets';

const Product = () => {
  const {productId}=useParams();
  // console.log(productId);
  
  const {products,currency,addtocart}=useContext(Shopcontext);
  const [productData,setproductData]=useState(false);
  const[image,setImage]=useState('');
  const[size,setSize]=useState('');
  const fetchProductData= async()=>{
    {
    products.map((item)=>{
         if(item._id === productId.slice(1)){
          setproductData(item)
          setImage(item.image[0])
          return null;
         }
    })
  }
  }
  useEffect(()=>{
    fetchProductData();
  },[productId])

  return productData?(
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* {product data} */}
      <div className='flex gap-12 flex-col sm:flex-row'>


        {/* {product image} */}


        <div className='flex-1 flex gap-3 sm:flex-row'>
          <div className='flex sm:flex-col  justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item,index)=>(
                <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'alt=""  />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
             <img className='w-full h-auto'src={image} alt="" srcset="" />
          </div>
        </div>



        {/* {product info
         */}


        <div className='flex-1'>
        <p className='font-medium text-2xl'>{productData.name}</p>
        <div className='flex items-center gap-1 mt-2'>
          <img src={assets.star_icon} className='w-3 'alt="" />
          <img src={assets.star_icon} className='w-3 'alt="" />
          <img src={assets.star_icon} className='w-3 'alt="" />
          <img src={assets.star_icon} className='w-3 'alt="" />
          <img src={assets.star_dull_icon} className='w-3 'alt="" />
          <p className='pl-2'>(122)</p>
        </div>
        <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
        <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
        <div className='flex flex-col gap-4 my-8'>
          <p>Select Size</p>
          <div className='flex gap-2'>
          {
            productData.sizes.map((item,index)=>(
              <button onClick={()=>setSize(item)} className={`border-2 py-2 px-4 bg-gray-100 ${item===size ?'border-orange-500':''}`}key={index}>{item}</button>
              
            ))
          }
          </div>

        </div>
        <button onClick={()=>addtocart(productData._id,size)}className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
        <hr className='mt-8 sm-w-4/5' />
        <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
               <p>100% Original product</p>
               <p>Cash on delivery is available on this product</p>
               <p>Easy return and exchange policy within 7 days</p>
        </div>
        </div>
      </div>
      {/* {Description} */}

      <div className='mt-20'>
               <div className='flex'>
                <p className='border px-5 py-5 text-sm'>Description</p>
                <p className='border px-5 py-5 text-sm'>Reviews (122)</p>
               </div>
               <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                <p>An e-commerce website is an online platform that facilitates the buying and selling service of products or services over the internet.Most of us have shopped online for something at some point, which means we've taken part in e-commerce. So it goes without saying that e-commerce is everywhere.</p>
               </div>
      </div>
      {/* {Display related products} */}

    </div>
  ):<div className='opacity-0'></div>
}

export default Product