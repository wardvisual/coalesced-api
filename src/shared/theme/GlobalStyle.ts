import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'sansation';
        src: url('../../../public/assets/fonts/Sansation-Regular-webfont.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'sansation';
        src: url('../../../public/assets/fonts/Sansation-Italic-webfont.woff') format('woff');
        font-weight: normal;
        font-style: italic;
    }

    @font-face {
        font-family: 'sansation';
        src: url('../../../public/assets/fonts/Sansation-Bold-webfont.woff') format('woff');
        font-weight: bold;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'sansation';
        src: url('../../../public/assets/fonts/Sansation-BoldItalic-webfont.woff') format('woff');
        font-weight: bold;
        font-style: italic;
    }

    @font-face {
        font-family: 'sansation';
        src: url('../../../public/assets/fonts/Sansation-Light-webfont.woff') format('woff');
        font-weight: lighter;
        font-style: italic;
    }
    
    @font-face {
        font-family: 'sansation';
        src: url('../../../public/assets/fonts/Sansation-LightItalic-webfont.woff') format('woff');
        font-weight: lighter;
        font-style: italic;
    }
    
    *, *::before, *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body, html {
        font-family: sansation;
        font-weight: normal;
        font-style: normal;
    }
    
    a {
        text-decoration: none;
    }
    
    ol, ul {
        list-style: none;
    }
`;

export default GlobalStyle;
