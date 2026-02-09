import NavigationSection from "../components/NavigationSection.jsx";

import {useState} from 'react';

import { userDoctor } from "../NodeSection/usersArray.js";

import { inputStyle } from "../components/AuthSection/Register.jsx";
import { ArrowBigLeft } from "lucide-react";





export default function DoctorField(){

    const [docFieldState , setDocFieldState ] = useState('0');

    function handleDocSec(){
        setDocFieldState('1')
    }

    return (
    <>
    
    <NavigationSection/>
        <div data-aos='zoom-in'>
            
           <div className='bg-yellow-950/20 m-5 lg:m-20 text-center' >

           {docFieldState === '0' ? <div ><h2 className='p-24'>There is no doctors here and no Doctors you have to consult...</h2>
            <button className='bg-teal-500/50 hover:bg-slate-300 hover:text-black rounded p-4 m-3' onClick={handleDocSec}>Add Doctor Details</button></div>:
           <div className=' p-5 m-2 '>
            <button onClick={() => {setDocFieldState('0')}} className='bg-amber-300/50 hover:bg-black p-4 rounded'><ArrowBigLeft/></button>
                <form className='flex flex-col items-center gap-4' data-aos='fade-in'>
                   <span>Doctor Name</span> <input className={inputStyle} required/>
                    <span>Consulting for.</span><input className={inputStyle} required/>
                    <button className='bg-purple bg-rose-500 hover:bg-orange-900 w-fit rounded p-4'>Add Doctor details...</button>

                </form>
            </div>}
        </div></div>
   
    
    </>
    
    )
}