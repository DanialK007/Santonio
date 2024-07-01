import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Discover from './components/Discover'

function Home() {
  return (
    <>
      <div className='bg-black overflow-hidden'>
        <Header />
        <Hero />
        <Discover />
      </div>
      <div className='fixed top-0 left-0 w-full h-full -z-10 flex items-center justify-center'>
        <div className='text-white text-3xl lg:text-7xl lg:max-w-5xl font-semibold leading-[8rem] text-center'>Santonio Coin: The Currency of Tomorrow</div>
      </div>
      <div className='h-screen bg-gradient-to-b from-black to-black/0'></div>
      <div className='p-20 flex items-center justify-center'>
        <div className='lg:w-[200px] lg:h-[200px] rounded-full bg-purple-600 flex items-center justify-center text-[8rem] font-semibold text-white'>S</div>
      </div>
      <div className='h-80 -mt-20 bg-gradient-to-b to-black from-black/0'></div>
      <div className='h-screen bg-black'></div>
    </>
  )
}

export default Home
