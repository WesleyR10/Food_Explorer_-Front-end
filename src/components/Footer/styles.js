import styled from "styled-components";

export const Container = styled.header`
    padding: 28px 123px;
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
      max-width: 186px;
      max-height: 30px;
    }

    p {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-size: 14px;
    }

`