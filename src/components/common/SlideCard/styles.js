import styled from "styled-components";

export const Container = styled.div`
    .like {
      position: absolute;
      right: 0;
      font-size: 1.6rem;
      cursor: pointer;
    }

    img {
      max-width: 176px;
      max-height: 176px;
    }
    
    .title{
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-size: 24px;
      font-family: 'Poppins', sans-serif;
    }

    .paragraph{
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-size: 14px;
      text-align: center;
    }
    .value {
      color: ${({ theme }) => theme.COLORS.BLUE_200};
    }
    svg, span{
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    .quantity {
      display: flex;
      align-items: center;      
      gap: 1rem;
      margin-top: 1rem;

      > span {
        display: flex;
        gap: 0.5rem;
      }

      >button{
        width: 92px;
      }
    }
`;