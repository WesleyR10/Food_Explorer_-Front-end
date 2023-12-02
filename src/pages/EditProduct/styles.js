import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    .content{
      padding: 28px 123px;

      .btnBack{
        margin: 0.7rem 0 1.5rem 0;
      }
      
      h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        margin-bottom: 2rem;
      }

      .section1 {
        display: flex;
        gap: 2rem;
      }

      .name,.value ,select {
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
      }

      label{
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
      }

      input[type="file"]{
        display: none;
      }

      .input-wrapper {
        display: flex;
        flex-direction: column;
        flex: 1;
        gap: 1rem
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
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
      }
      
      .category svg {
        order: 2; /* Mudando a ordem do ícone */
        margin-right: 1rem;
      }

      .ingredients {
      display: flex;
      flex-wrap: wrap;
      height: 48px;
      gap: 0.5rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      border-radius: 8px;

      &.added {
        background-color: red;
      }
    }

    .buttons{
      display: flex;
      margin-top: 2rem;
      gap: 2rem;
      max-width: 339px ;
      margin-left: auto; /* Move os botões para a direita */

      > .save, .delete{
        font-family: 'Poppins', sans-serif;
        font-weight: 200;
        font-size: 0.87rem;
      }

      > .save{
        background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
      }

      > .delete{
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
      }
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

        .ingredients{
          height: auto;
        }
      }
      .buttons{        
        margin-bottom: 2rem;
      }
    } 
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
      .content{
        .btnBack{
        font-size: 1.2rem;
        }
        h1{
        font-size: 1.5rem;
        }
        .buttons{
        width: 100%;
        gap: 1rem;
        }
      }
    }
`;