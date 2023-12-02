import styled from "styled-components";

export const Container = styled.div`
  padding: 28px 133px;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: 'Poppins', sans-serif;
    font-size: .7rem;

    display: flex;
    flex-direction: column;
    gap: 2.2rem;

    @media (max-width: 1170px) {
      padding: 28px 90px;
      }

    @media (max-width: 1070px) {
      padding: 28px 40px;
    }
    
    @media (max-width: 980px){
      align-items: center;
    }
    
    @media (max-width: 768px) {
      padding: 14px 40px;

      h1{
        display: flex;
        justify-content: center;
      }
      }  
  `;