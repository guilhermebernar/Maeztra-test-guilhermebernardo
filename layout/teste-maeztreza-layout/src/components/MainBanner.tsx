import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination} from 'swiper/modules';
import PrevArrowSVG from '../assets/icon-prev.svg';
import NextArrowSVG from '../assets/icon-next.svg';
import banner from '../assets/Images/banner-desk.jpeg';
import bannerMobile from '../assets/Images/banner-mob.jpeg';
import { MainBannerContainer, NavigationButton, MainBannerContent } from '../styles/MainBannerStyle';

const MainBanner = () => {
    const [bannerImage, setBannerImage] = useState(banner);
  
    useEffect(() => {
      function handleResize() {
        setBannerImage(window.innerWidth >= 768 ? banner : bannerMobile);
      }
  
      window.addEventListener('resize', handleResize);
      handleResize(); // Call on mount to set initial state
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return (
      <MainBannerContainer>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          pagination={{ clickable: true }}
        >
          {[...Array(5)].map((_, index) => (
            <SwiperSlide key={index}>
              <div style={{ position: 'relative' }}>
                <img src={bannerImage} alt="Promoções de Outono" />
                <MainBannerContent>
                  <h2>Promoções de Outono</h2>
                  <p>Confiras os melhores looks para combinar com você nesse Outono</p>
                  <button>Conferir</button>
                </MainBannerContent>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
  
        <NavigationButton className="swiper-button-prev">
          <img src={PrevArrowSVG} alt='ir para imagem anterior' />
        </NavigationButton>
        <NavigationButton className="swiper-button-next">
          <img src={NextArrowSVG} alt='ir para proxima imagem' />
        </NavigationButton>
      </MainBannerContainer>
    );
  };
  
  export default MainBanner;
