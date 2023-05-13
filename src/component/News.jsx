import React from 'react'

import {gaming, retro, laptop} from '../assets'

import { newsList } from '../constants'

const news = () => {
  return (
    <section className='relative w-full mx-auto'>
      <div className='absolute inset-0 sm:top-[670px] top-[1200px] max-w-6xl flex flex-col sm:flex-row gap-5 mx-auto z-0'>
        <div className='flex flex-col sm:flex-row gap-y-6 sm:gap-y-0 mx-4'>
          <div className='flex flex-row '>
            <img className='w-[100px] h-[127px]' src={retro} />
            <div className='ml-[24px]'>
              <h3 className='text-[32px] text-grayish-blue font-bold'>01</h3>
              <h4 className='text-lg font-bold hover:text-soft-red cursor-pointer'>Reviving Retro PCs</h4>
              <p className='text-[15px]'>What happens when old PCs are given modern upgrades?</p>
            </div>
          </div>

          <div className='flex flex-row'>
            <img className='w-[100px] h-[127px]' src={laptop} />
            <div className='ml-[24px]'>
              <h3 className='text-[32px] text-grayish-blue font-bold'>02</h3>
              <h4 className='text-lg font-bold hover:text-soft-red cursor-pointer'>Top 10 Laptops of 2022</h4>
              <p className='text-[15px]'>Our best picks for various needs and budgets.</p>
            </div>
          </div>

          <div className='flex flex-row'>
            <img className='w-[100px] h-[127px]' src={gaming} />
            <div className='ml-[24px]'>
              <h3 className='text-[32px] text-grayish-blue font-bold'>03</h3>
              <h4 className='text-lg font-bold hover:text-soft-red cursor-pointer'>The Growth of Gaming</h4>
              <p className='text-[15px]'>How the pandemic has sparked fresh opportunities.</p>
            </div>
          </div>
          
        </div>
      </div>

    </section>
  )
}

export default news