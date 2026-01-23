
import {useState , createContext , useEffect , useContext } from 'react';

import {userMed} from '../../NodeSection/usersArray.js';

import {Button} from './AuthSec.jsx';
import { useNavigate } from 'react-router-dom';

import {inputStyle} from './Register.jsx';






export default function Login(){

    const navigate = useNavigate();

function LoginB(){
    navigate('/register')
}

 
    const [loginForm , setLoginForm] = useState(userMed.userName , userMed.userPassword)
   

    function handleInput(e){
        const {name , value} = e.target;
        setLoginForm({...loginForm , [name]:value})
        

    }



async function handleSubmit(e){
   
        e.preventDefault();

        const res = await fetch ('https://personal-medical-assistance-abdul.onrender.com/login',{method:"POST",headers:{"Content-Type":"application/json"} ,body:JSON.stringify(loginForm)});
        const data = await res.json();

        
localStorage.setItem("userName" , data.username)

        if(data.error){
            alert(data.error);
            
           
        }

        else{
            
           localStorage.setItem("token", data.token);
           
           localStorage.setItem("userId", data.id);
           
           
           
           const dom = '/body';
          
           navigate(dom);
        }
            

        
    }
    

    
   

 

    return (
        <>
        

        <div className='bg-stone-500/50 text-stone-950 rounded text-center bg-cover  grid grid-col-1 p-4  m-2 text-xl '>
        <div ><h2 className='font-bold text-2xl text-stone-800 border-2 w-fit text-center p-4 rounded bg-slate-900/40 border-amber-600 mx-20'>User Login</h2></div>
        <form onSubmit={handleSubmit} className=' p-5 grid grid-rows-1 ' >

           <span>User Name</span>
       <input placeholder='Enter a registered user name' name='userName' type='text' value={loginForm.userName} onChange={handleInput} className={inputStyle}/>

       <span>Password</span>
       <input placeholder='Enter your Password' name='userPassword' type='password' value={loginForm.userPassword} onChange={handleInput} className={inputStyle}  />

       <button  type='submit'  className='rounded bg-blue-800/50 mt-10 p-5'>Login</button>
        
            
            
        </form>
        <Button
        spanText='New User?...!'
        printText='Click to Register your user account...!'
        
        buttonName='Register'
        onButtonClick={LoginB}

        />
        </div>
        


        
        
        </>
    )
}