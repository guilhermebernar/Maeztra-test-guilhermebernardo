import styled from 'styled-components';

export const NewsletterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #FAFAFA;
  border-top: 2px solid #e4e4e4 !important;
  border-bottom: 2px solid #e4e4e4 !important;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 40px 0 !important;
  }
`;

export const Title = styled.h2`
    color: #353535 !important;
    text-align: center !important;
    font-family: Titillium Web !important;
    font-size: 24px !important;
    font-style: normal !important;
    font-weight: 700 !important;
    margin: auto 0 !important;
    @media (max-width: 768px) {
      text-align: center !important;
      margin: 24px 0 12px 0 !important;
    }
`;

export const Form = styled.form`
position: relative;
  display: flex;
  flex-direction: row !important;
  width: 80%;
  justify-content: space-between;
  margin: 8px auto 24px auto !important;
  
  @media (min-width: 768px) {
    width: 50%;
    flex-direction: row !important;
    width: fit-content;
    align-items: center;
    margin: 0 0 0 20px !important;

  }
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
    width: 60%;
    height: 20px;

  @media (min-width: 768px) {
    margin-right: 10px;
    margin-bottom: 0;
    width: 468px;
  }
`;

export const Button = styled.button`
  padding: auto;
  background-color: #ffa500; // Cor do botão
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  width: 79px;
    height: 40px;
    text-align: center;
    padding: auto;

    @media (min-width: 768px) {
        position: absolute;
        right: 0;
    }

  &:hover {
    background-color: #e69500; // Cor do botão ao passar o mouse
  }
`;
