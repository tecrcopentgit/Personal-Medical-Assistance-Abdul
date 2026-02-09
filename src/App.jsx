import {useState , useEffect  }  from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
import NotifySection from './components/NotifySection.jsx';
import FooterSection from './components/FooterSection.jsx';



function App() {
  useEffect(() => {
    AOS.init({
      duration:1000,
      once:false,
      offset:150,
    })
  } , [])
 
const bgColors = [`bg-gradient-to-bl to-green-800 from-purple-600` , `bg-gradient-to-br to-amber-800 from-blue-600` , ` bg-gradient-to-br to-stone-800 from-cyan-600` ];
  
  const [cssIndex , setCssIndex ] = useState(0);

  useEffect(() => {
    const intervalBG = setInterval(() => {

      setCssIndex((prevIndex) => (prevIndex + 1) % bgColors.length)
    } , 10000);
    
    return () => clearInterval(intervalBG);
  } , []);

  
    const colorBG=bgColors[cssIndex] ;

   
  
  return (
    <>
      <div className={` w-full md:w-screen lg:w-full h-full text-stone-200  ${colorBG} transition-colors duration-1000 ease-in-out `} >
     
        
        <Router>
          <TopSection />
           
            <Routes>
              <Route path="/" element={<AuthSec/>}/>
                <Route path="/login"  element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/body" element={<BodyComp/>}/>
                <Route path="/medicine" element={<MedSection/>}/>
                <Route path="/report" element={<ReportSection/>}/>
                <Route path="/doctor" element={<DoctorField/>}/>
                
            </Routes>
        </Router>

        <FooterSection/>
        
      </div>
      
      
    </>
  )
}

export default App
