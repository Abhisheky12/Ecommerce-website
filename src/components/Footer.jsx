import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
    <div className='flex flex-row sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
       <div>
        <img src={assets.logo} className='mb-5 w-32' alt=""  />
        <p className='w-full md:w-2/3 text-gray-600'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit porro commodi repudiandae voluptas quia quisquam corporis labore nisi voluptatem culpa perferendis, dolore laboriosam error possimus adipisci rerum necessitatibus amet ipsum!
        </p>
       </div>
       <div>
        <p className='text-xl font-medium mb-5'>COMPANY</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
        </ul>
    </div>
    <div>
        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+1-212-456-7890</li>
            <li>Contact@foreveryou.com</li>
        </ul>
    </div>
    </div>
    <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyrigght 2024@ forever.com-All Right reserved</p>
    </div>
    </div>
  )
}

export default Footer
