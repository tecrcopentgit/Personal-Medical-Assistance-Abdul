import { userMedDV } from "../NodeSection/usersArray"
export default function FolioCompSec(){


    
    return(
    <>
    <div className='bg-red-400/60 rounded m-2 p-10'>


<div className='bg-orange-500/40 w-fit m-3 p-2 border-2 border-amber-500/50 rounded '>
<span className='font-bold text-amber-800 text-2xl'>|</span><span>Personal Folio</span></div>
        <div className='bg-stone-900/20 rounded  p-5 text-2xl text-center text-green-200 justify-center '>
            <h1>Name:<strong>{userMedDV ? userMedDV.username : '...'}</strong></h1>
            <h2>Age:<strong>{userMedDV ? userMedDV.userage : '...'}</strong></h2>
            <span>Gender:<strong>{userMedDV ? userMedDV.usergender : '...'}</strong></span>
       
        
        </div>

    </div>
    

    </>
        
    )

}