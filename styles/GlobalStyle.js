import { createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: ${(props) => props.theme.dark};
    }

    body{
        width: 100%;
        min-height: 100vh;
    }



`