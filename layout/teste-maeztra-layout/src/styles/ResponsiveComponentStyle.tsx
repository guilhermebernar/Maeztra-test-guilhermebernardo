import styled from 'styled-components';

export const ComponentContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 10% !important;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 80px 5% !important;
  } 
`;

export const TextSection = styled.div`
    width: 100%;
    @media (min-width: 768px) {
        width: 30%;
    }
`;

export const ImageSection = styled.div`

  img {
    max-width: 100%;
    @media (min-width: 768px) {
        width: 1120px !important;
    }
  }
`;

export const Title = styled.h2`
    color: #000;
    font-family: Titillium Web !important;
    font-size: 24px !important;
    font-style: normal !important;
    font-weight: 700 !important;
    line-height: normal !important;
    margin: 23px 0 18px 0 !important;
    @media (min-width: 768px) {
    }
`;

export const Text = styled.p`
    color:#000 !important;
    width: 88%;
    font-family: Titillium Web !important;
    font-size: 14px !important;
    font-style: normal !important;
    font-weight: 400 !important;
    line-height: 18px !important;
    margin: 0 0 20px 0 !important;
`;
