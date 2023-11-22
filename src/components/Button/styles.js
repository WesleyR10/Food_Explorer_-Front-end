import styled from "styled-components";

export const Container = styled.button`
width: 100%;
background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
color: ${({ theme }) => theme.COLORS.LIGHT_100};

height: 3rem;
border: 0;
padding: 0 0.8rem;
margin-top: 2rem;
border-radius: 0.5rem;
font-family: 'Poppins', sans-serif;
font-weight: 400;

&:disabled {
  opacity: 0.5;
}
`;