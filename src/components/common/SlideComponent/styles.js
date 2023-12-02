import styled from "styled-components";
import "./custom-splide.css";

export const Container = styled.div`
      padding: 28px 133px;

      max-width: 304px;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: ${({ theme }) => theme.COLORS.DARK_200};

      @media (max-width: 1170px) {
      padding: 28px 90px;
      }

      @media (max-width: 1070px) {
      padding: 28px 40px;
      }
`;