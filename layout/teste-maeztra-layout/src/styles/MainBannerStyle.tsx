import styled from 'styled-components';


export const MainBannerContainer = styled.div`
    width: 100%;
    position: relative;

    img{
        background-size: cover;
        background-position: center; 
        background-repeat: no-repeat;
        width: 100%; 
        height: auto;
        fill: #000;
    }
    h2{
        color: #FFF;
        font-family: Montserrat;
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    p{
        color: #FFF;
        font-family: Montserrat;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    button{
        display: flex;
        width: 76px;
        height: 28px;
        justify-content: center;
        align-items: center;
        color:#FFF;
        text-align: center;
        font-family: Montserrat;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        border-radius: 4px;
        background: #FAA500;
        border: 1px solid #FAA500;
        cursor: pointer;
        &:hover{
            background: #FFF;
            color: #FAA500;
        }
    }
    @media (max-width: 768px) {
        img{
        background-size: cover;
        background-position: center; 
        background-repeat: no-repeat;
        width: 100%; 
        height: auto;
        }
        h2{
            color: #FFF;
            font-family: Montserrat;
            font-size: 30px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }
        p{
            color: #FFF;
            font-family: Montserrat;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
        button{
            display: flex;
            width: 76px;
            height: 28px;
            justify-content: center;
            align-items: center;
            color:#FFF;
            text-align: center;
            font-family: Montserrat;
            font-size: 14px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            border-radius: 4px;
            background: #FAA500;
        }   
    }
`;

export const MainBannerContent = styled.div`
        position: absolute;
        top: 150px;
        left: 320px;
        display: flex;
        justify-content: center ;
        align-items: left;
        width: 480px;
        flex-direction: column;
        gap: 20px;

        @media (max-width: 768px) {
            position: absolute;
            top: 63px;
            left: 62px;
            display: flex;
            justify-content: center ;
            align-items: left;
            width: 225px;
            flex-direction: column;
            gap: 25px;
        
        }
`

export const NavigationButton = styled.div`
  &.swiper-button-prev{
    background: none;
    cursor: pointer;
    position: absolute !important;
    left: 160px;
    top: 50%;
    height: 20px;
    width: 32px;
    z-index: 1!important;
  } 
  &.swiper-button-next {
    background: none;
    cursor: pointer;
    position: absolute !important;
    right: 160px;
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
    position: absolute !important;
    left: 20px;
    height: 20px;
    width: 32px;
    z-index: 1!important;
  } 
  &.swiper-button-next {
    position: absolute !important;
    background: none;
    cursor: pointer;
    position: absolute;
    right: 20px;
    height: 20px;
    width: 32px;
    z-index: 1!important;
  }
  }
`;