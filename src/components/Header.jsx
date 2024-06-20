import React from 'react'

function Header() {
    return (
        <div className='fixed z-[999] top-0 left-0 w-full pt-3 flex items-center justify-center'>
            <div className='flex text-[0.9rem] gap-5 font-semibold border bg-black text-white/60 border-white/20 rounded-s-full rounded-e-full px-[0.6rem] py-[0.4rem] items-center justify-center'>
                <div className='flex gap-2 items-center'>
                    <div className='w-6 h-6 flex items-center justify-center rounded-md bg-purple-600'>S</div>
                    Santonio
                </div>
                <a href="" className='bg-white/10 text-white py-[0.3rem] px-[0.7rem] rounded-s-full rounded-e-full'>Home</a>
                <a href="" className='hover:bg-white/10 py-[0.3rem] px-[0.7rem] rounded-s-full rounded-e-full'>Features</a>
                <a href="" className='hover:bg-white/10 py-[0.3rem] px-[0.7rem] rounded-s-full rounded-e-full'>About</a>
                <a href="" className='hover:bg-white/10 py-[0.3rem] px-[0.7rem] rounded-s-full rounded-e-full'>Blog</a>
                <a href="" className='hover:bg-white/10 py-[0.3rem] px-[0.7rem] rounded-s-full rounded-e-full'>Shop</a>
                <button className='bg-white py-[0.3rem] text-black px-[0.7rem] rounded-s-full rounded-e-full'>Sign up</button>
            </div>
        </div>
    )
}

export default Header
