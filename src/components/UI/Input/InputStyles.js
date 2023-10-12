import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
`

export const InputWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;

    .underline::before {
        content: '';
        position: absolute;
        height: 1px;
        width: 100%;
        bottom: 0;
        left: 0;
        background: rgba(0, 0 , 0, 0.2);
    }

    .underline::after {
        content: '';
        position: absolute;
        height: 1px;
        width: 100%;
        bottom: 0;
        left: 0;
        background: var(--orange);
        transform: scaleX(0);
        transition: all .3s ease-in-out;
        transform-origin: left;
    }
`

export const GlobalInput = styled.input`
    position: relative;
    background-color: transparent;
    padding: 5px;
    outline: none;
    font-size: 0.9rem;
    color: var(--blue);
    width: 100%;
    border: none;
    font-family: 'Poppins';

    &:focus ~ .underline::after {
        transform: scaleX(1);
    }
`

export const InputLabel = styled.p`
    width: 100%;
    font-size: 10px;
    text-align: end;
    color: red;
`