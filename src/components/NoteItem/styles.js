import styled from 'styled-components'

export const Container = styled.div`

  .added {
    background-color: ${({ theme }) => theme.COLORS.LIGHT_600};
  }

  display: flex;
  align-items: center;
  
  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.DARK_800};
  color: ${({ theme }) => theme.COLORS.TOMATO_100};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : `1px solid ${theme.COLORS.LIGHT_300}`};

  margin: 8px 0px;
  margin-left: 0.5rem;
  border-radius: 10px;
  padding-right: 16px;

  > button { 
    border: none;
    background: none;
    display: flex;

    svg{
      margin-left: 0.5rem;
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
    width: 100%;
    height: 2rem;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`