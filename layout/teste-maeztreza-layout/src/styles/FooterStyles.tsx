import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px; // Espaço entre as seções do footer
`;

export const FooterLinks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 40px 30px 60px 30px !important;
    gap: 20px;
    @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 170px;
    width: 60vw;
    margin: 40px auto 64px auto !important;
    }
`;

export const FooterSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FooterTitle = styled.h2`
margin-bottom: 10px;
display: flex;
justify-content: space-between;
color: ${props => props.theme.colors.tertiary};
font-family: ${props => props.theme.font.primary} !important;
font-size: 16px;
font-style: normal;
font-weight: 700 !important;
line-height: 18px;
cursor: pointer;
@media (min-width: 768px) {
  justify-content: flex-start;
}
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 25px !important;
  a{
    text-decoration: none;
    color: ${props => props.theme.colors.black};
    font-family: ${props => props.theme.font.primary};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
  }
  @media (min-width: 768px) {

  }
`;

export const FooterIconsSection = styled.div`
    background: ${props => props.theme.colors.tertiary};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 36px;
    padding: 26px 20px !important;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 26px 161px !important;
  }
`;

export const SocialMediaIcons = styled.div`
  display: flex;
  gap: 22px; 
  img{
    width: 32px;
  }
`;

export const PaymentIcons = styled.div`
  display: flex;
  gap: 22px;
  img{
    width: 32px;
  }
`;

export const FooterCredit = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  height: fit-content;
  gap: 20px;
  span{
    color: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.font.tertiary};
    font-size: 8px;
    margin-right: 10px;
  }

  div{
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    gap: 5px;
    @media (min-width: 768px) {margin-right: 20px;}
  }

`;

export const CreditsFirstImg = styled.img`
    width: 88px;
`;
export const CreditsSecondImg = styled.img`
    width: 120px;
`;