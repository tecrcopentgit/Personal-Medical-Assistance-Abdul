import {useState} from 'react';
import { ArrowBigLeft } from 'lucide-react';

import NavigationSection from "../components/NavigationSection";

import MedComponents from "../subComponents/MedComponents";


const DefaultMedShow = ({medSecState}) =>  {
    return <div className='bg-yellow-950/20 m-5 lg:m-20 text-center '>

    <h2 className='p-24 '>There is no medicine here and no Medicine you have to intake...</h2>
    <button onClick={medSecState} className='bg-white/40 w-fit p-3 rounded shadow-xl hover:bg-slate-900 m-2'>Add Medicine</button>
    </div>
 
}


export default function MedSection(){
    const [medState , setMedState ] = useState('noMed');
    function medSecState(){
        setMedState('Med')
    }



    return (
        <>
        <NavigationSection/>
        <div className={`${medState === 'noMed' ? 'from-blue-600 to-pink-500' : 'from-green-300 to-purple-400' } bg-gradient-to-bl m-3`} data-aos='fade-in'>
            <button className='rounded bg-amber-900/50 hover:bg-gray-700/35 p-5 my-2 mx-2 ' onClick={medState=== 'noMed' ? medSecState : () => {setMedState('noMed')}}>{medState === 'noMed' ? 'Add Med details +' : <ArrowBigLeft/> }</button>
          {medState === 'noMed' ? 
          <div className='flex flex-col items-center p-5'>
            <DefaultMedShow medSecState={medSecState} />
            </div>
            :
            <MedComponents />}
        
        </ div >
        </>
    )
}