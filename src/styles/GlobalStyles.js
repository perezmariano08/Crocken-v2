import { createGlobalStyle } from "styled-components";

// FONTS
// Obviously
import ObviouslyThin from "../assets/fonts/Obviously/Obviously-Thin.ttf"
import ObviouslyLight from "../assets/fonts/Obviously/Obviously-Light.ttf"
import ObviouslyRegular from "../assets/fonts/Obviously/Obviously-Regular.ttf"
import ObviouslyMedium from "../assets/fonts/Obviously/Obviously-Medium.ttf"
import ObviouslySemibold from "../assets/fonts/Obviously/Obviously-Semibold.ttf"
import ObviouslyBold from "../assets/fonts/Obviously/Obviously-Bold.ttf"
import ObviouslyBlack from "../assets/fonts/Obviously/Obviously-Black.ttf"
import ObviouslySuper from "../assets/fonts/Obviously/Obviously-Super.ttf"

// Obviously-Narrow
import ObviouslyNarrowThin from "../assets/fonts/Obviously-Narrow/Obviously-Narrow-Thin.ttf"
import ObviouslyNarrowLight from "../assets/fonts/Obviously-Narrow/Obviously-Narrow-Light.ttf"
import ObviouslyNarrowRegular from "../assets/fonts/Obviously-Narrow/Obviously-Narrow-Regular.ttf"
import ObviouslyNarrowMedium from "../assets/fonts/Obviously-Narrow/Obviously-Narrow-Medium.ttf"
import ObviouslyNarrowSemibold from "../assets/fonts/Obviously-Narrow/Obviously-Narrow-Semibold.ttf"
import ObviouslyNarrowBold from "../assets/fonts/Obviously-Narrow/Obviously-Narrow-Bold.ttf"
import ObviouslyNarrowBlack from "../assets/fonts/Obviously-Narrow/Obviously-Narrow-Black.ttf"
import ObviouslyNarrowSuper from "../assets/fonts/Obviously-Narrow/Obviously-Narrow-Super.ttf"

