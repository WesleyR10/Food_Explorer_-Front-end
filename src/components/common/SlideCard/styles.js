import styled from "styled-components";

export const Container = styled.div`
    .card{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.6rem;
      height: 310px;
    }

    .like {
      position: absolute;
      right: 0;
      font-size: 1.6rem;
      cursor: pointer;
    }

    .edit {
      position: absolute;
      right: 0;
      font-size: 1.6rem;
      cursor: pointer;
    }

    img {
      width: 176px;
      height: 176px;
      cursor: pointer;
    }
    
    .title{
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-size: 24px;
      font-family: 'Poppins', sans-serif;
      text-align: center;
    }

    .paragraph{
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-size: 14px;
      text-align: center;
      height: 44px;
      overflow: hidden;

    }
    .value {
      color: ${({ theme }) => theme.COLORS.BLUE_200};
    }
    svg, span{
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 1.1rem;
      align-items: center;
    }

    .quantity {
      display: flex;
      align-items: center;      
      margin-top: 0.7rem;

      > span {
        display: flex;
      }

      >button{
        width: 92px;
      }
    }
`;