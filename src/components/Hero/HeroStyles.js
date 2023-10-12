import styled from "styled-components";

export const HeroContainerStyled = styled.section`
    background-color: var(--red);
    display: flex;
    width: 100%;
    height: calc(100vh - 80px);
    position: relative;

    img {
        object-fit: cover;
        height: 100%;
        width: 100%;
    }

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: rgb(235,44,11);
        background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);    
    }

    @media (max-width: 768px) {
        height: 350px;

        &::before {
            background: rgb(235,44,11);
            background: radial-gradient(circle, rgba(0,0,0,.5) 0%, rgba(0,0,0,.8) 100%);    
        }
    }
`

export const HeroText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 100px;
    width: 50%;
    text-shadow: 1px 2px 0px var(--blue-dark);

    h1 {
        text-align: start;
        rotate: -3deg; 
        color: var(--100);
        text-transform: uppercase;
        animation: float 2s ease-in-out infinite;
    }

    span {
        text-shadow: 1px 2px 0px var(--red);
    }

    @media (max-width: 768px) {
        width: 100%;
        padding: 0 20px;
        left: 50%;
        transform: translate(-50%, -50%);
    }

`

export const HeroArrow = styled.div`
    background: var(--orange-gradient);
    border-radius: 20px;
    padding: 10px 5px;
    position: absolute;
    right: 50px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--100);

    :first-child {
        animation: arrowDown .4s ease-in-out infinite;
    }

    @media (max-width: 768px) {
        bottom: 20px;
        right: 20px;
        top: auto;
        transform: none;
    }
`