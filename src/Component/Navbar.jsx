import { Link } from 'react-router-dom';
//import {Logov1} from '../assets/icons/LOGOv1.svg'
const Navbar = () => {
    return (
        <nav>
            <div className="navbar bg-white cursor-pointer font-medium top-0 flex flex-row align-center jutify-center px-[10px] py-[20px] w-full">
            <h1> logo here </h1>
           {/* <img src={Logov1} alt="" />*/}
            <div className='Btns flex px-32 ml-[170px] gap-20'>
            <a className='relative' href="/#Header"> Home </a>
            <a className='relative'href="/#BestOffers"> Best Offers </a>
            <a className='relative'href="/#AboutUs"> About Us </a>
            <Link to="/Research" className='relative'> Research </Link>
            </div>
         

            <div className='px-[50px] ml-[20px] flex gap-x-10 '>
             <Link to="/SignInPage" className='hover:text-asfar'> Sign In </Link>
             <Link to="/SignUpPage" className='hover:text-asfar'> Sign Up </Link>
            </div>
             
            </div>
           
        </nav>
        
          
     );
}

export default Navbar;
