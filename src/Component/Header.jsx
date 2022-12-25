
import '../App.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import whitecar from "../assets/whitecar.png" ; 
import greencar from "../assets/greencar.jpg" ; 
import blackcar from "../assets/blackcar.jpg" ; 
const Header = () => {
    return (
        <div className="w-full h-screen  bg-asfar" id="Header">
             <Swiper>
                 <SwiperSlide> <img className='w-full h-screen bg-black-600 opacity-50' src={whitecar} alt="" /> </SwiperSlide>
                 <SwiperSlide> <img className='w-full h-screen' src={greencar} alt="" /></SwiperSlide>
                 <SwiperSlide> <img className='w-full h-screen' src={blackcar} alt="" /> </SwiperSlide>
              </Swiper>
           
        </div>
    );
}

export default Header;