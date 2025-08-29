// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export function CarruselAdds() {
  return (
    <Swiper 
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="mySwiper w-full"
    >
      <SwiperSlide>
        <img src="/publicidad/add-1.png" alt="Publicidad" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/publicidad/add-2.png" alt="Publicidad" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/publicidad/add-3.png" alt="Publicidad" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/publicidad/add-4.jpg" alt="Publicidad" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/publicidad/add-5.png" alt="Publicidad" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/publicidad/add-6.jpg" alt="Publicidad" />
      </SwiperSlide>
    </Swiper>
  );
}