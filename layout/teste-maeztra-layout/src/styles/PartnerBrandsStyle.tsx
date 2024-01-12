// CREATE WhyBuyStyle.tsx
import styled from 'styled-components'; 

export const PartnerBrandsContainer = styled.div`
    margin: 30px auto 50px auto !important;
    width: 90%;

    
    
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const TitlePartnerBrands = styled.h2`
    color: #353535 !important;
    text-align: center !important;
    font-family: Titillium Web !important;
    font-size: 32px !important;
    font-style: normal !important;
    font-weight: 700 !important;
    line-height: normal !important;
    margin-bottom: 25px !important;
    @media (max-width: 768px) {
        font-size: 24px !important;
    
    }
`

export const PartnerImage = styled.img`
    width: 100%;
    @media (max-width: 768px) {
        max-width: 300px;
        height: auto;
        
    }
`