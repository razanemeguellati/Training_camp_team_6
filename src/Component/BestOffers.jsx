import '../App.css';
import Title from './Title';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


const BestOffers = () => {
    return ( 
        <div className="w-full h-screen " id="BestOffers">
             
              <Title title={" Meilleurs Offres"}></Title>
              <Swiper>
                 <SwiperSlide> 
                    smething here 
                 </SwiperSlide>
                 <SwiperSlide> slide 2 </SwiperSlide>
                 <SwiperSlide> slide 1 </SwiperSlide>
              </Swiper>
        </div>
     );
}
 
export default BestOffers;