import { motion } from "framer-motion"
import styled from "styled-components"

export const ProductsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 20px;
`

export const ProductCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--200);
    width: 250px;
    height: fit-content;
    padding: 5px;
    border-radius: 20px;
    gap: 10px;
    user-select: none;
    align-items: stretch;

    @media (max-width: 768px) {
        width: 100%;
        flex-direction: row;
        padding: 0;
        gap: 0;
    }
`

export const ProductCardImg = styled.div`
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
    height: 250px;
    position: relative;
    
    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    @media (max-width: 768px) {
        width: 50%;
        height: 190px;
        border-radius: 20px 0 0 20px;
    }
`

export const ProductCardFavorites = styled(motion.div)`
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: var(--600);
    display: flex;
    align-items: center;
    opacity: .9;
    gap: 5px;
    box-shadow: 5px 5px 15px rgba(0, 0 , 0, 0.1);
    
    div {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    svg {
        font-size: 18px;
        color: var(--100);
    }

    @media (max-width: 768px) {
        left: 10px;
    }
`

export const ProductCardFavoritesTrue = styled(ProductCardFavorites)`
    svg {
        color: var(--red);
    }
`

export const ProductCardTime = styled.div`
    position: absolute;
    left: 10px;
    bottom: 10px;
    padding: 3px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background-color: var(--600);
    display: flex;
    align-items: center;
    opacity: .8;
    gap: 5px;
    box-shadow: 5px 5px 15px rgba(0, 0 , 0, 0.1);

    svg {
        font-size: 12px;
        color: var(--100);
    }

    span {
        font-size: 10px;
        font-weight: 300;
        color: var(--100);
    }
`

export const ProductCardText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 5px;
    justify-content: space-between;
    .name {
        font-size: 20px;
        line-height: 20px;
        color: var(--blue-dark);
        font-family: 'Obviously-Narrow';
        font-weight: 700;
    }

    .stars {
        font-family: 'poppins';
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 12px;
        color: var(--500);
        svg {
            color: var(--yellow);
        }
    }
    .price {
        
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 5px;
        height: fit-content;
        color: var(--orange);
        font-weight: 700;
        font-size: 22px;
        line-height: 22px;

        .signo {
            font-size: 10px;
            line-height: 10px;
        }
    }

    @media (max-width: 768px) {
        padding: 15px;
        width: 70%;
    }
`

export const ProductCardStars = styled.div`
    display: flex;
    align-items: center;
    gap: 3px;
    
    span {
        font-size: 12px;
        font-weight: 400;
    }

    svg {
        font-size: 12px;
        color: var(--yellow);
    }
`

export const ProductCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 70px;
    gap: 10px;
`

export const ProductCardPriceAdd = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

`



