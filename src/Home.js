import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Discover from './components/Discover'

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Discover />
      <div className='h-screen'></div>
    </>
  )
}

export default Home