export const GlobalStyles = createGlobalStyle`    
    :root {
        /* Primary Color ------------------ */
        --orange: #ff4713;
        --blue-dark: #001529;
        /* Second Color ------------------- */
        --blue: #0a2e4a;
        --red: #eb2c0b;
        --yellow: #ff9e18;
        --pink: #f9c6c0;
        /* Gray Scale --------------------- */
        --600: #141414;
        --500: #444444;
        --400: #686868;
        --300: #9b9b9b;
        --200: #eeeeee;
        --100: #fafafa;
        /* Gray Scale --------------------- */
        --blue-gradient: linear-gradient(to bottom, var(--blue), var(--blue-dark));
        --orange-gradient: linear-gradient(to bottom, var(--orange), var(--red));
        /* Modals ------------------------- */
        --green: #00cf45;
        /* Shadows ------------------------ */
        --box-shadow: 0px 0px 20px -1px rgba(0, 0, 0, 0);
        --text-shadow: 2px 2px 3px rgba(0,0,0,0.5);
    }


    // Estilo de la barra de desplazamiento para Chrome
    ::-webkit-scrollbar {
        width: 10px; /* Ancho de la barra de desplazamiento */
    }

    /* Estilo del botón de flecha (flecha de desplazamiento) en Chrome */
    ::-webkit-scrollbar-button {
        display: none;
    }

    /* Estilo de la pista (fondo) de la barra de desplazamiento en Chrome */
    ::-webkit-scrollbar-track {
        background-color: #f0f0f0; /* Color de fondo de la pista */
    }

    /* Estilo del pulgar (el indicador que se arrastra) de la barra de desplazamiento en Chrome */
    ::-webkit-scrollbar-thumb {
        background-color: #666; /* Color del pulgar */
        height: 80px;
    }

    /* Estilo del pulgar cuando se pasa el mouse por encima en Chrome */
    ::-webkit-scrollbar-thumb:hover {
        background-color: #999; /* Color del pulgar al pasar el mouse por encima */
    }

    html {
        scroll-behavior: smooth;
    }

    * {
        font-family: 'Obviously', sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: var(--100);
        -webkit-tap-highlight-color: transparent;
        overflow-x: hidden
    }

    a {
        text-decoration: none;
    }


    li {
        list-style: none;
    }

    

    /** FONTS ----------------------------------------- */
    /*? Obviously ---------------------------------------------- */
    /* Thin ---------------------------------------------------- */
    @font-face {
        font-family: 'Obviously';
        src: url(${ObviouslyThin});
        font-weight: 100;
    }
    /* Light ---------------------------------------------------- */
    @font-face {
        font-family: 'Obviously';
        src: url(${ObviouslyLight});
        font-weight: 200;
    }
    /* Regular ---------------------------------------------------- */
    @font-face {
        font-family: 'Obviously';
        src: url(${ObviouslyRegular});
        font-weight: 300;
    }
    /* Medium ---------------------------------------------------- */
    @font-face {
        font-family: 'Obviously';
        src: url(${ObviouslyMedium});
        font-weight: 400;
    }
    /* Semibold ---------------------------------------------------- */
    @font-face {
        font-family: 'Obviously';
        src: url(${ObviouslySemibold});
        font-weight: 500;
    }
    /* Bold ---------------------------------------------------- */
    @font-face {
        font-family: 'Obviously';
        src: url(${ObviouslyBold});
        font-weight: 600;
    }
    /* Black ---------------------------------------------------- */
    @font-face {
        font-family: 'Obviously';
        src: url(${ObviouslyBlack});
        font-weight: 700;
    }
    /* Super ---------------------------------------------------- */
    @font-face {
        font-family: 'Obviously';
        src: url(${ObviouslySuper});
        font-weight: 800;
    }
    /*? Obviously-Narrow---------------------------------------------- */
    /* Thin ---------------------------------------------------- */
    @font-face {
        font-family: 'Obviously-Narrow';
        src: url(${ObviouslyNarrowThin});
        font-weight: 100;
    }
    /* Light ---------------------------------------------------- */
    @font-face {
        font-family: 'Obviously-Narrow';
        src: url(${ObviouslyNarrowLight});
        font-weight: 200;
    }
    /* Regular ---------------------------------------------------- */
    @font-face {
        font-family: 'Obviously-Narrow';
        src: url(${ObviouslyNarrowRegular});
        font-weight: 300;
    }
    /* Medium ---------------------------------------------------- */
    @font-face {
        font-family: 'Obviously-Narrow';
        src: url(${ObviouslyNarrowMedium});
        font-weight: 400;
    }
    /* Semibold ---------------------------------------------------- */
    @font-face {
        font-family: 'Obviously-Narrow';
        src: url(${ObviouslyNarrowSemibold});
        font-weight: 500;
    }
    /* Bold ---------------------------------------------------- */
    @font-face {
        font-family: 'Obviously-Narrow';
        src: url(${ObviouslyNarrowBold});
        font-weight: 600;
    }
    /* Black ---------------------------------------------------- */
    @font-face {
        font-family: 'Obviously-Narrow';
        src: url(${ObviouslyNarrowBlack});
        font-weight: 700;
    }
    /* Super ---------------------------------------------------- */
    @font-face {
        font-family: 'Obviously-Narrow';
        src: url(${ObviouslyNarrowSuper});
        font-weight: 800;
    }
    
    
    /** DESKTOP ----------------------------------------- */
    /*? Headings ---------------------------------------- */
    h1 {
        font-weight: 800;
        font-size: 50px;
        line-height: 50px;
        font-family: 'Obviously';
    }

    h2 {
        font-weight: 800;
        font-size: 40px;
        line-height: 40px;
        font-family: 'Obviously';
    }

    h3 {
        font-weight: 800;
        font-size: 35px;
        line-height: 35px;
        font-family: 'Obviously';
    }

    h4 {
        font-weight: 800;
        font-size: 30px;
        line-height: 30px;
        font-family: 'Obviously';
    }

    h5 {
        font-weight: 800;
        font-size: 25px;
        line-height: 25px;
        font-family: 'Obviously';
    }

    h6 {
        font-weight: 800;
        font-size: 20px;
        line-height: 20px;
        font-family: 'Obviously';
    }

    /*? Paragraph --------------------------------------- */
    p {
        font-weight: 300;
        font-size: 14px;
        color: var(--600);
    }

    /*? Buttons ----------------------------------------- */
    .button {
        border-radius: 10px;
        font-weight: 300;
        padding: 12px 24px;
        display: flex;
        gap: 10px;
        align-items: center;
        border: 1px solid transparent;
        background-color: transparent;
        width: fit-content;
    }

    .button.none {
        padding: 0;
    }

    /* Size */
    .button.small {
        font-size: small;
    }

    .button.medium {
        font-size: medium;
    }

    .button.large {
        font-size: large;
    }

    /* Outline */
    .outline-orange {
        border: 1px solid var(--orange);
        background-color: transparent;
        color: var(--orange);
    }

    .outline-blue {
        border: 1px solid var(--blue);
        background-color: transparent;
        color: var(--blue);
    }

    /* Fllled */
    .filled-orange {
        color: var(--100);
        background-color: var(--orange);
        border-color: var(--oran);
    }

    .filled-blue {
        color: var(--100);
        background-color: var(--blue);
        border-color: var(--blue);
    }


    /* TABLET -------------------------------------------------------------------- */
    @media (max-width: 768px) {
        /* * {
            cursor: none !important;
        } */

        /* Headings --------------------------------------------------------------- */
        h1 {
            font-size: 40px;
            line-height: 40px;
        }

        h2 {
            font-size: 35px;
            line-height: 35px;
        }

        h3 {
            font-size: 30px;
            line-height: 30px;
        }

        h4 {
            font-size: 25px;
            line-height: 25px;
        }

        h5 {
            font-size: 20px;
            line-height: 20px;
        }

        h6 {
            font-size: 18px;
            line-height: 18px;
        }
    }

    // KeyFrames
    @keyframes float {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-5px);
        }
        100% {
            transform: translateY(0);
        }
    }

    @keyframes arrowDown {
        0% {
            transform: translateY(-5px);
        }   
        50% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(-5px);
        }
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
