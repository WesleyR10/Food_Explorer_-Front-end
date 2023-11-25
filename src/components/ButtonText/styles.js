import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  background: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  border: none;
  font-size: 1.5rem;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;

  display: flex;
  align-items: center;
  gap: 3.5px;

`