
import imgPoint from '../assets/logo/abh_med_app_logo.png'
import {userName} from '../bodyComponents/Hero.jsx';

export default function OneFolioSeg(){

    return(
        <div className='bg-stone-800/80 p-4 text-center text-lime-200 flex flex-col md:flex-row items-center justify-center'>
        <div ><img src={imgPoint} className='md:h-20 md:w-20 h-10 w-10' /></div>
        <div >
<span><strong>{userName}...!,,,</strong> Effortlessly manage your medical information online and access your health status anytime—without the hassle of paperwork.</span>
        </div>
        
        </div>
        
    )
}