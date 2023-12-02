import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  padding: 28px 133px;

  @media (max-width: 1170px) {
    padding: 28px 100px;
  }

  @media (max-width: 1070px) {
      padding: 28px 45px;
    }
  
  @media (max-width: 768px) {
    padding: 14px 45px;
  }
  
  @media (max-width: 650px) {
    padding: 10px 27px;
  }
`;

export const BannerWrapper = styled.div`
  margin-top: 69px;
  background-color: ${({ theme }) => theme.COLORS.GRADIENTS_200};
  display: flex;
  align-items: center; 
  min-height: 200px; 
  
  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    min-height: 130px; 
  }

  @media(max-width: 520px) {
    height: 120px;
  }

`;

export const Content = styled.div`
  flex: 1;
  padding: 0 0.75rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  @media(max-width: 1100px) {
    h1{
      font-size: 1.8rem;
    }
    p{
      font-size: .82rem;
    }
  }
  @media(max-width: 850px) {
      padding: 0rem 0.5rem 0rem 0rem;
  }
  @media(max-width: 650px) {
    h1{
      font-size: 1.13rem;
      font-weight: 600;
    }
    p{
      font-size: .75rem;
      font-family: 'Poppins', sans-serif;
    }
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    h1{
      font-size: 0.95rem;
    }
    p{
      font-size: .63rem;
    }
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  margin-bottom: 0.5rem; 

  @media(max-width: 768px) {
    margin-bottom: 0.3rem;
  }
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
  height: auto;
  width: auto;
  
  @media(min-width: 1550px) {
    margin-right: 6%;
    margin-top: -5%;
    margin-left: -3.2%; 
  }

  @media(max-width: ${DEVICE_BREAKPOINTS.XL}) {
    max-width: calc(50% - 20px); /* Ajuste conforme necessário para a largura máxima desejada */
  }

  @media (max-width: 1085px) {
    max-width: 428px; 
    margin-right: 2%; 
    margin-top: -8.7%;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin-top: -5.7%;
  }

  @media (max-width: 850px) {
      max-width: 350px; 
  }

  @media (max-width: 768px) {
      margin-top: -4.7%;
      max-width: 250px; 
  }

  @media (max-width: 650px) {
      margin-right: 0%;
      margin-left: -4.5%;
      margin-top: -3.35%;
  }

  @media (max-width: 520px) {
      margin-left: -6.6%;
      margin-top: -4.2%;
  }

  @media (max-width: 483px) {
      margin-left: -7.6%;
      margin-top: -4.65%;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      margin-left: -8.8%;
      margin-top: -5.35%;
  }
`;
