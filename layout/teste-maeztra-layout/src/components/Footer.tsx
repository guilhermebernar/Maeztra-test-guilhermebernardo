import { useState, useEffect } from 'react';
import FacebookIcon from '../assets/facebook.svg';
import LinkedInIcon from '../assets/linkedin.svg';
import InstagramIcon from '../assets/instagram.svg';
import YoutubeIcon from '../assets/youtube.svg';
import VisaIcon from '../assets/visa.svg';
import MastercardIcon from '../assets/mastercard.svg';
import VtexIcon from '../assets/vtex.png';
import MaeztraIcon from '../assets/maeztra.svg';

import {
    FooterContainer,
    FooterIconsSection,
    FooterSection,
    FooterTitle,
    FooterContent,
    SocialMediaIcons,
    PaymentIcons,
    FooterCredit,
    FooterLinks,
    CreditsFirstImg,
    CreditsSecondImg,
} from '../styles/FooterStyles';

interface FooterSection {
    title: string;
    links: string[];
    isLinksVisible: boolean;
}

const Footer = () => {

    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
    const [footerSections, setFooterSections] = useState<FooterSection[]>([
        {   title: 'Informações', 
            links: [
                'Quem Somos', 
                'Prazo de Envio', 
                'Trocas e Devoluções', 
                'Promoções e Cupons'
            ],
            isLinksVisible: false,
        },
        { 
            title: 'Minha Conta', 
            links: [
                'Meu Perfil', 
                'Meus Pedidos', 
                'Cadastre-se'
            ],
            isLinksVisible: false,
        },
        { 
            title: 'Onde nos Encontrar', 
            links: [
                'Lojas', 
                'Endereço'
            ],
            isLinksVisible: false,
        }
    ]);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleLinksVisibility = (title: string) => {
        setFooterSections(sections =>
            sections.map(section =>
                section.title === title
                    ? { ...section, isLinksVisible: !section.isLinksVisible }
                    : section
            )
        );
    };

    return (
        <FooterContainer>
            <FooterLinks>
                {footerSections.map(section => (
                    <FooterSection key={section.title}>
                        <FooterTitle onClick={() => toggleLinksVisibility(section.title)}>
                            <span>{section.title}</span> 
                            <span>{!isDesktop && '+'}</span>
                        </FooterTitle>
                        {(isDesktop || section.isLinksVisible) && (
                            <FooterContent>
                                {section.links?.map(link => (
                                    <a key={link} href="#">{link}</a>
                                ))}
                            </FooterContent>
                        )}
                    </FooterSection>
                ))}
            </FooterLinks>
            <FooterIconsSection>
                <SocialMediaIcons>
                    <img src={FacebookIcon} alt="Facebook" />
                    <img src={LinkedInIcon} alt="LinkedIn" />
                    <img src={InstagramIcon} alt="Instagram" />
                    <img src={YoutubeIcon} alt="Youtube" />
                </SocialMediaIcons>
                <PaymentIcons>
                    <img src={VisaIcon} alt="Icone Visa" />
                    <img src={MastercardIcon} alt="Icone Mastercard" />
                    <img src={VisaIcon} alt="Icone Visa" />
                    <img src={MastercardIcon} alt="Icone Mastercard" />
                </PaymentIcons>
                <FooterCredit>
                    <div>
                        <span>Powered by VTEX</span>
                        <CreditsFirstImg src={VtexIcon} alt="Icone Vtex" />
                    </div>
                    <div>
                        <span>Developed by MAEZTRA</span>
                        <CreditsSecondImg src={MaeztraIcon} alt="Icone Maeztra" />
                    </div>
                </FooterCredit>
            </FooterIconsSection>
        </FooterContainer>
    );
};

export default Footer;
