import React from 'react'
import gitlogo from '../assets/githublogo.png'

const Navbar = () => {
    return (
        <nav className='flex justify-around items-center bg-transparent text-[#868585] p-4'>
            <div className='font-bold text-xl'>
                <span className='text-[#e99e14]'>ONE</span>
                <span>PASS</span>

            </div>
            <div>
                <button className='cursor-pointer' onClick={() => window.open('https://github.com/ripusudan021/ONEPASS', '_blank')}>
                    <img src={gitlogo} alt="GitHub Logo" className='invert' />
                </button>
                </div>
        </nav>
    )
}

export default Navbar
