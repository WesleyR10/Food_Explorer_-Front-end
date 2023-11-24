import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  padding: 28px 133px;
`;

export const BannerWrapper = styled.div`
  margin-top: 60px;
  background-color: ${({ theme }) => theme.COLORS.GRADIENTS_200};
  display: flex;
  align-items: center; 
  min-height: 200px; /* Defina a altura mínima desejada */
  
  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    min-height: 130px; /* Defina a nova altura mínima quando a tela for menor que 1024px */
    margin-top: 30px;
  }

`;

export const Content = styled.div`
  flex: 1; /* Ocupa todo o espaço disponível */
  padding: 0 12px; /* Margem interna ajustável */
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  @media(max-width: 1168px) {
    h1{
      font-size: 1.8rem;
    }
    p{
      font-size: .8rem;
    }
}
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  margin-bottom: 8px; 
`;

export const Paragraph = styled.p`
  font-size: 1.12rem;
  font-family: 'Roboto Slab', serif;
  font-weight: 300;
`;

export const Image = styled.img`
  margin-right: 3%; /* Utilizando porcentagem para o margin-right */
  margin-top: -8%; /* Utilizando porcentagem para o margin-top */
  margin-left: -4.4%; /* Utilizando porcentagem para o margin-left */
  max-width: 100%; /* Garante que a imagem se ajuste ao contêiner */
  height: auto; /* Mantém a proporção da imagem */
  width: auto; /* Permite que a largura da imagem seja alterada */
  
  @media(min-width: 1550px) {
    margin-right: 6%; /* Utilizando porcentagem para o margin-right */
    margin-top: -6%; /* Utilizando porcentagem para o margin-top */
  }

  @media(max-width: ${DEVICE_BREAKPOINTS.XL}) {
    max-width: calc(50% - 24px); /* Ajuste conforme necessário para a largura máxima desejada */
  }

  @media (max-width: 1168px) {
    max-width: 428px; /* Defina a largura máxima para a imagem quando a tela for menor que 1168px */
    margin-right: 2%; /* Utilizando porcentagem para o margin-right */
    margin-top: -8.7%; /* Utilizando porcentagem para o margin-top */
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    max-width: 310px; /* Defina a nova altura mínima quando a tela for menor que 1024px */
  }
`;
