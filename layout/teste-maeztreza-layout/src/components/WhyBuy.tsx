import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, EffectCreative} from 'swiper/modules';
import 'swiper/css/effect-creative';

import globeIcon from '../assets/globe-icon.png'; 
import warehouseIcon from '../assets/warehouse-icon.png';
import returnIcon from '../assets/return-icon.png';
import discontIcon from '../assets/discont-icon.png';
import truckIcon from '../assets/truck-icon.png';

import { WhyBuyContainer, Card, Icon, Content, TitleWhyBuy } from '../styles/WhyBuyStyle';
import { useEffect, useState } from 'react';
const cardData = [
    {
      icon: globeIcon,
      title: "Produtos importados",
      description: "Produto de Alta Qualidade"
    },
    {
      icon: warehouseIcon,
      title: "Estoque no Brasil",
      description: "Produtos mais perto de você!"
    },
    {
      icon: returnIcon,
      title: "Trocas Garantidas",
      description: "Trocas em até 30 dias."
    },
    {
      icon: discontIcon,
      title: "Ganhe 5% Off",
      description: "Pagando à vista no Cartão"
    },
    {
      icon: truckIcon,
      title: "Frete Grátis",
      description: "A partir de R$ 400,00"
    },
  ];



const WhyBuy = () => {
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
        <>
            <TitleWhyBuy>
                Por que comprar na Maeztra?
            </TitleWhyBuy>
            <WhyBuyContainer>
                <Swiper
                modules={[Pagination, EffectCreative]}
                slidesPerView={isMobile ? 1.3 : 5}
                centeredSlides={isMobile ? true : false}
                spaceBetween={30}
                className="whyBuy"
                loop={false}
                >
                {cardData.map((data, index) => (
                    <SwiperSlide key={index}>
                    <Card>
                        <Icon src={data.icon} alt={data.title} />
                        <Content>
                        <h3>{data.title}</h3>
                        <p>{data.description}</p>
                        </Content>
                    </Card>
                    </SwiperSlide>
                ))}
                </Swiper>
            </WhyBuyContainer>
        </>
    );
  };
  
  export default WhyBuy;
