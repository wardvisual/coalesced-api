// import otf from '@/assets/font/Poppins-Black.otf';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        color: red;
    }
    
        
    // @font-face {
    //     font-family: 'Poppins',
    //     font-style: normal;
    //     font-weight: 400;
    //     font-display: fallback;
    //     src: local('Poppins'), url();
    // }
    
    a {
        text-decoration: none;
    }
    
    ol, ul {
        list-style: none;
    }
`;

export default GlobalStyle;
