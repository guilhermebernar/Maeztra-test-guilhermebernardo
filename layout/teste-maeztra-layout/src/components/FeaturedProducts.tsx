import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, EffectCreative } from 'swiper/modules';
import 'swiper/css/effect-creative';
import PrevArrowSVG from '../assets/icon-prev.svg';
import NextArrowSVG from '../assets/icon-next.svg';

import { useEffect, useState } from 'react';
import { FeaturedProductsContainer, TitleFeaturedProducts, Card, Image, Content, Price, Colors, Color, Button, NavigationButton } from '../styles/FeaturedProductsStyle';

import productData from '../api/moked';

const FeaturedProducts = () => {
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
        <FeaturedProductsContainer>
            <TitleFeaturedProducts>
                As Mais Pedidas
            </TitleFeaturedProducts>
            <Swiper
                modules={[Pagination, EffectCreative]}
                slidesPerView={isMobile ? 1.3 : 5}
                centeredSlides={isMobile ? true : false}
                spaceBetween={30}
                className="featuredProducts"
                loop={false}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}
            >
                {productData.map((data, index) => (
                    <SwiperSlide key={index}>
                        <Card>
                            <Image src={data.image} alt={data.alt} />
                            <Colors>
                                {data.colors.map((color, index) => (
                                    <Color
                                        key={index}
                                        color={color}
                                    />
                                ))}
                            </Colors>
                            <Content>
                                <Price>{data.price}</Price>
                                <h3>{data.title}</h3>
                                <p>{data.description}</p>
                            </Content>
                            <Button>Adicionar</Button>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
            <NavigationButton className="swiper-button-prev">
                <img src={PrevArrowSVG} alt='ir para imagem anterior' />
            </NavigationButton>
            <NavigationButton className="swiper-button-next">
                <img src={NextArrowSVG} alt='ir para proxima imagem' />
            </NavigationButton>
        </FeaturedProductsContainer>
    );
};

export default FeaturedProducts;
