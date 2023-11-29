import styled from "styled-components";

export const Container = styled.div`
  
  .container {
  padding: 28px 123px;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

.flexCard{
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

  .card {
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_500};
    padding: 1.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.9rem;

    img{
        max-width: 220px;
        max-height: 220px;
      }

    &:hover{
      border-color: ${({ theme }) => theme.COLORS.GREEN}; 

      span{
        color: ${({ theme }) => theme.COLORS.GREEN};
      }

      img{
        transform: scale(1.1);
        filter: contrast(101%) saturate(200%);
      }
    }
}

  .content{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h2{
      text-align: center;
    }

    p{
      width: 200px;
      text-align: center;
    }

    span{
      text-align: center;
      color: ${({ theme }) => theme.COLORS.ORANGE};
      font-weight: bold;
    }
  }

`;