import styled from "styled-components";

export const Container = styled.header`
  height: 104px;
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: start;

  gap: 32px;

  padding: 28px 123px;

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