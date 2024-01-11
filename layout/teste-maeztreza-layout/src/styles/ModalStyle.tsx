import styled from 'styled-components';

export const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const DeskTopImage = styled.img`
  width: 45%
`;	

export const Icon1 = styled.img` 
  width: 28px;
  height: 29.66px;
`

export const Icon2 = styled.img`

`

export const StyledModalContent = styled.div`
  background: white;
  position: relative;
  display: flex;
  flex-direction: row;
  max-width: 55vw;
  text-align: center;
  font-family: ${({ theme }) => theme.font.primary};
  @media (max-width: 768px) {
    max-width: 300px;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    margin: 0 auto;
  }

  h2 {
    color: ${({ theme }) => theme.colors.secondary};
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    text-transform: uppercase;
  }

  p {
    color: ${({ theme }) => theme.colors.secondary};
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
  }

  span {
    color: ${({ theme }) => theme.colors.secondary};
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 700 !important;
    line-height: 23px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  input{
    max-height: 40px;
    padding: 10px 6px;
    margin-top: 16px;
    margin-bottom: 12px;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    background: ${({ theme }) => theme.colors.white};
  }
`;

export const SendButton = styled.button`
  width: 258px;
  max-height: 40px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font.primary};
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  text-transform: uppercase;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

export const StyledCloseButton = styled.button`
  position: absolute;
  top: -22px;
  right: -4px;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font.primary};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  text-transform: uppercase;
`;