
import { userMedDV } from '../../NodeSection/usersArray';

import {useState} from 'react';
import { useNavigate  } from 'react-router-dom';

import FooterSection from '../FooterSection';


export default function Logout(Lshow){
    const [show , setShow ] = useState(`block`);
    const navigate = useNavigate();


async function LogOut(){ 

  navigate('/login')
  setShow(`hidden`)
  localStorage.removeItem('data');
 
}



return (<dialog className={` ${show} fixed flex flex-col justify-center absolut  bg-teal-700/80  rounded z-20 h-screen w-full  items-center text-2xl`}
data-aos='fade-in'>
  <div className='bg-red-950/50 p-10 rounded'>

      <h2 className='text-3xl text-stone-200'>Are your sure to logout?</h2>
  <div className='flex flex-row gap-5 my-5 justify-center'>

  <button className='bg-slate-500 rounded p-5 hover:bg-slate-100/40 hover:text-red-900 ' onClick={() => { navigate('/body'); setShow('hidden');window.location.reload();}}>Back</button>
  <button className='bg-amber-500/50 rounded p-5 hover:bg-slate-100/40 hover:text-red-900' onClick={LogOut}>Sure</button>
  
  </div>
  </div>

  
</dialog>)
}

