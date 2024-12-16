import React, { useContext } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import Title from './Title'

const CartTotal = () => {
    const{currency,delivery_fee,getCartAmount}=useContext(Shopcontext)
  return (
    <div>
      <div className='w-full'>
        <div className='text-2xl'>
            <Title text1='CART' text2='TOTALS'/>
        </div>
        <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>
                      <p>subtotal</p>
                      <p>{currency}{getCartAmount()}.00</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <p>Shipping Fee</p>
                <p>{currency} {delivery_fee}.00</p>
            </div>
            <div className='flex justify-between'>
                <p>Total</p>
                <p>{currency} {getCartAmount()===0 ?0:getCartAmount()+delivery_fee}</p>
            </div>

        </div>
      </div>
    </div>
  )
}

export default CartTotal