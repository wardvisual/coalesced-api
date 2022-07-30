import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    // @font-face {
    //     font-family: 'sansation';
    //     src: url('../../../public/assets/fonts/Sansation-Bold-webfont.woff') format('woff');
    //     font-weight: normal;
    //     font-style: normal;
    //     font-display: swap;
    // }
    
    // @font-face {
    //     font-family: 'poppins';
    //     src: url('../../../public/assets/fonts/Poppins-Regular.woff') format('woff');
    //     font-weight: normal;
    //     font-style: normal;
    //     font-display: swap;
    // }
    
    *, *::before, *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'poppins';
        font-weight: normal;
        font-style: normal;
    }

    body, html {
        background: #0D0D0D;
    }
    
    a {
        text-decoration: none;
    }
    
    ol, ul {
        list-style: none;
    }
`;

export default GlobalStyle;
