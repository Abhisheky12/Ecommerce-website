import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1='ABOUT' text2='US'/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
           <img  className='w-full md:max-w-[450px]'src={assets.about_img} alt=""  />
           <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                   <p>Join thousands of happy customers who trust us for their online shopping needs. Start shopping now and experience the ease of finding everything you love in one place!. Our intuitive website makes it easy to browse, compare, and shop for your favorite products. Whether you’re upgrading your wardrobe, your home, or your gadgets, we’re here to deliver quality at unbeatable prices.</p>
                   <p>Shop from a wide variety of products at your brand, where quality and convenience come together. From everyday essentials to luxury items, our curated collection has something for everyone.</p>
                   <p className='text-gray-800'>Our Mission</p>
                   <p>our mission is simple: to provide customers with the best shopping experience possible. We’re dedicated to offering high-quality products at competitive prices, all while ensuring that your journey with us is seamless and enjoyable. From fashion and electronics to home essentials and beauty, we aim to bring you a diverse range of products to suit your lifestyle. With fast shipping, secure payment options, and exceptional customer support, we’re here to make every purchase a great one.</p>
           </div>
      </div>
      <div className='text-4xl py-4'>
            <Title text1='WHY' text2='CHOOSE ME' />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
                 <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                           <p>Quality Assurance:</p>
                           <p  className='text-gray-600'>We offer a vast range of carefully curated products, ensuring you find exactly what you need.We believe in delivering great value without compromising on quality, offering competitive prices across all our product categories.</p>
                 </div>
                 <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                           <p>Convenience:</p>
                           <p className='text-gray-600'> we prioritize your convenience in every aspect of shopping. Whether you’re at home, in the office, or on the go, our website is designed to provide you with a seamless, hassle-free shopping experience. </p>
                 </div>
                 <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                           <p>Exceptional Customer Service:</p>
                           <p className='text-gray-600'> we are committed to providing exceptional customer service at every step of your shopping experience. Whether you need help selecting the right product, have a question about your order, or require assistance with returns, our friendly and knowledgeable customer support team is always here to help.</p>
                 </div>
                 
      </div>

    </div>
  )
}

export default About
