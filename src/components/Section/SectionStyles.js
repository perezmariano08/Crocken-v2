import styled from "styled-components";

export const SectionWrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 30px;
    max-width: 1200px;
    padding: 50px;

    h2 {
        font-size: 30px;
        color: var(--blue-dark);
    }


    @media (max-width: 768px) {
        padding: 50px 20px;
    }
`

export const SectionTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    a {
        display: flex;
        align-items: center;
        gap: 5px;
        color: var(--orange);
        font-size: 14px;
        font-weight: 400;
        font-family: 'Poppins';
    }
`