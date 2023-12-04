import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    .content{
      padding: 28px 123px;

      h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        margin-bottom: 2rem;
      }
      .btnBack{
        margin: 0.7rem 0 1.5rem 0;
      }

      .section1 {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
      }

      .name,.value ,select {
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
      }
      .name,.value{
        border-radius: 0.5rem;
      }
      select {
        border-radius: 0.5rem 0 0 0.5rem;
      }

      input[type="file"]{
        display: none;
      }

      .input-wrapper {
        display: flex;
        flex-direction: column;
        flex: 1;
        gap: 1rem;
      }

      .input-file {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        
        svg{
          font-size: 2rem;
        }
        label{
          padding: 0.8rem;
          display: flex;
          text-align: center;
          align-items: center;
          gap: 1rem;
          height: 3.4rem;
          background-color: ${({ theme }) => theme.COLORS.DARK_800};
        }
      }
      
      .category svg {
        order: 2; /* Mudando a ordem do ícone */
        margin-right: 1rem;
      }

      .ingredients {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      border-radius: 8px;
    }

    .button{
      margin-top: 2rem;
      width: 180px;
      margin-left: auto; /* Move os botões para a direita */
    }
  }

  @media (max-width: 1170px) {
    .content{
      padding: 28px 90px;
    } 
  }

  @media (max-width: 1070px) {
    .content{
      padding: 28px 40px;

      .section1 {
        gap: 1rem;
      }
    } 
  }

  @media (max-width: 830px) {
    .content{
      padding: 7px 40px;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      .btnBack{
        margin: 0.4rem 0 0 0;
      }
      h1{
        margin-bottom: 0rem;
      }
      .section1 {
        flex-direction: column;
        gap: 0.5rem;
      }
      .input-wrapper {
        gap: 0.75rem;
      }
      .section2{
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      .button{
        width: 100%;
        background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
        margin-bottom: 2rem;
      }
    } 
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
    .btnBack{
        font-size: 1.2rem;
      }
    h1{
        font-size: 1.5rem;
      }
  }
`;