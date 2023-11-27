import styled from "styled-components";

export const Container = styled.div`
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    .content{
      padding: 28px 123px;

      h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        margin-bottom: 2rem;
      }
      .btnBack{
        margin: 0.7rem 0 1.5rem 0;
      }

      .section1 {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
      }

      .name,.value ,select {
        background-color: ${({ theme }) => theme.COLORS.DARK_800};
      }

      input[type="file"]{
        display: none;
      }

      .input-wrapper {
        display: flex;
        flex-direction: column;
        flex: 1;
        gap: 1rem
      }

      .input-file {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        
        svg{
          font-size: 2rem;
        }
        label{
          padding: 0.8rem;
          display: flex;
          text-align: center;
          align-items: center;
          gap: 1rem;
          height: 3.4rem;
          background-color: ${({ theme }) => theme.COLORS.DARK_800};
        }
      }
      
      .category svg {
        order: 2; /* Mudando a ordem do ícone */
        margin-right: 1rem;
      }

      .ingredients {
      display: flex;
      flex-wrap: wrap;
      height: 48px;
      gap: 0.5rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      border-radius: 8px;

      &.added {
        background-color: red;
      }
    }
  }
`;