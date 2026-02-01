
import { useNavigate } from 'react-router-dom';

import doctorImg from '../assets/img/doctor.jpg';
import medicineImg from '../assets/img/medicine.jpg';
import reportImg from '../assets/img/report.jpg';


export default function BuildUp(){
    const navigate = useNavigate();

    

    
const buildupTools = [
    {sectionName:'Med Section', imgRef:medicineImg, desc:'This part contains information of your medical details..!',compNav:'/medicine' }, 
    {sectionName:'Report Section', imgRef:reportImg, desc:'This section provide your report informations.!' ,compNav:'/report'},
    {sectionName:'Doctor Field', imgRef:doctorImg, desc:'This is the book of the doctor you are consulted with your health status',compNav:'/doctor' }
];


function handleComp(navRef){
        navigate(navRef)
        
    }
    const conAlt = <div className='flex justify-center items-center  '><div className=' animate-spin h-60 w-60 rounded-full border-t-2 border-t-black '></div></div>

    return <div className=" grid lg:grid-cols-3 sm:grid-cols-1 bg-slate-800/20  bg-[url('./src/assets/img/medBg.jpg')] bg-cover bg-blend-overlay bg-center gap-10" >
{buildupTools.map((tool , i ) =><div key={i} className='p-5 bg-gradient-to-br from-cyan-700 m-4 to-slate-600 rounded gap-10' data-aos='slide-up'>
               {tool.imgRef ? <img src={tool.imgRef} className='rounded h-50 w-fit' /> :  conAlt}
                <h1 className='text-xl font-head'><strong className='text-2xl text-red-600'>|</strong>{tool.sectionName}</h1>
                <p className='font-body'>{tool.desc}</p>
                <button className='rounded p-5 bg-gradient-to-tr from-cyan-800/50 to-red-700/60 hover:bg-slate-700/50 ' onClick={() => handleComp(tool.compNav)}>
                CheckOut..!
                </button>
            </div>)}
            
           
    </div>
}