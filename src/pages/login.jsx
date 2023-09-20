import React from 'react';
import Brand from '../components/Brand';
import Avatar from '../components/Avatar';

export default function login() {
  return (
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
        <div className='container mx-auto mb-20'>
          <Brand />
          <div className='w-80 mx-auto mt-10'>
            <h1 className='text-2xl text-black font-semibold'>Sign in</h1>
            <p className='w-72 text-balck mt-5'>If you don't have an account register You can 
              <a href='/register' className='text-blue-800'> Register here !</a>
            </p>
            <div className="mt-10 form-login relative">
              <label className='text-slate-500'>Email</label>
              <img 
               className='absolute bottom-1.5'
               src='images/email.svg' 
               alt='email' 
               />
              <input 
               className='outline-none w-80 pl-7'
               type='email' 
               placeholder='Enter your email address' 
               required
               />
            </div>

            <div className="mt-10 form-login relative">
              <label className='text-slate-500'>Password</label>
              <img 
               className='absolute bottom-1.5'
               src='images/lock.svg' 
               alt='lock' 
               />
              <input 
               className='outline-none w-80 pl-7'
               type='password' 
               placeholder='Enter your password' 
               required
               />
             </div>
               <div className='flex mt-2'>
                  <input type='checkbox' className='mr-2' />
                  <p className='text-black mr-16'>Remember me</p>
                  <a href=' #' className='text-slate-500'>Forgot Password ?</a>
               </div>

               <button className='bg-blue-800 text-white w-full h-10 mt-16 rounded-full shadow-lg shadow-blue-500/40'>Login</button>
                <p className="text-slate-300 mt-5 text-center">or continue with</p>
                <div className='flex justify-between w-44 mt-5 mx-auto'>
                  <a href=' #'>
                    <img className='h-10' src='images/facebook.svg' alt='facebook' />
                  </a>
                  <a href=' #'>
                    <img className='h-10' src='images/apple.svg' alt='apple' />
                  </a>
                  <a href=' #'>
                    <img className='h-10' src='images/google.svg' alt='google' />
                  </a>
                </div>
          </div>
        </div>
        <Avatar name={"Sign in"} />
      </div>
  )
}
