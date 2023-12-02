import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  > h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    margin-top: 24px;
  }
`;