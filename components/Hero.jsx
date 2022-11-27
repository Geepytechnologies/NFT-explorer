import Image from 'next/image'
import {
  ConnectButton,
} from "@rainbow-me/rainbowkit";


const Hero = () => {
  return (
    <div className='h-[auto] w-[100%] my-[30px] flex flex-col md:flex-row justify-center items-center'>
        <div className='w-[100%] md:w-[70%] pb-[20px] pl-[20px]'>
          <p className='text-white text-[50px] font-[500] leading-[70px] font-sans'>Discover Extraordinary<br/><span className='font-[400] font-sans nftspan'> NFTs</span></p>
          <Image src={'/lightening.png'} alt="light" height={200} width={200} />
          <p className='text-white text-[18px] mb-[5px]'>The largest and unique Super rare NFT marketplace For crypto-collectibles</p>
          <div className='flex flex-row items-center justify-around w-[100%]'>
              <ConnectButton label='Connect' />
            <button className='text-white border border-white rounded-xl py-[10px] px-[15px]'>Mint NFTs</button>
          </div>
        </div>
        <div className=' w-[30%] flex items-center justify-center'>
            <Image src={'/spiral.png'} alt='spiral' height={200} width={200}   />
        </div>
    </div>
  )
}

export default Hero