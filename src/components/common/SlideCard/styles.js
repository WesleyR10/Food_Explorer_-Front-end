import styled from "styled-components";

export const Container = styled.div`
    section{
      padding-left: 0.93rem;
    }
    
    .card{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.6rem;
      width: 282px;
      height: 411px;  
      position: relative;
      border-radius: 0.5rem;
      box-shadow: rgba(0,115,150,0.4) -5px 5px, rgba(0,115,150,0.3) -10px 10px, rgba(0,115,150,0.2) -15px 15px, rgba(0,115,150,0.1) -20px 20px, rgba(0,115,150,0.05) -25px 25px;
    }

    .like, .edit {
      position: absolute;
      right: 0;
      margin-right: 0.6rem;
      margin-top: 0.6rem;
      cursor: pointer;

      >svg{
        font-size: 1.5rem;
      }
    }

    img {
      width: 176px;
      height: 176px;
      cursor: pointer;
    }
    
    .title{
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-size: 1.5rem;
      font-family: 'Poppins', sans-serif;
      text-align: center;
    }

    .paragraph{
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-size: 0.87rem;
      text-align: center;
      margin: 0px 2px;
      max-height: 44px;
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
      gap: 0.5rem;

      > span {
        display: flex;
        gap: 0.5rem;
      }

      >button{
        width: 92px;
      }
    }

    @media (max-width: 980px){
      .card{
        width: 272px;
        box-shadow: 8px 8px 15px 0px rgba(0,115,150,0.86);
      }
      .title{
      font-size: 1.4rem;
      }
      .paragraph{
        font-size: 0.8rem;
      }
    }

    @media (max-width: 650px){
      .card{
        width: 210px;
        height: 292px;  
      }
      img{
        margin-top: 1.5rem;
        width: 88px;
        height: 88px;
      }
      .title{
      font-size: 0.87rem;
      }
      .paragraph{
        display: none;
      }
      .value{
        font-size: 1rem;
      }

      .quantity {
      flex-direction: column;
      margin-top: 0rem;
      gap: 0.9rem;

      > span {
        gap: 1rem;
      }

      >button{
        width: 162px;
      }
      }
    }

    @media (max-width: 520px){
      section{
        padding-left: 0rem;
      }
    }
`;