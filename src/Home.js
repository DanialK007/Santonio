import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Discover from './components/Discover';
import Coin from './components/Coin';
import CarouselSize from './components/CarouselSize';

function Home() {
  const carouselRef = useRef(null);

  return (
    <>
      <div className='bg-black overflow-hidden'>
        <Header />
        <Hero />
        <Discover />
      </div>
      <Coin />

      <div className='py-40 bg-black text-white'>
        <div className='grid max-w-screen-xl mx-auto lg:grid-cols-2 lg:gap-20'>
          <div className='text-center p-5 lg:px-8'>
            <div className='text-xl py-5 lg:text-3xl'>Unleash Limitless Potential</div>
            <div className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros.</div>
          </div>
          <div className='text-center p-5 lg:px-8'>
            <div className='text-xl py-5 lg:text-3xl'>Secure Your Stake in the Future</div>
            <div className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros.</div>
          </div>
        </div>
      </div>

      
      <div className='h-screen bg-black text-white'>
        <div className='max-w-screen-xl mx-auto grid lg:grid-cols-2'>
          <div className='p-8 lg:px-10 lg:py-20 bg-[#111]'>
            <div className='text-3xl lg:text-6xl lg:pb-4'>Try these ready templates</div>
            <div className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div className='flex gap-6 items-center lg:mt-[100px]'>
              {/* <button onClick={scrollPrev} className='bg-white/10 rounded-full flex items-center justify-center w-10 h-10'>s</button>
              <button onClick={scrollNext} className='bg-white/10 rounded-full flex items-center justify-center w-10 h-10'>s</button> */}
            </div>
          </div>
          <div className='relative'>
            <div className='absolute hidden lg:block z-10 top-0 left-0 h-full w-full bg-gradient-to-r from-[#111] to-black/0 from-[20%] to-[50%]'></div>
            <div className="flex items-center justify-center h-full w-full pb-20 lg:pt-10 lg:pb-28">
              <CarouselSize />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
