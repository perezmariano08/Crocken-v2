import styled from "styled-components";

export const LoadingPageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--orange);
    width: 100%;
    height: 100%;

    img {
        width: 300px;
        animation: pulse 1s ease-in-out infinite; /* Aplica la animación 'pulse' con una duración de 1 segundo */
    }

    @media (max-width: 768px) {
        img {
            width: 200px;
        }
    }

    @keyframes pulse {
    0% {
        transform: scale(1);
        opacity: 0.7;
    }
    50% {
        transform: scale(1.1);
        opacity: 1;
    }
    100% {
        transform: scale(1);
        opacity: 0.7;
    }
}
`