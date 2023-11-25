import styled from "styled-components";

export const Container = styled.span`
  font-size: 0.8rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  padding: 5px 14px;
  border-radius: 5px;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
`