
import {useState , createContext , useEffect , useContext } from 'react';
import appLogo from '../../assets/logo/abh_med_app_logo.png';
import {userMed} from '../../NodeSection/usersArray.js';
import Loading from '../../components/AuthSection/Loading.jsx';

import {Button} from './AuthSec.jsx';
import { useNavigate } from 'react-router-dom';

import {inputStyle} from './Register.jsx';






export default function Login(){

    const navigate = useNavigate();
    const [loadState , setLoadState] = useState({show:'hidden', section:''});

function LoginB(){


 
        navigate('/register')
       
        

    }
  

 
    const [loginForm , setLoginForm] = useState(userMed.userName , userMed.userPassword)
   

    function handleInput(e){
        const {name , value} = e.target;
        setLoginForm({...loginForm , [name]:value})
        

    }



async function handleSubmit(e){
    
    setLoadState({show:'block' , section:'Login'})
        e.preventDefault();

       
        const res = await fetch ('https://personal-medical-assistance-abdul.onrender.com/login',{
         method:"POST",
         headers:{"Content-Type":"application/json"} ,
         body:JSON.stringify(loginForm)});
         
        const data = await res.json();
        var dataUser = JSON.stringify(data.user);
            localStorage.setItem('data' , dataUser)
        


        


        if(data.error){
            alert(data.error +' ...click OK to try again..!');
            window.location.reload();
            localStorage.removeItem('data');
            dataUser = [];
           
        }

        else{
            
          
           
          
           
           
           
           const dom = '/body';
          dataUser=[];
           navigate(dom);
          
        }
            

        
    }
    

    
   

 

    return (
        <>
            <Loading  show={loadState.show}  section={loadState.section} />
     
        <div className='bg-stone-500/50 text-stone-950 rounded text-center bg-cover  grid grid-col-1 md:p-4 m-2 md:m-2 text-xl' data-aos='fade-in'>
        <div className=' rounded  lg:text-xl text-center lg:mx-96 mx-10  md:mx-6  bg-rose-900/30 flex flex-col items-center' data-aos='slide-right'>
        <h1><img className='lg:h-20 lg:w-20 lg:mx-64 mx-20   h-10 w-10' src={appLogo}/></h1>
        <h1>User Login</h1></div>
        
        <form onSubmit={handleSubmit} className=' p-5 grid grid-rows-1 ' >

           <span>User Name</span>
       <input placeholder='Enter a registered user name' name='userName' type='text' value={loginForm.userName} onChange={handleInput} className={inputStyle} required/>

       <span>Password</span>
       <input placeholder='Enter your Password' name='userPassword' type='password' value={loginForm.userPassword} onChange={handleInput} className={inputStyle} required />

       <button  type='submit'  className='rounded bg-blue-800/50 mt-10 p-5 hover:bg-stone-700'>Login</button>
        
            
            
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