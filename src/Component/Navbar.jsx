import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className="navbar bg-white cursor-pointer font-medium top-0 flex flex-row align-center jutify-between px-[10px] py-[20px] w-full">
            <h1> logo here </h1>
            <div className='flex px-32 mx-[10px] gap-12'>
            <a href="/#Header"> Home </a>
            <a href="#BestOffers"> Best Offers  </a>
            <a href="#AboutUs"> About Us  </a>
            <Link to="/Research"> Research </Link>
            </div>
         

            <div className='px-[50px]  lg:items-end flex gap-x-10'>
             <Link to="/SignInPage"> Sign In </Link>
             <Link to="/SignUpPage"> Sign Up </Link>
            </div>
             
            </div>
           
        </nav>
        
          
     );
}

export default Navbar;