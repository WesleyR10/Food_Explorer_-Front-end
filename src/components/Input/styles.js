import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
align-items: center;

background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  border-radius: 0.5rem;

  > input , select {
    height: 3.5rem;
    width: 100%;

    padding: 0.8rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;
    border: 0;
    
    appearance: none;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
    &::placeholder {
      font-size: 0.87rem;
    }
  }

  select option {
    background-color: ${({ theme }) => theme.COLORS.LIGHT_500}; /* Altera o fundo das opções */
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > svg {
    margin-left: 1rem;
  }  
`