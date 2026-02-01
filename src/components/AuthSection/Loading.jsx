import {useState , useEffect } from 'react';

export default function Loading({section , show  }){
    


    






    


    
    return (  <>
   
    
        <dialog className={`w-full ${show} text-center bg-black/50 rounded z-50 h-screen`}>
        <div className='flex items-center justify-center h-full gap-4'>
            <div className=' animate-spin h-14 w-14 border-t-red-300 border-b-purple-400 rounded-full border-t-4 border-b-4'></div>
            <h1 className='text-xl text-stone-100'>{section} in Process...!</h1>
            </div>
       
</dialog>
              
                </>
                
    
)
}