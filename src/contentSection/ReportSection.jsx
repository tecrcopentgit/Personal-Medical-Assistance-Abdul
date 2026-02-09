import NavigationSection from "../components/NavigationSection";
import { inputStyle } from "../components/AuthSection/Register";

import { useState } from "react";
import { ArrowBigLeftIcon } from "lucide-react";





export default function ReportSection(){
    const [reportState , setReportState ] = useState('0');

function handleSection(){
setReportState('1');
}

const handleReportUpload = (e) => {
    const report = e.target.file[0];

}
    return (

        <>
        <NavigationSection/>
        <div>
           <div>
            
            
            {reportState === '1' ? <div className=' m-2 bg-gradient-to-br from-cyan-400/50 to-red-600/40 rounded'>
                <button onClick={() => {setReportState('0')}} className='bg-amber-950/40 rounded m-2 p-2'><ArrowBigLeftIcon/></button>
            <form className='flex flex-col gap-2  p-5 items-center ' data-aos='fade-in' >
             <span>Report</span><input type='name' className={inputStyle} required/>
            <span>Report Type</span><select className={inputStyle} required>
                <option></option>
            <option>Medical Report</option>
            <option>Scan Report </option>
            <option>Doctor Report</option>
            </select>
                <input type='file' className={inputStyle} onChange={handleReportUpload} required/>
                <button className='bg-emerald-600 hover:bg-slate-700 p-4 rounded w-fit '>Add Report...</button>
                </form></div> : 
                
                <div className=' bg-yellow-950/20 m-5 lg:m-20 text-center '>

            <h2 className='p-24'>There is no Report here and no Reports you have to Observe...</h2>
            <button className='bg-slate-900 hover:bg-slate-400 hover:text-rose-900 font-semibold rounded p-5 m-3' onClick={handleSection}>
                Add Report Details
                </button>
            </div>
                
                }
        </div>
        </div>
        
        
        </>
        
    )
}