import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --color-black-1: #0D0D0D;  
        --color-white-1: #EEFAFF;  
        
        --radius-5: 5px;
    }
    
    *, *::before, *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'poppins';
        font-weight: normal;
        font-style: normal;
    }

    body, html {
        background: var( --color-black-1);
    }
    
    a {
        text-decoration: none;
    }
    
    ol, ul {
        list-style: none;
    }
    
    .root__layout {
        padding: 1em;
    }
`;

export default GlobalStyle;
