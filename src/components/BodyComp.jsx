import Hero from '../bodyComponents/Hero.jsx';
import BuildUp from '../bodyComponents/BuildUp.jsx';
import FolioCompSec from './FolioCompSec.jsx';
import OneFolioSeg from './OneFolioSeg.jsx';
import NavigationSection from './NavigationSection.jsx';



export default function BodyComp(){

        return(
        <>

<Hero/>
<NavigationSection/> 
<OneFolioSeg/>
<BuildUp/>
<FolioCompSec/>

        </>
        )
    
}