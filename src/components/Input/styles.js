import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
align-items: center;

background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  margin-bottom: 0.5rem;
  border-radius: 0.5rem;

  > input {
    height: 3.5rem;
    width: 100%;

    padding: 0.8rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  > svg {
    margin-left: 1rem;
  }  
`