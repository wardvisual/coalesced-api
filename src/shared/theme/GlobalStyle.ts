import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --color-black-1: #0D0D0D;  
        --color-white-1: #EEFAFF;  
        
        --radius-5: 5px;
    } 
    
    @font-face {
        font-family: 'poppins';
        src: local('poppins'), url(/public/assets/fonts/Poppins-Regular.woff) format('woff');
        font-style: normal
        font-weight: normal;
        font-display: fallback;
    }
    
    *, *::before, *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body, html {
        background: var( --color-black-1);
        color: var(--color-white-1);
        font-family: 'poppins';
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
