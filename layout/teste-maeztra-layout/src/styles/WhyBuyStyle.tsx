import styled from 'styled-components'; 

export const WhyBuyContainer = styled.div`
    margin: 30px auto 50px auto !important;
    width: 90%;
    
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const TitleWhyBuy = styled.h2`
    color: #353535 !important;
    text-align: center !important;
    font-family: Titillium Web !important;
    font-size: 16px !important;
    font-style: normal !important;
    font-weight: 700 !important;
    line-height: normal !important;
    margin: 30px auto 0 auto !important;
`

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    gap: 22px;
    border-radius: 4px;
    background: #EFEFEF;
    padding: 16px 16px !important;
    @media (min-width: 768px) {

    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;


    h3{
        color:#353535;
        font-family: Titillium Web;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    p{
        color: #000;
        font-family: Titillium Web;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`;

export const Icon = styled.img`
    width: 32px;
    height: 100%;
    margin: auto 0 !important;

    @media (max-width: 768px) {
        width: 36px;
        height: 100%;
        margin: auto 0 !important;
    }

`