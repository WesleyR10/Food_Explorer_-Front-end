import styled from "styled-components";

export const Container = styled.header`
  height: 104px;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  display: flex;
  justify-content: space-around;
  align-items: center;

  gap: 2rem;

  padding: 28px 123px;

  img{
      max-width: 186px;
      max-height: 30px;
      cursor: pointer;
    }

  > button.first-button {
    width: 216px;
    font-size: 12px;
  }
  
  > div {
    height: 49px;
    width: 581px;

    > svg {
      cursor: pointer;
    }
  }

  @media (max-width: 1170px) {
    padding: 28px 90px;
  }

  @media (max-width: 1070px) {
      padding: 28px 40px;
  }

  @media (max-width: 850px) {
    gap: 1rem;

    img{
      width: 166px;
    }

    > button.first-button {
    width: 196px;
  }
  }

  @media(max-width: 650px){
    justify-content: space-between;
    padding: 56px 28px 24px 28px;
    
    div{
      display: none;
    }
    button.first-button{
      display: none;
    }
  }
`

export const Menu = styled.button`
  background-color: transparent;
  border: none;
  display: none;
  
  > svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  @media(max-width: 650px){
    display: block;
  }
`

export const ButtonMobile = styled.button`
  background-color: transparent;
  border: none;
  display: none;

  > svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  @media(max-width: 650px){
    display: block;
  }
`

export const Logout = styled.button`
  border: none;
  background: none;
  display: flex;
  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 2rem;
  }

  @media (max-width: 850px) {
    >svg{
      font-size: 1.8rem;
    }
  }

  @media (max-width: 650px) {
    display: none;
  }
`