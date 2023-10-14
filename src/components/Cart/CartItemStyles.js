import styled from "styled-components";

export const CartItem = styled.div`
    width: 100%;
    height: 150px;
    border-radius: 20px;
    background-color: var(--200);
    display: flex;
    align-items: center;
    gap: 15px;
    justify-content: start;
    padding: 15px;

    img {
        width: min;
        height: 100%;
        border-radius: 15px;
    }

    h5 {
        font-family: 'Obviously-Narrow';
        color: var(--blue-dark);
        font-size: 16px;
        line-height: 16px;
    }
`

export const ImgContainer = styled.div`
    width: 100%;
    border-radius: 15px;
    overflow: hidden;
    height: 100%;
    width: 150px;
    position: relative;

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`

export const CartItemInfo = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 5px 0;
`

export const CartItemInfoTop = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 20px;
    svg {
        color: var(--red);
    }
`

export const CartItemInfoBottom = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h5 {
        font-family: 'Obviously';
        color: var(--orange);
    }
`

export const CartItemCount = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    color: var(--blue-dark);

    .but {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        background-color: var(--blue);
        padding: 0 10px;
        color: var(--100);
    }
`