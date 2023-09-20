import React from 'react'

export default function Avatar({ name }) {
  return (
    <div className='bg-blue-950 rounded lg:block hidden avatar'>
        <p className='mt-5 mr-5 text-white flex justify-end'> 
            <img src='images/phone-call.svg' alt='phone' />
            +94 0116 789 754
        </p>
        <img className='mx-auto img-avatar' src='images/Saly-10.png' alt='avatar' />
        <h2 className='text-white text-3xl font-sans font-bold ml-20 mt-10'>{name} to name</h2>
        <p className='text-white text-lg font-sans ml-20'>Lorem Ipsum is simply </p>
    </div>
  )
}
