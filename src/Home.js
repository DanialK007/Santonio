import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Discover from './components/Discover'
import logo from "./images/santonioLogo.svg"
import Fader2 from './components/Fader2'

function Home() {
  return (
    <>
      <div className='bg-black overflow-hidden'>
        <Header />
        <Hero />
        <Discover />
      </div>
      <div className='fixed top-0 left-0 w-full h-full -z-10 flex items-center justify-center'>
        <div className='text-white text-3xl lg:text-7xl lg:max-w-5xl font-semibold lg:leading-[8rem] text-center'>Santonio Coin: The Currency of Tomorrow</div>
      </div>
      <div className='h-[800px] lg:h-screen bg-gradient-to-b from-black to-black/0'></div>
      <div className='lg:p-20 flex items-center justify-center'>
        <div className='relative w-[180px] h-[180px] md:w-[200px] md:h-[200px] lg:w-[400px] lg:h-[400px]'>
          <img src={logo} alt="Santonio Coin Logo" className='absolute top-0 left-0 h-full w-full rounded-full z-30 bg-purple-600 flex items-center justify-center font-semibold text-white px-7 md:px-12 shadow-inner shadow-gray-50 lg:px-16 scale-[0.85] lg:scale-90' />
          <div className='absolute overflow-hidden top-0 left-0 h-full w-full rounded-full z-20 bg-purple-800 flex items-center justify-center font-semibold text-white'>
            <div className='w-full h-full relative animate-spin'>
              <div className='absolute top-1/2 h-1 w-full bg-black'></div>
              <div className='absolute top-1/2 h-1 w-full bg-black rotate-90'></div>
              <div className='absolute top-1/2 h-1 w-full bg-black rotate-45'></div>
              <div className='absolute top-1/2 h-1 w-full bg-black -rotate-45'></div>
            </div>
          </div>
          <Fader2>
          <div className='absolute w-full h-full top-0 left-0 rounded-full bg-white blur-3xl -z-10'></div>
          </Fader2>
        </div>
      </div>
      <div className='h-80 -mt-20 bg-gradient-to-b to-black from-black/0'></div>
      <div className='h-screen bg-black'></div>
    </>
  )
}

export default Home
