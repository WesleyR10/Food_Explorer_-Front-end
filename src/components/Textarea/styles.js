import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 172px;

  background-color:  ${({ theme }) => theme.COLORS.DARK_800};
  color:  ${({ theme }) => theme.COLORS.LIGHT_100};

  border: none;
  resize: none;

  border-radius: 0.5rem;
  padding: 16px;

  &::placeholder {
    color:  ${({ theme }) => theme.COLORS.LIGHT_500}
  }
`