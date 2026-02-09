
import { inputStyle } from "../components/AuthSection/Register";
import { buttonStyle } from "../components/TopSection";
export default function MedComponents(){


    return <>
    <div data-aos='slide-up'>
        <form className='flex flex-col gap-3  p-10 items-center text-gray-950 font-heading '>
            <span>Medicine Name</span><input name='medicineName' type='text' className={inputStyle} required/>
            <span>Type</span><select className ={`text-slate-950 ${inputStyle}`} required><option></option>
           <option>Tablet</option>
           <option>Syrup</option>
           <option>Injection</option>
           </select>
         <span>Dosage</span><input name='dosage' type='number' className={inputStyle} required/>
         <span>Number of Medicine</span><input name='number' type='number' className={inputStyle} required/>
         <span>Starting Date</span><input name='startdate' type='date' className={inputStyle} required />
         <span>Time</span><input name='timing' type='time' className={inputStyle} required />
           
            
            <button className='bg-blue-300/50 rounded p-4 text-amber-950 hover:bg-gray-950/40 hover:text-lime-200'>Store</button>

        </form>
    </div>
    </>
}