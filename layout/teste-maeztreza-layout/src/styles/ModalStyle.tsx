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

export const StyledModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 4px;
  max-width: 300px;
  text-align: center;
`;

export const StyledCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;