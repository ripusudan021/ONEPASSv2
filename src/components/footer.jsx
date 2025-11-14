import React from 'react'
import gitlogo from '../assets/githublogo.png'
import linkedinlogo from '../assets/linkedinlogo.png'


const Footer = () => {
  return (
    <div className='fixed bottom-0 w-full text-[12px]  '>
        <footer className="flex justify-center items-center bg-transparent text-center text-[#868585] p-4 mt-4 bottom-0 w-full gap-2 ">
            <div className='flex justify-center items-center top-12 m-2 gap-1'>
            <span>Developed by </span>
            <a href="https://github.com/ripusudan021" target="_blank" rel="noopener noreferrer" className="text-[#e99e14] hover:underline"> Ripusudan Mishra</a>
            </div>
            <div className='flex justify-center items-center gap-4'>
                <button className='cursor-pointer' onClick={() => {
                  window.open("https://github.com/ripusudan021","_blank")
                }
                }><img src={gitlogo} alt="GitHub" className='invert w-6'/></button>
                <button className='cursor-pointer' onClick={() => {
                  window.open("https://www.linkedin.com/in/ripusudanmishra","_blank")
                }
                }><img src={linkedinlogo} alt="LinkedIn" className='w-6'/></button>
            </div>

        </footer>
    </div>
  )
}

export default Footer
