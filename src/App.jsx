import {useState} from 'react';
import './index.css'


import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';

import TopSection from './components/TopSection.jsx';
import AuthSec from './components/AuthSection/AuthSec.jsx';
import Login from './components/AuthSection/Login.jsx';
import Register from './components/AuthSection/Register.jsx';
import BodyComp from './components/BodyComp.jsx';
import MedSection from './contentSection/MedSection.jsx';
import ReportSection from './contentSection/ReportSection.jsx';
import DoctorField from './contentSection/DoctorField.jsx';
import NavigationSection from './components/NavigationSection.jsx';



function App() {
 

  
  var [cssL , setCSS ] = useState('bg-cover bg-gradient-to-br   to-green-300 from-blue-600 h-full text-stone-200`')

  setTimeout(() => {setCSS('bg-cover bg-gradient-to-bl   to-green-500 from-blue-800 h-full text-stone-200`') 

    setTimeout(() => {setCSS('bg-cover bg-gradient-to-tl   to-green-500 from-blue-900 h-full text-stone-200`')} , 10000)
  } , 5000)

    const cssClass=cssL ;

  

cssClass;
  return (
    <>
      <div className={`transition-colors duration-900 ease-in-out ${cssClass}`}>
        <TopSection />
        
        <Router>
            <Routes>
              <Route path='/' element={<AuthSec/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/body" element={<BodyComp/>}/>
                <Route path="/medicine" element={<MedSection/>}/>
                <Route path="/report" element={<ReportSection/>}/>
                <Route path="/doctor" element={<DoctorField/>}/>
            </Routes>
        </Router>
        <footer className='bg-gradient-to-tr from-purple-800/50 to-cyan-500/20 p-2 text-center text-xl flex flex-col justify-center items-center'>
        <div className='bg-emerald-900/20 w-fit p-10  rounded'>
 <h1><strong>ABDUL</strong>&copy;Personal Med Assistance&trade;</h1>
    <div className='bg-slate-600/50 w-fit p-2'><strong>ABDUL HAADHI | NARASHIMA RAJA | MOHAMED HARUN| MOHAMED RAZIM</strong></div>
        </div>
   
        </footer>
      </div>
      
    </>
  )
}

export default App
