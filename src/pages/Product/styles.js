import styled from "styled-components";
//import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`

  .content {
      padding: 28px 123px;

      img{
        max-width: 390px;
        max-height: 390px;
      }
      .section1 {
        display: flex;
        align-items: center;
        margin: 3rem 0;
        gap: 3rem;

        @media(min-width: 1450px){
        display: flex;
        flex-direction: column;
        gap: 1rem;

        img{
        max-width: 270px;
        max-height: 270px;
      }
    }

      }
      .section2 {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        h1{
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          font-size: 2.5rem;
        }

        p{
          color: ${({ theme }) => theme.COLORS.LIGHT_300};
          font-family: 'Poppins', sans-serif;
          font-weight: 300;
          font-size: 1.5rem;
        }

        .ingredient{
          display: flex;
          gap: 1rem;
        }

        .quantity{
          margin-top: 1.5rem;
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
          display: flex;
          align-items: center;      
          gap: 1rem;

          > span {
            display: flex;
            gap: 0.7rem;
          }

          >button {
            max-width: 162px;
          }
        }
        
        @media(min-width: 1450px){
          gap: 1rem;
          align-items: center;
        }
      }
  }

      .headFooterAbsolute {
      position: absolute;
      bottom: 0;
      width: 100%;
    }
`;