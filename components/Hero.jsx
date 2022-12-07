import Image from 'next/image'
import {
  ConnectButton,
} from "@rainbow-me/rainbowkit";
import { useState, useEffect  } from 'react';
import { SiBlockchaindotcom } from 'react-icons/si'
import { useContract, useSigner } from 'wagmi';
import {ABI} from '../abi/Leadguitars'
import { create } from 'ipfs-http-client'
import ClipLoader from "react-spinners/ClipLoader";


const Hero = () => {
  const [modal, setModal] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [imageURL, setImageURL] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [file, setFile] = useState();
  const [supply, setSupply] = useState();
  const [loading, setLoading] = useState(false);

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  
  const nftAddress = "0xb295b4F0F22dB03C325EF3675b7BA536b2733d14";
  
  const { data: signer, isError, isLoading } = useSigner();
  const contract = useContract({
    address: nftAddress,
    abi: ABI,
    signerOrProvider: signer
  });

  const upload = async ()=>{
    setClicked(true);
    const auth = "Basic " + Buffer.from("2IUueq7UHwKG7IA6cCs195KCLUU" + ":" + "1865d53c5e4b85edf3b756517592e9ea").toString("base64");
    const client = create({url: "https://ipfs.infura.io:5001",
    headers: {
        authorization: auth,
      },
  });
    const {path} = await client.add(file);
    setImageURL(`https://ipfs.io/ipfs/${path}`)
  }

  const createNFT = async (e)=>{
    e.target.disabled= true;
    setLoading(true);
    if (!title || !description || !supply || !imageURL){
      alert("Please Input all Required Fields");
    }else{
      const metadata = {
        name: title,
        description,
        link,
        supply,
        image: imageURL
      };
      const auth = "Basic " + Buffer.from("2IUueq7UHwKG7IA6cCs195KCLUU" + ":" + "1865d53c5e4b85edf3b756517592e9ea").toString("base64");
    const client = create({url: "https://ipfs.infura.io:5001",
    headers: {
        authorization: auth,
      },
    });
    const {path} = await client.add(JSON.stringify(metadata));
    try{
      const minting = await contract?.mint(supply, `https://ipfs.io/ipfs/${path}`);
      if(minting){
        setLoading(false);
        alert("Your NFT has been Minted");
        setModal(!modal);
      }else{
        alert("Your NFT could not be minted, try again");
      }
    }catch(err){
      const message = err.message;
      cancel();
    }
    
    }
  }

  useEffect(()=>{
     setClicked(false);
  },[file])

  const cancel = ()=>{
    setModal(!modal);
    setImageURL(null);
    setTitle('');
    setDescription('');
    setSupply();
    setFile();
    setClicked(false);
  }

  return (
    <div className='h-[auto] w-[100%] my-[30px] flex flex-col md:flex-row justify-center items-center'>
        <div className='w-[100%] md:w-[70%] pb-[20px] pl-[20px]'>
          <p className='text-white text-[50px] font-[500] leading-[70px] font-sans'>Discover Extraordinary<br/><span className='font-[400] font-sans nftspan'> NFTs</span></p>
          <Image src={'/lightening.png'} alt="light" height={200} width={200} />
          <p className='text-white text-[18px] mb-[5px]'>The largest and unique Super rare NFT Explorer For crypto-collectibles</p>
          <div className='flex flex-row items-center justify-around md:min-w-[60%] sm:min-w-[70%] w-[90%]'>
            <ConnectButton label='Connect' />
            <button onClick={()=>setModal(true)} className='text-white border border-white rounded-xl py-[10px] px-[15px]'>Mint NFTs</button>
          </div>
        </div>
        <div className=' w-[30%] flex items-center justify-center'>
            <Image src={'/spiral.png'} alt='spiral' height={200} width={200}   />
        </div>
        {modal && 
          <div className='bg-[#000000b3] z-[999] w-[100vw] fixed top-0 left-0 h-[100vh] flex items-center justify-center '>
            <div className='bg-white max-h-[98%] overflow-y-scroll w-[90%] md:w-[60%] rounded-lg flex items-center justify-center'>
              <div className="flex justify-center h-[100%] w-[100%] items-center">
                <div className='p-[10px] w-[90%] flex flex-col items-center justify-center'>
                    <div className='mt-[90px] flex w-[100%] flex-1 flex-row items-center justify-center'>
                        <SiBlockchaindotcom className='text-[#555] text-[25px]' />
                        <SiBlockchaindotcom className='text-[#ef1e41] font-sans text-[25px] -translate-x-[21px]'/>
                        <p className="text-[#555] text-[28px] font-[600]">NFT <span className='font-sans text-[#15bffd]'>hub</span></p>
                    </div>
                    <p className='text-[40px] font-[600]'>Mint New NFT</p>
                    <p className="text-[rgb(112, 122, 131)] font-[500] text-[15px]"><span className='text-[red]'>*</span>Required fields</p>
                    <div className='w-[100%] mt-[8px] mb-[8px]'>
                        <label className="text-[rgb(53, 56, 64)] font-[600] text-[16px]">Image<span className='text-[red]'>*</span></label>
                        <input onChange={(e)=>setFile(e.target.files[0])} accept="image/png, image/jpeg" type='file' id="nft" className='w-[100%] outline-0 border border-[#888] rounded-lg p-[5px]'  />
                        <p>Click on the upload button after choosing an Image</p>
                        {!clicked ? <button onClick={()=>upload()} className='bg-[#ef1e41] py-[8px] px-[15px] text-white rounded-lg'>Upload</button> : <button disabled={true} className='bg-[#38a169] py-[8px] px-[15px] text-white rounded-lg'>Done</button> }
                    </div>
                    <div className='w-[100%]'>
                        <label className="text-[rgb(53, 56, 64)] font-[600] text-[16px]">Title<span className='text-[red]'>*</span></label>
                        <input onChange={(e)=>setTitle(e.target.value)} type='text' className='w-[100%] outline-0 border border-[#888] rounded-lg p-[5px]'  />
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
                        <label className="text-[rgb(53, 56, 64)] font-[600] text-[16px]">Supply<span className='text-[red]'>*</span></label><br />
                        <label className="text-[rgb(112, 122, 131)] font-[500] text-[12px]">The number of items that can be minted. No gas cost to you!</label>
                        <input onChange={(e)=>setSupply(e.target.value)} type='number' className='w-[100%] outline-0 border border-[#888] rounded-lg p-[5px]'  />
                    </div>
                    <div className='flex mt-[7px]'>
                        {!loading && <button onClick={cancel} className='border border-[#444] py-[8px] px-[13px] rounded-lg mr-[8px]'>Cancel</button>}
                        {!loading ? <button onClick={createNFT} className='bg-[#38a169] py-[8px] px-[15px] text-white cursor-pointer rounded-lg'>Mint</button> : 
                        <button  className='bg-[#38a169] min-w-[100px] py-[10px] px-[15px] text-white cursor-pointer rounded-lg'>
                          <ClipLoader
                            color={"white"}
                            loading={loading}
                            cssOverride={override}
                            size={30}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                          />
                        </button> }
                    </div>
                </div>
              </div>
            </div>
          </div>
        }
    </div>
  )
}

export default Hero