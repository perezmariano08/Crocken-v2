import styled from "styled-components";

export const LoginWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        font-size: 0.9rem;
        color: var(--blue-dark);
        line-height: 0rem;
        width: 100%;
        font-family: 'Poppins';
    }
`

export const LoginWelcomeWrapper = styled.div`
    display: flex;
    background-color: var(--200);
    width: 50%;
    height: 100%;
    padding: 3rem;

    img {
        height: 30px;
    }

    @media (max-width: 768px) {
        display: none;
    }
`
export const LoginFormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem;
    width: 50%;
    height: 100%;
    background: var(--orange-gradient);

    @media (max-width: 768px) {
        width: 100%;
    }
`


export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    background-color: var(--100);
    padding: 50px;
    border-radius: 20px;


    @media (max-width: 768px) {
        width: 100%;
        padding: 50px 20px;
    }

    h4 {
        text-align: center;
        padding-bottom: 2rem
    }

    span {
        font-size: 0.9rem;
        color: var(--red);
        width: 100%;
        font-family: 'Poppins';
    }


    .submit-buttons input:hover{
        letter-spacing: 0.5px;
    }

    a .button-register {
        background-color: var(--blue-dark);
    }

`

export const FormButtons = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    input {
        width: 100%;
        padding: 0.4rem;
        background-color: var(--orange);
        cursor: pointer;
        border: none;
        color: var(--100);
        font-size: 0.9rem; 
        font-weight: 300;
        border-radius: 4px;
        transition: all 0.3s ease;
        font-family: 'Poppins';
    }

    input:hover{
        letter-spacing: 0.5px;
    }

    a {
        text-align: center;
    }
`