import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  
  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.DARK_800};
  color: ${({ theme }) => theme.COLORS.TOMATO_100};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : `1px solid ${theme.COLORS.LIGHT_300}`};

  margin: 0.5rem 0rem;
  margin-left: 0.5rem;
  border-radius: 10px;
  padding-right: 0.6rem;

  .added {
    background-color: ${({ theme }) => theme.COLORS.LIGHT_600};
  }
  overflow: hidden; 

  > button { 
    border: none;
    background: none;
    display: flex;

    svg{
      margin-left: 0.25rem;
      font-size: 1.2rem;
    }
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.TOMATO_100};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > input {
    max-width: 125px;
    height: 2rem;

    padding: 0.7rem 0.4rem 0.7rem 0.6rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`