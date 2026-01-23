
import {useState , useContext} from 'react';

import {userMed} from '../NodeSection/usersArray.js';

 export const userName = localStorage.getItem('userName');

export default function Hero(){

   
    
 
    return (
        <>
        <div className="font-heading bg-stone-700/80 text-lime-100 p-5 ">
 <h2 className='font-heading'><strong className='text-red-300 text-2xl font-bold '>|
    </strong> Hello <strong className='text-cyan-400'>{userName}</strong> , This is the Web application for Your Medical Purposes and Assistance.! </h2>
        </div>
        </>
    )
}