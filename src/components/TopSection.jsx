
import {useState} from 'react';
import {Stethoscope} from 'lucide-react';

import appLogo from '../assets/logo/abh_med_app_logo.png';

import Logout  from '../components/AuthSection/Logout.jsx';
import NotifySection from './NotifySection.jsx';
import { userMedDV } from '../NodeSection/usersArray.js';
import { LogOut ,RefreshCcw } from 'lucide-react';


export const notifyView = 'block';
export const show = (userMedDV.username !== undefined) ? 'block' : 'hidden';
export const buttonStyle = ` hover:text-red-900 md:hover:border-2 border-orange-700 md:bg-amber-600/40 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-16 lg:w-16 h-10  rounded-full flex items-center justify-center md:hover:bg-slate-300`
export default function TopSection(){

 const [logState , setLogState ] = useState();
  const TriggerLogout = () => {

    setLogState (<Logout Lshow={`hidden`}/>)
   
    
    }
   
   
   
    

    function handleRefresh(){
      window.location.reload();
    }
    
    return (
      
        <>
        
        <div className=" bg-gradient-to-tr from-cyan-900 to-purple-900 flex flex-rowbg-red-900/50 p-5 text-stone-200  justify-between">
         
          <div className=' font-body sm:text-5xl flex gap-5'> 
            <div ><img src={appLogo} className='sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-16 lg:w-16 h-10 bg-green-300/50 hover:bg-red-600/20 rounded-full'/></div>
            <div className='mt-2'data-aos='fade-in' ><h1 className='flex'><Stethoscope data-aos='slide-left'/><strong>MedCOPENT</strong><span>&trade;</span></h1></div>
            
          
          
          </div>
          <div className='flex gap-6 px-2 rounded'>
          <div className={`${show} hover:text-black text-purple-300`}><NotifySection/></div>
            
            
              <button className={buttonStyle} onClick={handleRefresh}><RefreshCcw/></button>
          <button className={ `${show} ${buttonStyle}`} onClick={TriggerLogout}>
            
          <LogOut /></button>
        </div>
        
         
        {logState}
        </div>
        </>
    )
}