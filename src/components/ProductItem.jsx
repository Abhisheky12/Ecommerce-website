import React from 'react'
import { useContext } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import {NavLink} from 'react-router-dom'
const ProductItem = ({id,image,name,price}) => {
    const {currency}=useContext(Shopcontext);
  return (
<NavLink className='text-gray-700 cursor-pointer' to={`/product/:${id}`}>
  <div className='overflow-hidden'>
         <img className='hover:scale-110 transition ease-in-out'src={image[0]} alt=""  />
  </div>
  <p className='pt-3 pb-1 text-sm'>{name}</p>
  <p className='text-sm font-medium'>{currency}{price}</p>
  
</NavLink>
    
  )
}

export default ProductItem