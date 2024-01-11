// components/Modal.tsx
import React, { useState, useEffect } from 'react';
import { StyledModalOverlay, StyledModalContent, StyledCloseButton, Icon1, Icon2, DeskTopImage, SendButton } from '../styles/ModalStyle';
import ModalBanner from '../assets/Images/ModalBanner.png';
import MailIcon from '../assets/MailIcon.svg';
import SendIcon from '../assets/SendIcon.svg';

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email enviado:', email);
    // Lógica de envio de e-mail aqui
    onClose(); // Fechar modal após enviar o e-mail
  };

  return (
    <StyledModalOverlay>
      <StyledModalContent>
        {isDesktop && (
          <DeskTopImage src={ModalBanner} alt="Promoção" />
        )}
        <div>
          <Icon1 src={MailIcon} alt="Icone de carta" />
          <h2>BEM VINDO À MAEZTRA</h2>
          <h3>
            <p>Receba em Primeira mão</p>
            <span>desconto e ofertas exclusivas</span>
          </h3>
          <form onSubmit={handleEmailSubmit}>
            <input 
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <SendButton type="submit">
              ENVIAR
              <Icon2 src={SendIcon} alt="Icone do botão enviar" />
            </SendButton>
          </form>
          <StyledCloseButton onClick={onClose}>Fechar</StyledCloseButton>
        </div>
      </StyledModalContent>
    </StyledModalOverlay>
  );
};

export default Modal;
