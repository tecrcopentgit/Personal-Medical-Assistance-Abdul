import appLogo from '../assets/logo/abh_med_app_logo.png';
import appfullLogo from '../assets/logo/abh_med_logo.png';

export default function FooterSection(){

    return (<>
        
        <footer className='bg-gradient-to-b from-purple-800/60 to-black p-2 text-center text-xl flex-col flex md:flex-row justify-center  md:justify-around items-center'>
           <div data-aos='zoom-in'> 
            <img src={appLogo} className='md:h-80' />
         <h1><strong>ABDUL</strong>&copy;Personal Med Assistance&trade;</h1>
         </div>

 <div className=' text-xl p-2 flex flex-col' data-aos='zoom-out'>
       <img src={appfullLogo} className='h-40 w-40 rounded'/>
       <p>MedCOPENT 2026</p>
         </div>

         <div data-aos='zoom-in'>
 <div className=' p-10  rounded '>
<span className='underline'>MedCOPENT </span>&trade;
<strong>
   <div>
             <a href='https://abdulhaadhifolio.netlify.app' className='hover:text-amber-300'>ABDUL HAADHI</a>
         <p>NARASHIMA RAJA</p>
         <p>MOHAMED HARUN</p>
         <p>MOHAMED RAZIM</p>
        </div>
        </strong>
       
    
        </div>
   <h1 className='font-thin'>web application in devolopment..!</h1>

         </div>
         
        
        </footer></>
    )
}