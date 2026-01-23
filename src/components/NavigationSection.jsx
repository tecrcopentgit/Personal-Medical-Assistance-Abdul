import {useState , useRef , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export default function NavigationSection(){
    const navigate = useNavigate();
    const navSection = useRef(null);
    const [navFixed , setNavFixed ] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            
            if (navSection.current){

                const navBottom = navSection.current.offsetTop + navSection.current.offsetHeight;
                setNavFixed(window.scrollY >= navBottom);
            }
            }
            
            window.addEventListener('scroll' , handleScroll);
            return () => window.removeEventListener('scroll',handleScroll)
    } ,[])

    const navField = [
        {navCon:'Dashboard' , refer:'/body'},
        {navCon:'Med Section', refer:'/medicine'},
        {navCon:'Report Section', refer:'/report'},
        {navCon:'Doctor Field', refer:'/doctor'},
    ];

    const [navShow , setNavShow] = useState(`hidden`);
    const [navButtonStyle , setNavButtonStyle ] = useState('bg-amber-700/50 rounded');
    
    function NavCloseFunction(){
        if(navShow === 'block'){
            setNavShow(`hidden`);
            setNavButtonStyle(`bg-stone-800 rounded text-stone-200`);
        }
            
        else{
            setNavShow('block');
            setNavButtonStyle(`bg-red-700/50 rounded-full`);

        }
        
        
       
    }

    function pageNavigate(naver){
        navigate(naver)
    }


    return (<>

    <div className={` ${navFixed ? 'fixed w-full': 'relative'} flex flex-col items-center top-0 fixed-0`} ref={navSection}>
<div className={`flex justify-center md:gap-10 text-center md:p-2 items-center bg-gray-700 w-full text-stone-900 font-semibold ${navShow}`}>
    {navField.map((nav , i) => (<div className='border-2 md:border-none border-rose-950  h-20 w-full'key={i}>
    <button className='md:bg-stone-500/40 pt-5 md:p-4 rounded md:hover:bg-red-500/30'  onClick={() => {pageNavigate(nav.refer)}}>
    {nav.navCon}
    </button>
    </div>))}

</div>
      <div className='bg-black/80 w-full text-center p-2'>
    <button  className={`${navButtonStyle} h-7  w-7 items-center text-xl `} onClick={NavCloseFunction} >{navShow === 'hidden'? 'O' : 'X'}</button>
    </div>



    </div>


      
        
    
    </>)
}