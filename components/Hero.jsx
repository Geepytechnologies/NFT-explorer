import Image from 'next/image'
import {
  ConnectButton,
} from "@rainbow-me/rainbowkit";
import { useState } from 'react';
import { SiBlockchaindotcom } from 'react-icons/si'
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import abi from '../abi/Leadguitars.json'

const Hero = () => {
  const [modal, setModal] = useState(false);
  const [file, setFile] = useState();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [supply, setSupply] = useState();

  const {config} = usePrepareContractWrite({
    address: '0xf1e4062FE35c272D6F0fe03C73079f0a9A0F4Ca2',
    contractInterface: abi.ContractInterface,
    functionName: "mint",
    args: [10,"https://ipfs.io/ipfs/Qmax97geTf4eB747oYZdAzHhLqMbKUymvVUgU7hzdsK83N"]
  })
  const {write: mint, isSuccess} = useContractWrite(config);


  return (
    <div className='h-[auto] w-[100%] my-[30px] flex flex-col md:flex-row justify-center items-center'>
        <div className='w-[100%] md:w-[70%] pb-[20px] pl-[20px]'>
          <p className='text-white text-[50px] font-[500] leading-[70px] font-sans'>Discover Extraordinary<br/><span className='font-[400] font-sans nftspan'> NFTs</span></p>
          <Image src={'/lightening.png'} alt="light" height={200} width={200} />
          <p className='text-white text-[18px] mb-[5px]'>The largest and unique Super rare NFT marketplace For crypto-collectibles</p>
          <div className='flex flex-row items-center justify-around md:w-[60%] sm:w-[50%] w-[80%]'>
            <ConnectButton label='Connect' />
            <button onClick={()=>setModal(true)} className='text-white border border-white rounded-xl py-[10px] px-[15px]'>Mint NFTs</button>
          </div>
        </div>
        <div className=' w-[30%] flex items-center justify-center'>
            <Image src={'/spiral.png'} alt='spiral' height={200} width={200}   />
        </div>
        {modal && 
          <div className='bg-[#000000b3] z-[999] w-[100vw] fixed top-0 left-0 h-[100vh] flex items-center justify-center '>
            <div className='bg-white w-[90%] md:w-[60%] rounded-lg flex items-center justify-center'>
                <div className='p-[10px] w-[90%] flex flex-col items-center justify-center'>
                <div className='flex flex-1 flex-row items-center justify-center'>
                    <SiBlockchaindotcom className='text-[#555] text-[25px]' />
                    <SiBlockchaindotcom className='text-[#ef1e41] font-sans text-[25px] -translate-x-[21px]'/>
                <p className="text-[#555] text-[28px] font-[600]">NFT <span className='font-sans text-[#15bffd]'>hub</span></p>
            </div>
                    <p className='text-[40px] font-[600]'>Create New Item</p>
                    <p className="text-[rgb(112, 122, 131)] font-[500] text-[12px]"><span className='text-[red]'>*</span>Required fields</p>
                    <div className='w-[100%] mt-[8px]'>
                        <label className="text-[rgb(53, 56, 64)] font-[600] text-[16px]">Image, Video, Audio, or 3D Model<span className='text-[red]'>*</span></label>
                        <input onChange={(e)=>setFile(e.target.files)} type='file' className='w-[100%] outline-0 border border-[#888] rounded-lg p-[5px]'  />
                    </div>
                    <div className='w-[100%]'>
                        <label className="text-[rgb(53, 56, 64)] font-[600] text-[16px]">Name<span className='text-[red]'>*</span></label>
                        <input onChange={(e)=>setName(e.target.value)} type='text' className='w-[100%] outline-0 border border-[#888] rounded-lg p-[5px]'  />
                    </div>
                    <div className='w-[100%]'>
                        <label className="text-[rgb(53, 56, 64)] font-[600] text-[16px]">External Link</label>
                        <input onChange={(e)=>setLink(e.target.value)} type='text' className='w-[100%] outline-0 border border-[#888] rounded-lg p-[5px]'  />
                    </div>
                    <div className='w-[100%]'>
                        <label className="text-[rgb(53, 56, 64)] font-[600] text-[16px]">Description<span className='text-[red]'>*</span></label>
                        <textarea onChange={(e)=>setDescription(e.target.value)} type='' className='w-[100%] min-h-[150px] outline-0 border border-[#888] rounded-lg p-[5px]'  />
                    </div>
                    <div className='w-[100%]'>
                        <label className="text-[rgb(53, 56, 64)] font-[600] text-[16px]">Supply</label><br />
                        <label className="text-[rgb(112, 122, 131)] font-[500] text-[12px]">The number of items that can be minted. No gas cost to you!</label>
                        <input onChange={(e)=>setSupply(e.target.value)} type='number' className='w-[100%] outline-0 border border-[#888] rounded-lg p-[5px]'  />
                    </div>
                    <div className='flex mt-[7px]'>
                        <button onClick={()=>setModal(!modal)} className='border border-[#444] py-[8px] px-[13px] rounded-lg mr-[8px]'>Cancel</button>
                        <button onClick={()=>mint?.()} className='bg-[#38a169] py-[8px] px-[15px] text-white rounded-lg'>Mint</button>
                    </div>
                </div>
            </div>
          </div>
        }{modal && 
          <div className='bg-[#000000b3] w-[100vw] fixed top-0 left-0 h-[100vh] flex items-center justify-center '>
            <div className='bg-white w-[90%] md:w-[60%] rounded-lg flex items-center justify-center'>
                <div className='p-[10px] w-[90%] flex flex-col items-center justify-center'>
                <div className='flex flex-1 flex-row items-center justify-center'>
                    <SiBlockchaindotcom className='text-[#555] text-[25px]' />
                    <SiBlockchaindotcom className='text-[#ef1e41] font-sans text-[25px] -translate-x-[21px]'/>
                <p className="text-[#555] text-[28px] font-[600]">NFT <span className='font-sans text-[#15bffd]'>hub</span></p>
            </div>
                    <p className='text-[40px] font-[600]'>Create New Item</p>
                    <p className="text-[rgb(112, 122, 131)] font-[500] text-[12px]"><span className='text-[red]'>*</span>Required fields</p>
                    <div className='w-[100%]'>
                        <label className="text-[rgb(53, 56, 64)] font-[600] text-[16px]">Image, Video, Audio, or 3D Model<span className='text-[red]'>*</span></label>
                        <input type='file' className='w-[100%] outline-0 border border-[#888] rounded-lg p-[5px]'  />
                    </div>
                    <div className='w-[100%]'>
                        <label className="text-[rgb(53, 56, 64)] font-[600] text-[16px]">Name<span className='text-[red]'>*</span></label>
                        <input type='text' className='w-[100%] outline-0 border border-[#888] rounded-lg p-[5px]'  />
                    </div>
                    <div className='w-[100%]'>
                        <label className="text-[rgb(53, 56, 64)] font-[600] text-[16px]">External Link</label>
                        <input type='text' className='w-[100%] outline-0 border border-[#888] rounded-lg p-[5px]'  />
                    </div>
                    <div className='w-[100%]'>
                        <label className="text-[rgb(53, 56, 64)] font-[600] text-[16px]">Description<span className='text-[red]'>*</span></label>
                        <textarea type='' className='w-[100%] min-h-[150px] outline-0 border border-[#888] rounded-lg p-[5px]'  />
                    </div>
                    <div className='w-[100%]'>
                        <label className="text-[rgb(53, 56, 64)] font-[600] text-[16px]">Supply</label><br />
                        <label className="text-[rgb(112, 122, 131)] font-[500] text-[12px]">The number of items that can be minted. No gas cost to you!</label>
                        <input type='number' className='w-[100%] outline-0 border border-[#888] rounded-lg p-[5px]'  />
                    </div>
                    <div className='flex mt-[7px]'>
                        <button onClick={()=>setModal(!modal)} className='border border-[#444] py-[8px] px-[13px] rounded-lg mr-[8px]'>Cancel</button>
                        <button className='bg-[#38a169] py-[8px] px-[15px] text-white rounded-lg'>Mint</button>
                    </div>
                </div>
            </div>
          </div>
        }
    </div>
  )
}

export default Hero