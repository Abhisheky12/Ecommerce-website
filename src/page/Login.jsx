import React, { useState } from 'react'

const Login = () => {
  const[currentstate,setcurrentstate]=useState('Sign Up')
  const onSubmitHandler=async(e)=>{
          e.preventDefault();
  }
  return (
      <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
        <div className='inline-flex items-center gap-2 mb-2 mt-10'>
                    <p className='prata-regular tex-3xl'>{currentstate}</p>
                    <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
        </div>
        {currentstate==='Login'?'':<input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name'/>}
        <input type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email'/>
        <input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='password'/>
        <div className='w-full flex justify-between text-sm mt-[-8px]'>
                      <p className='cursor-pointer'>Forget your password</p>
                      {
                        currentstate==='Login'?<p onClick={()=>setcurrentstate('Sign Up')} className='cursor-pointer'>Create account</p>:<p onClick={()=>setcurrentstate('Login')} className='cursor-pointer'>Login Here</p>
                      }
        </div>
        <button type='submit'className='bg-black text-white px-16 py-3 text-sm'>{currentstate==='Login'?'Sign In':'Sign Up'}</button>
      </form>
  )
}
export default Login
