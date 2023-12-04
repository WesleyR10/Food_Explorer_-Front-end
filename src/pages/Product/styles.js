import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

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
          flex-wrap: wrap;
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
            cursor: pointer;
          }

          >button {
            max-width: 165px;
          }
        }
        
        @media(min-width: 1450px){
          gap: 1rem;
          align-items: center;
        }
      }
  }

  .headFooterAbsolute {
    width: 100%;
    
  }
    
    @media (max-width: 1450px) {
      .headFooterAbsolute {
        width: 100%;
        position: absolute;
        bottom: 0;
      }
    }

    @media (max-width: 1170px) {
        .content{
          padding: 28px 90px;
        } 
      }

      @media (max-width: 1070px) {
        .content{
          padding: 28px 40px;
        
        img{
          max-width: 330px;
          max-height: 330px;
        }
        .section2{
            h1{
            font-size: 2.1rem;
          }
          p{
            font-size: 1.2rem;
          }
        }
      } 
    }
    

    @media(max-width: 768px){
      .content{
        img{
          max-width: 264px;
          max-height: 264px;
        }

      .section1{
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      
      .section2{
        align-items: center;
        h1{
          font-size: 1.68rem;
        }
        p{
          font-size: 1.2rem;
          text-align: justify;
        }
      }
    }

    .headFooterAbsolute {
      width: 100%;
      position: relative;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
      .content{
        img{
          max-width: 234px;
          max-height: 234px;
        }
      
      .section2{
        h1{
          font-size: 1.48rem;
        }
        p{
          font-size: 1rem;
          text-align: justify;
        }
      }
    }
  }
`;