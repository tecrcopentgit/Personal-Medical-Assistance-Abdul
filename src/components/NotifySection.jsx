import { ArrowLeft , SquareStack} from "lucide-react"

import { notifyView , show , buttonStyle} from "./TopSection.jsx";

import {useState , setState} from 'react';
import { notifylists } from "../NodeSection/notifications.js";


export default function NotifySection(){
    
const NotifyBarSec = () => {
    const FallbackNotifyBar = () => {return (<div><h2>there is no notifications , right now.....!</h2></div>)}
    return <div className={` ${nShow} absolute md:fixed right-0  top-0 z-50 bg-slate-600/50 md:bg-gradient-to-bl from-red-500/50 to-violet-800/50 text-black flex flex-col h-full w-full  md:w-96`} data-aos='fade-right-in'>
        <button className='bg-green-500/70 border-2 border-amber-700 hover:bg-slate-500/20 hover:text-red-900 m-2 md:mx-2 mx-8 rounded-full h-8 w-8 text-center  ' onClick={() => {setNotifySec(<NotityButton/>)}} >
        <ArrowLeft/></button> 
        <div  >
{notifylists.length === 0 && <FallbackNotifyBar/>}
<ul>

    {notifylists.map((notifier , i) => (<li key={i} className='bg-slate-950/90 md:mt-3 rounded md:mx-2 p-5 hover:bg-stone-900 hover:text-green-400 text-stone-200 shadow-sm shadow-violet-800' data-aos='slide-right'>
    <h1 className='text-xl font-bold'><span className='bg-rounded rounded font-bold text-red-700 hover:text-green-700 '>|</span>{notifier.title}</h1><p>{notifier.content}</p></li>))}
            
</ul>
 
        </div>
        
       
    </div>}
    const [nShow , setNShow ] = useState(`block`);
    function handleButton(){
        setNShow(`hidden`);
        setNotifySec(<NotifyBarSec/>)
        
    }

    const NotityButton = () => {return <button  className={`${buttonStyle}`} onClick={handleButton} ><SquareStack/><span className=' font-bold '>{notifylists.length}</span></button>}
    

const [notifySec , setNotifySec ] = useState(<NotityButton/>);




    return (
        <> 
        {notifySec}
        
        </>
    )
}