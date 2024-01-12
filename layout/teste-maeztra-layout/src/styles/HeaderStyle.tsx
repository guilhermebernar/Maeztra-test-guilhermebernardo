// styles/HeaderStyle.tsx
import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  // Adicione estilos responsivos para ajustar para mobile
`;

export const HeaderMain = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  flex-direction: row;
  padding: 34px 0 !important;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.08);
  position: relative;
  z-index: 10;
  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 32px 20px !important;
    max-width: 89.5%;
  }
`;
export const HighlightsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.tertiary};
  height: 24px;
`

export const Highlights = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 4px auto;
  color: ${({ theme }) => theme.colors.white};
  height: 24px;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
      width: 100%;
    }

  p{
    text-align: center;
    font-family: ${({ theme }) => theme.font.primary};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    @media (max-width: 768px) {
      width: 100%;
    }
  }

`;

export const LogoContainer = styled.img`
  max-width: 147px;
  max-height: 18px;
  @media (max-width: 768px) {
    max-width: 110px !important;
    max-height: 18px;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  position: relative;
`;

export const SearchInput = styled.input`
  width: 45vw;
  height: 40px;
  background: ${({ theme }) => theme.colors.graySecondary};
  border: 1px solid ${({ theme }) => theme.colors.graySecondary};
  border-radius: 10px;
  padding: 0 20px;
  &:focus {
    outline: none;
  }
`;

export const SearchIconContainer = styled.img`
  width: 24px;
  height: 24px;
`

export const SearchButton = styled.button`
  margin: 0;
  position: absolute;
  right: -10px;
  height: 40px;
  width: 119px;
  height: 40px;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  text-align: center;
  font-family: Titillium Web;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  border-radius: 8px;
  cursor: pointer;
  &:hover{
    background: #ffb92e;
  }
  @media (max-width: 768px) {
    background: transparent;
    border: none;
    width: 24px !important;
    height: 24px;
  }
`;

export const DesktopMenu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 39px;
  img{
    width: 18px;
  }
`

export const UserAccount = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  a{
    text-decoration: none;
    color: ${({ theme }) => theme.colors.tertiary};
    font-family: ${({ theme }) => theme.font.primary};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
  }
`;

export const Favorites = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;

  a{
    text-decoration: none;
    color: ${({ theme }) => theme.colors.tertiary};
    font-family: ${({ theme }) => theme.font.primary};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
  }
`;

export const Cart = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  display: inline-flex;
  padding: 12px 14px 13px 17px !important;
  justify-content: center;
  align-items: center;
  gap: 8.464px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.primary} !important;
  &:hover{
    background-color: ${({ theme }) => theme.colors.primary};
    transition: 0.3s;
  }
  a{
    text-decoration: none;
    color: ${({ theme }) => theme.colors.tertiary};
    font-family: ${({ theme }) => theme.font.primary};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
  }
`;

export const DesktopNavMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px 0 !important;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  gap: 8vw;
  position: relative;
  z-index: 9;

  a{
    color: ${({ theme }) => theme.colors.tertiary};
    text-align: center;
    font-family: Titillium Web;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    text-decoration: none;
    
  }
  div{
    display: flex;
    flex-direction: row;
    gap: 8px !important;
    align-items: center;
    justify-content: center;

    a{
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 700;
    }
  }
  
`;


export const MobileNavMenu = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
  transition: left 0.3s ease-in-out;
  z-index: 99999;
  img{
    position: absolute;
    top: 20px;
    right: 20px;
  }

  div{
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    gap: 50px;
    margin-left: 30px;
  }

  a{
  display: flex;
  flex-direction: column;
  align-items: left;
  text-decoration: none;
  font-family: ${({ theme }) => theme.font.primary};
  }
`;

