import { userName } from "../bodyComponents/Hero.jsx"

export default function FolioCompSec(){

    return(
    <>
    <div className='bg-red-400/60 rounded m-2 p-10'>


<div className='bg-orange-500/40 w-fit m-3 p-2 border-2 border-amber-500/50 rounded '>
<span className='font-bold text-amber-800 text-2xl'>|</span><span>Personal Folio</span></div>
        <div className='bg-stone-900/20 rounded  p-5 text-2xl text-center text-green-200 justify-center '>
            <h1>Name:<strong>{userName}</strong></h1>
            <h2>Age:<strong>{userName}</strong></h2>
            <span>Gender:<strong>{userName}</strong></span>
       
        
        </div>

    </div>
    

    </>
        
    )

}