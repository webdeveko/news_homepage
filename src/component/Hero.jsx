import React from 'react'

import { heroImage } from '../assets'

const hero = () => {
  return (
    <section className='relative w-full mx-auto'>
      <div className='absolute inset-0 top-[100px] max-w-6xl flex flex-col sm:flex-row gap-5 mx-auto z-0'>
        <div className='flex flex-col '>
          <img src={heroImage} className='mb-[28px] max-w-[730px] mx-4' />
          <div className='flex flex-col sm:flex-row gap-5'>
            <h1 className='text-[56px] font-bold max-w-[350px] leading-none mx-4'>The Bright Future of Web 3.0?</h1>
            <div className='flex flex-col justify-between ml-[15px] max-w-[350px]'>
              <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
              <button className='bg-soft-red text-off-white h-[48px] w-[185px] hover:bg-very-dark-blue font-bold my-3'>Read More</button>
            </div>
          </div>
        </div>
        <div className='lg:min-w-[350px] min-h-[511px] bg-black px-[24px] mx-4'>
          <h2 className='text-4xl font-bold text-soft-orange py-8'>New</h2>
          <h3 className='text-white font-bold text-xl cursor-pointer hover:text-soft-orange'>Hydrogen VS Electric Cars</h3>
          <p className='text-white mt-4 text-[15px]'>Will hydrogen-fueled cars ever catch up to EVs?</p>
          <hr className='my-8' />
          <h3 className='text-white font-bold text-xl cursor-pointer hover:text-soft-orange'>The Downsides of AI Artistry</h3>
          <p className='text-white mt-4 text-[15px]'>What are the possible adverse effects of on-demand AI image generation?</p>
          <hr className='my-8' />
          <h3 className='text-white font-bold text-xl cursor-pointer hover:text-soft-orange'>Is VC Funding Drying Up?</h3>
          <p className='text-white mt-4 text-[15px]'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
        </div>
      </div>
    </section>
  )
}

export default hero