import Hero from '../bodyComponents/Hero.jsx';
import BuildUp from '../bodyComponents/BuildUp.jsx';
import FolioSeg from './combinedComponents/FolioSeg.jsx';
import OneFolioSeg from './OneFolioSeg.jsx';
import FolioCompSec from './folioCompSec.jsx';
import NavigationSection from './NavigationSection.jsx';



export default function BodyComp(){

        return(
        <>

<Hero/>
<NavigationSection/> 
<FolioSeg/>
<OneFolioSeg/>
<BuildUp/>
<FolioCompSec/>

        </>
        )
    
}