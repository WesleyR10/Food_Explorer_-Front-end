import { Container, BannerWrapper, Image, Content, Title, Paragraph } from "./styles";
import Cookie from '../../assets/Banner/Cookie.png'
import Cookie2 from '../../assets/Banner/Cookie2.png'
import { useState, useEffect } from 'react';

export function Banner() {
  const [imageSrc, setImageSrc] = useState(Cookie);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;

      if (width < 651) {
        setImageSrc(Cookie2);
      } else {
        setImageSrc(Cookie);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Container>
      <BannerWrapper>
        <Image src={imageSrc} alt="Imagem dos biscoitos" />
        <Content>
          <Title>Sabores inigualáveis</Title>
          <Paragraph>Sinta o cuidado do preparo com ingredientes selecionados</Paragraph>
        </Content>
      </BannerWrapper>
    </Container>
  );
}