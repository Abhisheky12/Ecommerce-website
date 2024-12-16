import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../context/Shopcontext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  const {products,currency,cartItems,updatequantity}=useContext(Shopcontext);
  const[cartData,setcartData]=useState([]);


  useEffect(()=>{
    const temData=[];
    for(const i in cartItems){
      for(const j in cartItems[i]){
        if(cartItems[i][j]>0){
          temData.push(
            {
              _id:i,
              size:j,
              quantity:cartItems[i][j]
            }
          )
        }
      }
    }
    setcartData(temData);
  },[cartItems])


  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        < Title text1='YOUR' text2='CART'/>
      </div>

      <div>
         {
          cartData.map((item,index)=>{
            const productData=products.find((product)=>product._id===item._id);
            return(
              <div className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                       <div className='flex items-start gap-6'>
                        <img src={productData.image[0]} alt="" className='w-16 sm:w-20' />
                        <div>
                          <p className='text-sm sm:text-lg font-medium'>{productData.name}</p>
                        
                        <div className='flex items-center gap-5 mt-2'>
                                  <p>{currency}{productData.price}</p>
                                  <p>{item.size}</p>
                        </div>
                         </div>
                         </div>
                         <input className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 ' type="number" min={1}  defaultValue={item.quantity}/>
                         <img onClick={()=>updatequantity(item._id,item.size,0)}className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt="" srcset="" />
              </div>
            )
          })
         }
      </div>
      <div className='flex justify-end my-20'>
              <div className='w-full sm:w-[450]'>
                      <CartTotal/>
                      <div className='w-full text-end'>
                        <NavLink to='/place-order'><button  className='bg-black text-white text-sm my-8 px-8 py-3'>PROCESS TO CHECKOUT</button></NavLink>
                      </div>
              </div>
      </div>


    </div>
  )
}

export default Cart
