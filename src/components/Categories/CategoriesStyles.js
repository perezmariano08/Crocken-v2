import { motion } from "framer-motion";
import styled from "styled-components";

export const CategoriesStyled = styled.div`
    display: flex;
    gap: 10px;
    width: 100%;
    overflow-x: scroll;
    justify-content: start;
    white-space: nowrap;
    flex-wrap: wrap;
    
    &::-webkit-scrollbar {
        display: none; 
    }

    @media (max-width: 768px) {
        width: 100%;
        flex-wrap: nowrap;
        overflow-x: scroll;
        justify-content: flex-start;
        white-space: nowrap;
    }
`

export const Category = styled(motion.div)`
    cursor: pointer;
    font-family: 'Poppins';
    display: flex;
    align-items: center;
    color: var(--blue-dark);
    justify-content: start;
    min-width: auto;
    font-size: 14px;
    font-weight: 400;
    background-color: ${({ selected }) => selected ? 'var(--orange)' : 'var(--200)'};
    color: ${({ selected }) => selected ? 'var(--100)' : 'var(--blue-dark)'};
    border: none;
    gap: 8px;
    height: 40px;
    padding: 0 10px 0 5px; 
    border-radius: 20px;
    transition: all .3s ease-in-out;
`

export const CategoryImg = styled.div`
    color: var(--orange);
    height: 30px;
    width: 30px;
    border-radius: 20px;
    overflow: hidden;

    img {
        object-fit: cover;
        height: 100%;
        width: 100%;
    }
`

export const CategoriesProductsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
`

export const CategoriesButtons = styled.div`
    display: flex;
    gap: 10px;
`
