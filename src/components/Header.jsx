import React from 'react'

function Header() {
    return (
        <div className='downer fixed z-[999] top-0 left-0 w-full pt-3 flex items-center justify-center'>
            <div className='min-w-56 justify-between flex text-[0.9rem] gap-5 font-semibold border bg-black text-white/60 border-white/20 rounded-s-full rounded-e-full px-[0.6rem] py-[0.4rem] items-center md:justify-center'>
                <div className='flex gap-2 items-center justify-center'>
                    <div className='w-6 h-6 flex items-center justify-center rounded-md bg-purple-600'>S</div>
                    Santonio
                </div>
                <a href="" className='hidden md:block bg-white/10 text-white py-[0.3rem] px-[0.7rem] rounded-s-full rounded-e-full'>Home</a>
                <a href="" className='hidden md:block hover:bg-white/10 py-[0.3rem] px-[0.7rem] rounded-s-full rounded-e-full'>Features</a>
                <a href="" className='hidden md:block hover:bg-white/10 py-[0.3rem] px-[0.7rem] rounded-s-full rounded-e-full'>About</a>
                <a href="" className='hidden md:block hover:bg-white/10 py-[0.3rem] px-[0.7rem] rounded-s-full rounded-e-full'>Blog</a>
                <a href="" className='hidden md:block hover:bg-white/10 py-[0.3rem] px-[0.7rem] rounded-s-full rounded-e-full'>Shop</a>
                <button className='hidden md:block bg-white py-[0.3rem] text-black px-[0.7rem] rounded-s-full rounded-e-full'>Sign up</button>
                <button className='block md:hidden bg-white/20 py-1 px-2 rounded-xl rotate-90'>|||</button>
            </div>
        </div>
    )
}

export default Header
