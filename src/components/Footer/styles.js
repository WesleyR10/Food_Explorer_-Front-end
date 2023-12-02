import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.footer`
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
      font-size: 0.87rem;
    }

    @media (max-width: 1170px) {
    padding: 28px 90px;
    }

    @media (max-width: 1070px) {
      padding: 28px 40px;
    }
    
    @media (max-width: 520px) {
      img{
        max-width: 140px;
        max-height: 19px;
      }
      p {
        font-size: 0.75rem;
      }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      padding: 14px 40px;
      flex-direction: column;
      gap: 0.5rem;
    }
`