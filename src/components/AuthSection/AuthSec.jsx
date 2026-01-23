

import {useState} from 'react';
import Register from './Register.jsx';
import Login from './Login.jsx';

import { useNavigate } from 'react-router-dom';
import BodyComp from '../bodyComp.Jsx';
 
export const Button  = ({buttonName  , spanText , printText ,onButtonClick }) => {
    
    return(
    <div className='bg-gradient-to-br from-purple-700/20 to-orange-600/20 rounded text-blue-300 font-bold mt-10 p-6 w-full'>
        <span className='text-stone-900'>{spanText}</span>
        <p>{printText}</p>
        <button className='rounded p-5 bg-green-400/50 hover:bg-amber-700/40' onClick={onButtonClick}>{buttonName}</button>
        </div>
    )
} 

export default function AuthSec(){


    const navigate = useNavigate();
    function handleRegisterClick(){
        navigate('/register');
        
    }

    function handleLoginClick(){
        navigate('/login')
    }


   



   
    return (
        <div>

    <div className='text-center bg-black/30 rounded  p-10 m-10  '>
<h1>User Authentication</h1>
<Button 
buttonName='Register' 
buttonClass='rounded bg-green-200/40 p-4 ' 
spanText='New User?...!' 
printText='Click below to Register your Information'
onButtonClick={handleRegisterClick}

/>


<Button 
buttonName='Login ' 
buttonClass='rounded bg-green-200/40 p-4 '
spanText='Already have a user Account..?'
printText='Click Below to Login..!'
onButtonClick={handleLoginClick}

 />


</div>
        
       
        </div>
    )
}