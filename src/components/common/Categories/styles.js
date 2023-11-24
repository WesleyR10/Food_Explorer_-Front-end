import styled from "styled-components";

export const Container = styled.div`
  padding: 28px 133px;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: 'Poppins', sans-serif;
    font-size: .7rem;

    display: flex;
    flex-direction: column;
    gap: 2.2rem;
  `;