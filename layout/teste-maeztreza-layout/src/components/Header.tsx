import React, { useState, useEffect } from 'react';
import Logo from '../assets/header-logo.svg';
import SearchIcon from '../assets/search-icon.svg';
import CartIcon from '../assets/cart-icon.svg';
import MobileMenuIcon from '../assets/menu-icon.svg';
import CloseIcon from '../assets/close-icon.svg';
import UserIcon from '../assets/user-icon.svg';
import FavoritesIcon from '../assets/favorites-icon.svg';
import NovidadesIcon from '../assets/novidades-icon.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { 
  StyledHeader, 
  SearchBox, 
  SearchButton, 
  SearchInput, 
  UserAccount, 
  MobileNavMenu, 
  Highlights,
  Favorites, 
  HeaderMain,
  Cart,
  DesktopNavMenu 
} from '../styles/HeaderStyle';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth >= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  return (
    <StyledHeader>
        <Highlights>
            <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            >
            <SwiperSlide><p>Acompanhe as melhores promoções disponíveis aqui na Maeztra.</p></SwiperSlide>
            <SwiperSlide><p>Acompanhe as melhores promoções disponíveis aqui na Maeztra.</p></SwiperSlide>
            </Swiper>
        </Highlights>

        <HeaderMain>
            {!isDesktop && (
            <img src={MobileMenuIcon} onClick={() => setIsMenuOpen(!isMenuOpen)} />
            )}

            {isMenuOpen && !isDesktop && (
            <MobileNavMenu>
                <img src ={CloseIcon} onClick={() => setIsMenuOpen(false)} />
                <div>
                    <a href="">Novidades</a>
                    <a href="/">Vestidos</a>
                    <a href="/">Roupas</a>
                    <a href="/">Sapatos</a>
                    <a href="/">Lingerie</a>
                    <a href="/">Acessórios</a>
                    <a href="/">OUTLET</a>
                </div>
            </MobileNavMenu>
            )}

            <img src={Logo} alt='Logo'/>

            <SearchBox>
            {isDesktop && <SearchInput type="text" placeholder="O que você busca?" />}
            <SearchButton>
                {!isDesktop && <img src={SearchIcon} alt="" />}
                {isDesktop && <p>Buscar</p>} 
            </SearchButton>
            </SearchBox>

            {!isDesktop && 
            <a href="/">
                <img src={CartIcon} alt=""/>
            </a>
            }

            {isDesktop && (
            <>
                <UserAccount>
                    <img src={UserIcon} alt="" />
                    <p>Minha Conta</p>
                </UserAccount>
                <Favorites>
                <img src={FavoritesIcon} alt="" />
                <p>Meus Favoritos</p>
                </Favorites>
                <Cart>
                <img src={CartIcon} alt="" />
                <p>Meu Carrinho</p>
                </Cart> 
            </>
            )}
        </HeaderMain>

      {isDesktop && (
        <DesktopNavMenu>
          <div>
            <img src={NovidadesIcon} alt="" />
            <a href="/">Novidades</a>
          </div>
          <a href="/">Vestidos</a>
          <a href="/">Roupas</a>
          <a href="/">Sapatos</a>
          <a href="/">Lingerie</a>
          <a href="/">Acessórios</a>
          <a href="/">OUTLET</a>
        </DesktopNavMenu>
      )}
    </StyledHeader>
  );
};

export default Header;
