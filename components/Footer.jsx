import React from 'react'
import { SiBlockchaindotcom } from 'react-icons/si'
import { AiFillHeart, AiOutlineCopyrightCircle } from 'react-icons/ai'


const Footer = () => {
  return (
    <div className='footer pb-[30px] flex flex-col items-center justify-center'>
            <div className='flex flex-col md:flex-row w-[100%] '>
                <div className='flex flex-col md:w-[40%] justify-center items-center md:items-start p-[10px] '>
                    <div className='flex flex-row items-center justify-center'>
                    <SiBlockchaindotcom className='text-[white] text-[25px]' />
                    <SiBlockchaindotcom className='text-[#ef1e41] font-sans text-[25px] -translate-x-[21px]'/>
                    <p className="text-white text-[28px] font-[600]">NFT <span className='font-sans text-[#15bffd]'>hub</span></p>
                    </div>
                    <p className='text-white leading-9 text-center md:text-left font-sans'>The largest and unique NFT explorer<br /> For crypto-collectibles</p>
                </div>        
                <div className='flex items-center md:w-[30%]   justify-center'>
                    <ul className='flex flex-col w-[100%]  items-center font-sans justify-around text-white'>
                            <li className='p-[9px] font-[600] text-[#15bffd]'>Quick Links</li>
                            <li className='p-[9px]'>Discover</li>
                            <li className='p-[9px]'>Marketplace</li>
                            <li className='p-[9px]'>About</li>
                        </ul>
                </div>
                <div className='hidden md:flex items-center md:w-[30%]   justify-center'>
                    <ul className='flex flex-col w-[100%]  items-center font-sans justify-around text-white'>
                            <li className='p-[9px] font-[600] text-[#15bffd]'>Resource</li>
                            <li className='p-[9px]'>Partner</li>
                            <li className='p-[9px]'>Blog</li>
                            <li className='p-[9px]'>Newsletter</li>
                        </ul>
                </div>
            </div>
        <div className='flex text-white py-[5px] justify-center items-center'>Copyright <AiOutlineCopyrightCircle className='mx-[4px]' /> NFT <span className='text-[#15bffd] mx-[4px]'>hub</span> 2022 All rights reserved</div>
        <div className='flex text-white pb-[5px] justify-center items-center'>Made with <AiFillHeart className='mx-[4px] text-[#15bffd]' /> by Geepy</div>
    </div>
  )
}

export default Footer