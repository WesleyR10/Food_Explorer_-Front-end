import styled from "styled-components";

export const Container = styled.div`
  > h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    margin-top: 24px;
  }
`;