import { createGlobalStyle } from "styled-components";
import businessman from "../img/businessman.jpg";

const GlobalStyle = createGlobalStyle`
    body {
        background-image: url(${businessman});
        background-position: center;
        background-size: cover;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
  
`;

export default GlobalStyle;
