import yourImage from '../assets/images/banner-cta.png';
import { ComponentContainer, TextSection, Title, Text, ImageSection } from '../styles/ResponsiveComponentStyle';

const PromotionalBlock = () => {
  return (
    <ComponentContainer>
      <TextSection>
        <Title>Lorem ipsum</Title>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </TextSection>
      <ImageSection>
        <img src={yourImage} alt="Nova Coleção de outono-inverno" />
      </ImageSection>
    </ComponentContainer>
  );
};

export default PromotionalBlock;
