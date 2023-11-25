import styled from "styled-components";

export const Container = styled.header`
  height: 104px;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  display: flex;
  justify-content: space-around;
  align-items: center;

  gap: 32px;

  padding: 28px 123px;

  img{
      max-width: 186px;
      max-height: 30px;
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

`

export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 36px;
  }
`