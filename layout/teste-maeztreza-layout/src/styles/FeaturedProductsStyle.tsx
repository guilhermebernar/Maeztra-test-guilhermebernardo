import styled from 'styled-components';

export const FeaturedProductsContainer = styled.div`
    position: relative;
    margin: 0 5% !important;
    @media (max-width: 768px) {
        margin: 0 !important;
    
    }
`;

export const TitleFeaturedProducts = styled.h1`
    color: #353535 !important;
    text-align: center  !important;
    font-family: Titillium Web  !important;
    font-size: 32px  !important;
    font-style: normal  !important;
    font-weight: 700  !important;
    line-height: normal  !important;
    margin-bottom: 25px  !important;
    @media (max-width: 768px) {
        font-size: 24px  !important;
    
    }
`;

export const Card = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: flex-start !important;
    height: 460px !important;

    @media (max-width: 768px) {
        height: 560px !important;
    }
    @media (min-width: 1400px) {
        height: 600px !important;
    
    }
`;

export const Image = styled.img`
    max-width: 100%;
`;

export const Content = styled.div`
height: 200px;

h3{
    color:#000;
    font-family: Titillium Web;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
p{
    color: #000;
    font-family: Titillium Web;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
`;

export const Price = styled.span`
    color: #353535 !important;
    font-family: Titillium Web !important;
    font-size: 20px !important;
    font-style: normal !important;
    font-weight: 700 !important;
    line-height: normal !important;
`;

export const Colors = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    margin: 10px 0 !important;
`;

export const Color = styled.div`
  width: 27px; 
  height: 27px;
  background-color: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
  border-radius: 4px;
  cursor: pointer;
  margin: 0 5px;

  &:hover {
    margin: 0;
    width: 27px; 
    height: 27px;
    border-radius: 4px;
    border: 1px solid #000;
  }
`;


export const Button = styled.button`
    color: #FFF;
    height: 35px;
    text-align: center;
    font-family: Titillium Web;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border-radius: 4px;
    background: #FAA500;
    border: 1px solid #FAA500;
    cursor: pointer;
    &:hover{
        background: #FFF;
        color: #FAA500;
    }
`;

export const NavigationButton = styled.div`
  &.swiper-button-prev{
    background: none;
    cursor: pointer;
    position: absolute !important;
    left: -1%;
    top: 50%;
    height: 20px;
    width: 32px;
    z-index: 1!important;
  } 
  &.swiper-button-next {
    background: none;
    cursor: pointer;
    position: absolute !important;
    right: -1%;
    top: 50%;
    height: 20px;
    width: 32px;
    z-index: 1!important;
  }
  &.swiper-button-prev:after, &.swiper-button-next:after{
    display: none;
  }

  @media (max-width: 768px) {
    &.swiper-button-prev{
        display: none !important;
  } 
  &.swiper-button-next {
    display: none !important;
  }}
`;