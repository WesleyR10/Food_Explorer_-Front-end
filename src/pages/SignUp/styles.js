import styled from "styled-components";
import backgroundImg from '../../assets/Logo-Background.png'
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 6.75rem 0 9.5rem;

  @media(max-width: ${DEVICE_BREAKPOINTS.LG}){
    margin: 0 2.5rem 0 3.5rem;
    }

  @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
      display: grid;
      justify-content: center; 
      align-items: start ;
      padding: 1rem;
  } 

  @media(max-width: ${DEVICE_BREAKPOINTS.SM}){
    margin: 1rem 1rem;
  } 
`

export const Form = styled.form`
  padding: 4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  text-align: center;

  > h1 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    margin: 0 auto;
  }

  >a {
    display: block;
    margin: 0 auto;
    margin-top: 2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    text-align: center;
  }

  > label {
    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    margin-top: 1.5rem;
    padding: 0.5rem;
  }

  > div {
  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
  box-sizing: border-box;

}

  @media(max-width: ${DEVICE_BREAKPOINTS.LG}){
    padding: 3rem;
    > h1 {
    font-size: 1.7rem;
    }
  }

  @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
    background-color: transparent;
    padding: 0rem;
    > h1{
      display: none;
    }
  }
`

export const Background = styled.div`
  width: 324px;
  height: 100%;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: contain;

  @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
    flex: 1;
    object-fit: cover;
  }
  
  @media(max-width: ${DEVICE_BREAKPOINTS.SM}){
  width:100%;
  }
`