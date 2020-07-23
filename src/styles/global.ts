import { createGlobalStyle } from 'styled-components';
import themes from './themes';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        display: flex;
        flex-direction: column;
        font-family: Roboto, sans-serif;
        color: ${themes.colors.white};
        background-color: ${themes.colors.primary};
    }

    strong, h1 {
        -webkit-user-select: none;
    }

    button, a {
        cursor: pointer
    }

    a {
        text-decoration: none;
        color: #4383E3;
    }
`;

export default GlobalStyle;