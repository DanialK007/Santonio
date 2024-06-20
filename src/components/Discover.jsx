import React from 'react'
import Zoomer from './Zoomer'
import Zoomer2 from './Zoomer2'
import MyParallax from './MyParallax';
import dashboard from '../images/dashboard.png';
import block1 from '../images/block1.png';
import block2 from '../images/block2.png';
import block3 from '../images/block3.png';
import block4 from '../images/block4.png';
import block5 from '../images/block5.png';
import block6 from '../images/block6.png';

function Discover() {
  return (
    <div className='relative h-[800px] flex items-center justify-center'>
        <MyParallax className="lg:h-[650px] rounded-2xl" image={dashboard}>
            <Zoomer2 className="absolute z-20 top-0 left-0 w-[1400px] h-[600px] bg-red-600">
                <div className='w-[1400px] z-20 flex justify-between ps-[140px] pe-[120px]'>
                        <img src={block1} alt=""  className='h-[100px]'/>
                        <img src={block4} alt=""  className='h-[100px]'/>
                </div>
                <div className='w-[1400px] z-20 flex justify-between '>
                        <img src={block2} alt=""  className='h-[100px]'/>
                        <img src={block5} alt=""  className='h-[100px]'/>
                </div>
                <div className='w-[1400px] z-20 flex justify-between px-[100px]'>
                        <img src={block3} alt=""  className='h-[100px]'/>
                        <img src={block6} alt=""  className='h-[100px]'/>
                </div>
            </Zoomer2>
        </MyParallax>
        {/* <Zoomer>
            <img src={dashboard} alt="" className='lg:h-[650px] rounded-2xl'/>
        </Zoomer>
        <Zoomer2 className="absolute top-0 left-0 w-full h-full py-[60px] z-10 flex items-center justify-between flex-col">
            <div className='w-[1400px] flex justify-between ps-[140px] pe-[120px]'>
                    <img src={block1} alt=""  className='h-[100px]'/>
                    <img src={block4} alt=""  className='h-[100px]'/>
            </div>
            <div className='w-[1400px] flex justify-between '>
                    <img src={block2} alt=""  className='h-[100px]'/>
                    <img src={block5} alt=""  className='h-[100px]'/>
            </div>
            <div className='w-[1400px] flex justify-between px-[100px]'>
                    <img src={block3} alt=""  className='h-[100px]'/>
                    <img src={block6} alt=""  className='h-[100px]'/>
            </div>
        </Zoomer2> */}
    </div>
  )
}

export default Discover