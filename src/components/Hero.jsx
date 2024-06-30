import React from 'react'
import Upper from './Upper';
import Fader from './Fader';

function Hero() {
  return (
    <div className='md:h-[700px] w-screen flex items-center justify-center text-center'>
        <div className='pt-28 lg:pt-20'>
            <div className='text-white popUp text-[2.5rem] lg:text-[5.4rem] font-[500] px-10 leading-[3rem]'>
                Empower Your Finicial&nbsp;
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-700'>
                    in the Digital Age
                </span>
            </div>
            <Fader>
            <div className='text-[1.2rem] leading-[1.6rem] pt-2 text-white/50 lg:w-[600px] mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
            <div className='flex gap-6 items-center justify-center py-6 lg:pt-16'>
                <a href="" className='hover:scale-105 text-[0.9rem] bg-white/10 text-white py-[0.4rem] px-3 rounded-s-full rounded-e-full border border-white/20'>Buy Now</a>
                <a href="" className='hover:scale-105 text-[0.9rem] bg-white py-[0.4rem] px-3 rounded-s-full rounded-e-full border border-white/20'>Try Now</a>
            </div>
            </Fader>
        </div>
    </div>
  )
}

export default Hero