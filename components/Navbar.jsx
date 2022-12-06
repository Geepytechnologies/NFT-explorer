import React from 'react'
import { SiBlockchaindotcom } from 'react-icons/si'
import {
    ConnectButton,
  } from "@rainbow-me/rainbowkit";
import { useAccount } from 'wagmi'
import {FaLock} from "react-icons/fa"


export const Navbar = () => {
    const { address, isConnecting, isConnected, isDisconnected } = useAccount();
  return (
    <div className='flex items-center justify-center h-[90px] w-[100%]'>
        <div className='flex flex-row items-center px-[5px] justify-around w-[100%]'>
            {/* logo */}
            <div className='flex flex-1 flex-row items-center justify-center'>
                    <SiBlockchaindotcom className='text-[white] text-[25px]' />
                    <SiBlockchaindotcom className='text-[#ef1e41] font-sans text-[25px] -translate-x-[21px]'/>
                <p className="text-white text-[28px] font-[600]">NFT <span className='font-sans text-[#15bffd]'>hub</span></p>
            </div>
            {/* menu */}
            <div className='hidden md:flex flex-[3_3_0%]'>
                <ul className='flex w-[100%] flex-row items-center font-sans justify-around text-white'>
                    <li>Discover</li>
                    <li>Marketplace</li>
                    <li>About</li>
                </ul>
            </div>
            {/* connect */}
              <div className='flex-[1_1_0%] flex justify-end'>
            {/* { isConnected ? 
                <div className='bg-[#ef1e41] flex items-center justify-center rounded-md font-sans py-[9px] px-[13px] text-white'><FaLock className='mr-[3px]' />Connected</div> :
                <ConnectButton label='Connect' />
              } */}
            </div>
        </div>
    // </div>
  )
}
