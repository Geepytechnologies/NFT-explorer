import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'
import { Network, Alchemy } from "alchemy-sdk"
import axios from 'axios'

const Topcollections = () => {
  const { address, isConnecting, isConnected, isDisconnected } = useAccount();
  const [alchemy, setAlchemy] = useState(null);
  const [nfts, setNfts] = useState([]);
  const [connected, setConnected] = useState(false);
  useEffect(()=>{
    const settings = {
      apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID, 
      network: Network.ETH_GOERLI, 
    };
    const myalchemy = new Alchemy(settings)
    setAlchemy(myalchemy);
  },[])
  useEffect(()=>{
      if(isConnected && alchemy && address){
          setConnected(true);
          fetchNFTs(address);
        }
    },[isConnected,alchemy,address])
  const fetchNFTs = async (address)=>{
      const nftsForOwner = await alchemy.nft.getNftsForOwner(address);
      for (let i = 0; i < nftsForOwner?.ownedNfts.length; i++) {
        const nft = nftsForOwner?.ownedNfts[i];
        const metadata = await axios(nft?.tokenUri?.raw);
        nftsForOwner.ownedNfts[i].metadata = metadata.data;
      }
      setNfts(nftsForOwner.ownedNfts);
  }
  return (
    <div className='mb-[80px] w-[100%]'>
        <div className='text-white mb-[15px] flex flex-col items-center justify-center w-[100%]'>
            <p className='font-sans text-[25px] text-[#15bffd]'>Top Collections</p>
            <p className='text-center'>The largest and unique Super rare NFT explorer For crypto-collectibles</p>
        </div>
        <div className='w-[100%] grid grid-cols-1 content-center justify-items-center md:grid-cols-3 gap-4'>
            {nfts?.map((nft, index)=>(
                <div className="box border border-white w-[300px] h-[auto]  pb-[10px] mb-[20px]" key={index}>
                    {nft.metadata.image && <div className=' w-[100%] h-[300px] inline-block border border-[#15bffd81] relative clip'>
                        <Image src={nft?.metadata.image} decoding='async' alt='lespaul' fill={true} className="object-cover" />
                    </div>}
                    <div className='pl-[3px]'>
                        <p className='text-white font-[600] text-[20px]'>{nft?.metadata.name}</p>
                        <p className='text-white'>{nft?.metadata.description}</p>
                        {nft.metadata.attributes && nft?.metadata.attributes.map((item, index)=>(
                            <button key={index} className=' bg-[#ef1e41] mr-[3px] mt-[5px] text-white py-[5px] px-[10px]'>{Object.keys(item)} : {Object.values(item)}</button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        {connected && nfts.length < 1 ? <p className='text-white text-center font-sans text-[20px]'>You don&apos;t have any collection yet</p> : !connected ? <p className='text-white text-center font-sans text-[20px]'>Please Connect a wallet to view NFTs</p> : null}
    </div>
  )
}

export default Topcollections