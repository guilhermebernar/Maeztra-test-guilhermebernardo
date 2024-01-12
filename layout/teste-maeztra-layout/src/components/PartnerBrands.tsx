import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import partnerImage1 from '../assets/comma-logo.png';
import partnerImage2 from '../assets/melissa-logo.png';
import partnerImage3 from '../assets/forever21-logo.png';
import partnerImage4 from '../assets/zara-logo.png';
import partnerImage5 from '../assets/ann-logo.png';

import { PartnerBrandsContainer, PartnerImage, TitlePartnerBrands } from '../styles/PartnerBrandsStyle';

const partnerData = [
    {
        image: partnerImage1,
        alt: "Parceiro 1"
    },
    {
        image: partnerImage2,
        alt: "Parceiro 2"
    },
    {
        image: partnerImage3,
        alt: "Parceiro 3"
    },
    {
        image: partnerImage4,
        alt: "Parceiro 4"
    },
    {
        image: partnerImage5,
        alt: "Parceiro 5"
    }
];

const PartnerBrands = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isMobile = windowWidth < 768;

    return (
        <PartnerBrandsContainer>
            <TitlePartnerBrands>
                Marcas Parceiras
            </TitlePartnerBrands>
            <Swiper
                modules={[Pagination]}
                slidesPerView={isMobile ? 1.3 : 5}
                centeredSlides={isMobile ? true : false}
                spaceBetween={30}
                loop={false}
                className="partnerBrandsSwiper"
            >
                {partnerData.map((partner, index) => (
                    <SwiperSlide key={index}>
                        <PartnerImage src={partner.image} alt={partner.alt} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </PartnerBrandsContainer>
    );
};

export default PartnerBrands;
