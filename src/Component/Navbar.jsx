import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className="navbar bg-azra9  cursor-pointer font-medium gap-12 flex row align-center jutify-between px-[20px] py-[30px] max-w-full">
            <h1> logo here </h1>
            <a href="#Header"> Home </a>
            <a href="#BestOffers"> Best Offers  </a>
            <a href="#AboutUs"> About Us  </a>

            <Link to="/Research"> Research </Link>
             <Link to="/SignInPage"> Sign In </Link>
             <Link to="/SignUpPage"> Sign Up </Link>
            </div>
           
        </nav>
        
          
     );
}

export default Navbar;