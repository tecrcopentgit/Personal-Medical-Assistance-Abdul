
import appLogo from '../assets/logo/abh_med_app_logo.png';

export default function TopSection(){

    return (
        <>
        <div className="bg-red-900/50 p-5 text-stone-200 ">
         
          <div className=' font-body sm:text-5xl flex gap-5'> 
            <div ><img src={appLogo} className='sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-16 lg:w-16 h-10 bg-green-300/50 hover:bg-red-600/20 rounded-full'/></div>
            <div className='mt-2' ><h1>Abdul <strong>MedCOPENT</strong><span>&trade;</span></h1></div>
            
          
          
          </div>
        </div>
        </>
    )
}