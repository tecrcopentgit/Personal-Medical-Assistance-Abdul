

const data = localStorage.getItem('data');

export default function folioSeg(){

   
    const pointStyle = <span className='md:text-5xl sm:text-2xl text-green-600/80 '>|</span>
    const ShowTag = ({HeadTopic , numberOfContent}) => { return (<div className='bg-gradient-to-tr from-red-700/50 to-purple-800/60 rounded m-1 p-1 md:m-2 md:p-5 text-orange-200'>
                <span className='bg-violet-800/40 rounded md:p-2'>{pointStyle}{HeadTopic}</span>
               <div className='bg-slate-500/40 m-5 rounded md:p-10 md:text-9xl sm:text-xl text-center'><h2>{numberOfContent}</h2></div> 

            </div>
        )}
        

    
    
    
   
  
    
    
    
    

    return (
       <div className='grid grid-cols-3 sm:text-xl lg:text-3xl bg-gradient-to-b from-rose-600/50 to-red-950/40'>
       <ShowTag HeadTopic='Medicines Details' numberOfContent='0'/>
       <ShowTag HeadTopic='Reports in Observe' numberOfContent='0'/>
       <ShowTag HeadTopic='Doctors in consults' numberOfContent='0'/>
       </div>
            
        
    )
}