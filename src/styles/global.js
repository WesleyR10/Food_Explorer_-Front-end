import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from "./deviceBreakpoints"

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background-color: ${({ theme }) => theme.COLORS.DARK_300};
  -webkit-font-smoothing: antialiased;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
      font-size: 12px;
    }
}

body, input, button, textarea{
  font-family: 'Roboto Slab', serif;
  font-size: 1rem;
  outline: none;
}

a{
  text-decoration: none;
}

button, a {
  cursor: pointer;
  transition: filter 0.2s;
}

button:hover, a:hover {
  filter: brightness(0.9);
}
`