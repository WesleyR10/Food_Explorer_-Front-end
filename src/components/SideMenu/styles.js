import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.aside`
  display: none;

  @media(max-width: 650px){
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    
    position: fixed;
    z-index: 2;
    
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;

    &[data-menu-is-open="true"]{
      transform: translateX(0);
  }
}
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 60px 28px 28px 62px;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};;

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
    padding: 60px 28px 28px 28px;
  }

`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
  font-weight: normal;
`;

export const Content = styled.div`
    flex-grow: 1;
    padding: 60px 28px 28px 62px;
    background-color: ${({ theme }) => theme.COLORS.DARK_400};

    h1{
      margin-top: 84px;
      font-family: 'Poppins', sans-serif;
      font-weight: 200;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
      padding: 60px 28px 28px 28px;
    }
`;