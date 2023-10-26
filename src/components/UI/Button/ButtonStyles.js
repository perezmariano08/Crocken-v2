import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const ButtonLinkStyled = styled.button`
    font-size: 14px;
    width: auto;
    font-weight: 400;
    cursor: pointer;
    font-family: 'Poppins';
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border: none;
    background: ${({ background }) => `var(--${background})`};
    color: ${({ color }) => `var(--${color})`};
    border-radius: ${({ radius }) => `${radius}px`};
    padding: 5px 10px;

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
`