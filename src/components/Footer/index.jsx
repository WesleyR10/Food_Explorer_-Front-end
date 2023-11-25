import { Container } from "./styles";
import LogoFooter from '../../assets/LogoFooter.png'

export function Footer() {
  return (
    <Container>
      <img src={LogoFooter} alt="Logo da empresa food explorer" />

      <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
  )
}