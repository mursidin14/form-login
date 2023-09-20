import React from 'react';
import Brand from '../components/Brand';
import Avatar from '../components/Avatar';


export default function register() {
  return (
    <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
        <div className='container mx-auto mb-20'>
          <Brand />
          <div className='w-80 mx-auto mt-10'>
            <h1 className='text-2xl text-black font-semibold'>Sign up</h1>
            <p className='w-72 text-balck mt-5'>If you don't have an account register You can 
              <a href='/' className='text-blue-800'> Login here !</a>
            </p>

            <div className="mt-10 relative">
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

          <div className="mt-10 relative">
            <label className='text-slate-500'>Username</label>
            <img 
             className='absolute bottom-1.5'
             src='images/user.svg' 
             alt='user' 
             />
            <input 
             className='outline-none w-80 pl-7'
             type='text' 
             placeholder='Enter your name' 
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
               placeholder='Enter your Password' 
               required
               />
            </div>

            <div className="mt-10 form-login relative">
              <label className='text-slate-500'>Confirm Password</label>
              <img 
               className='absolute bottom-1.5'
               src='images/lock.svg' 
               alt='lock' 
               />
              <input 
               className='outline-none w-80 pl-7'
               type='password' 
               placeholder='Confirm Your Password' 
               required
               />
             </div>

               <button className='bg-blue-800 text-white w-full h-10 mt-16 rounded-full shadow-lg shadow-blue-500/40'>Register</button>
          </div>
        </div>
        <Avatar name={"Sign up"} />
      </div>
  )
}
