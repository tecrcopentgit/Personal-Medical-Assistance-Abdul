import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import  {Button} from './AuthSec.jsx';
import Login from './Login.jsx';




import {userMed} from '../../NodeSection/usersArray.js';
export const inputStyle = 'border-none p-4 rounded'
export default function Register(){
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
       
        <div className='bg-stone-500/50 text-stone-950 rounded text-center bg-cover  grid grid-col-1 p-4  m-2 text-xl '>
             <div ><h2 className='font-bold text-2xl text-stone-800 border-2 w-fit text-center p-4 rounded bg-slate-900/40 border-amber-600 mx-20'>User Registration</h2></div>
            
           <form onSubmit ={handleSubmit} className=' p-5 grid grid-rows-1 '>
        <span>Name:</span>
        <input placeholder='Enter your Name' type='text' name='userName'onChange={handleInput} value ={userForm.userName} className={inputStyle } required  />

    <span>Age:</span>
    <input placeholder='Enter your Age' type='number' name='userAge' onChange={handleInput} value={userForm.userAge} className={inputStyle} required/>

    

    <span>Gender:</span><select name='userGender' value={userForm.userGender} className={inputStyle} onChange={handleInput}>
    <option value="">Select Gender</option>
    <option value='male'>Male</option>
    <option value='female'>Female </option>
    </select>

    <label>Password:</label><input name='userPassword' type='password' value={userForm.userPassword} className={inputStyle} onChange={handleInput} />
    <button type='submit' className='rounded bg-blue-800/50 mt-10 p-5' >Register</button>
        </form>

            <Button buttonName='Login'  onButtonClick={RegisterB} spanText='Already a user?' printText='Click here to Login!...!' />
            </div>
        
        </>
    )
}