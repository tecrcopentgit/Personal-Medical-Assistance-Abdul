import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import appLogo from '../../assets/logo/abh_med_app_logo.png';

import  {Button} from './AuthSec.jsx';
import Loading from './Loading.jsx';
import Login from './Login.jsx';





import {userMed} from '../../NodeSection/usersArray.js';
export const inputStyle = ' p-4 rounded lg:w-full md:font-bold bg-gradient-to-l hover:text-amber-100 from-purple-900/80 to-blue-900 shadow-xl border-xl border-amber-900 hover:bg-black'
export default function Register(){
    const [loadState , setLoadState] = useState(<Loading show='hidden'  section='' />)
    const navigate = useNavigate();
    const [userForm , setUserForm ] = useState(userMed);
    
   
    function RegisterB(){
        navigate('/login')
    }


    const handleInput = (e) => {
        const {name , value } = e.target;
        setUserForm({ ...userForm , [name]:value})
       
    }

    const handleSubmit = async (e) => {
        setLoadState(<Loading show='block'  section='Registration'/>)
        e.preventDefault();
        
        try{

const res = await fetch(`https://personal-medical-assistance-abdul.onrender.com/register` ,{method:"POST" ,headers:{"Content-Type":"application/json"} ,body:JSON.stringify(userForm)}  )
         const result = await res.json();
         console.log('the form is '+result.user);
         localStorage.setItem('result' ,result.user);
         console.log(result.user)
         console.log('form submitted')

        
        if (result.error){
            alert(result.error);
        }
        else{
            

            navigate("/login")
        }
        

        }catch(err){
            
            console.log(err);
            alert(err);
        }
        
       
        
    }

    return(
        <>
       {loadState}
        <div className='bg-stone-500/50 text-stone-950 rounded text-center bg-cover  grid grid-col-1 md:p-4 m-2 md:m-2 text-xl ' data-aos='fade-in'>
             <div className=' rounded  lg:text-xl text-center lg:mx-96 mx-10  md:mx-6  bg-rose-900/30 flex flex-col items-center mt-2' data-aos='slide-right'>
             <h1><img className='lg:h-20 lg:w-20 lg:mx-64 mx-20   h-10 w-10' src={appLogo}/></h1>
             <h1>User Registration</h1></div>
             
            
           <form onSubmit ={handleSubmit} className=' p-5 grid grid-rows-1'>
        <span>Name:</span>
        <input placeholder='Enter your Name'  type='text' name='userName'onChange={handleInput} value ={userForm.userName} className={inputStyle } required  />

    <span>Age:</span>
    <input placeholder='Enter your Age' type='number' name='userAge' onChange={handleInput} value={userForm.userAge} className={inputStyle} required/>

    

    <span>Gender:</span><select name='userGender' value={userForm.userGender} className={inputStyle} onChange={handleInput} required>
    <option value="">Select Gender</option>
    <option value='male'>Male</option>
    <option value='female'>Female </option>
    </select>

    <label>Password:</label><input name='userPassword' type='password'placeholder='Enter your valid password' value={userForm.userPassword} className={inputStyle} onChange={handleInput} required />
    <button type='submit' className='rounded bg-blue-800/50 mt-10 p-5 hover:bg-slate-800 hover:text-amber-700' >Register</button>
        </form>

            <Button buttonName='Login'  onButtonClick={RegisterB} spanText='Already a user?' printText='Click here to Login!...!' />
            </div>
        
        </>
    )
}