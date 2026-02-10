import appLogo from '../../assets/logo/abh_med_app_logo.png'


import { useNavigate } from 'react-router-dom';

 
export const Button  = ({buttonName  , spanText , printText ,onButtonClick }) => {
    
    return(
    <div className=' mt-10   text-blue-300 font-bold  md:w-fit lg:w-full p-2' data-aos='zoom-in'>
        <span className='text-stone-900'>{spanText}</span>
        <p>{printText}</p>
        <button className='rounded p-5 shadow-xl shadow-slate-900 bg-red-400/50 hover:bg-amber-700/40' onClick={onButtonClick} >{buttonName}</button>
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

    <div className='text-center bg-stone-800/40 rounded  p-10  ' data-aos='fade-in'>
<div className=' rounded  lg:text-xl text-center lg:mx-96 mx-10  md:mx-6  bg-rose-900/30 shadow-xl shadow-black/60 flex flex-col items-center' data-aos='slide-right'>
<h1><img className='lg:h-20 lg:w-20 lg:mx-64 mx-20   h-10 w-10' src={appLogo}/></h1>
<h1>User Authentication</h1></div>

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