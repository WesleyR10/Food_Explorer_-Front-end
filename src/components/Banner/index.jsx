import { Container, BannerWrapper, Image, Content, Title, Paragraph } from "./styles";
import Cookie from '../../assets/Banner/Cookie.png'

export function Banner() {
  return (
    <Container>
      <BannerWrapper>
        <Image src={Cookie} alt="Imagem dos biscoitos" />
        <Content>
          <Title>Sabores inigualáveis</Title>
          <Paragraph>Sinta o cuidado do preparo com ingredientes selecionados</Paragraph>
        </Content>
      </BannerWrapper>
    </Container>
  );
}