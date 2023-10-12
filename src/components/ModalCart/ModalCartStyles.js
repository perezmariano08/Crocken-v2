import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const ModalCartWrapper = styled(motion.div)`
    position: absolute;
    top: 0;
    right: 0;
    width: 350px;
    height: 100vh;
    background-color: var(--orange);
    z-index: 51;
`

export const ModalOverlayStyled = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    width: 100vw;
    height: 100vh;

    ${({ isHidden }) =>
        !isHidden &&
        css`
        backdrop-filter: blur(2px);
        `}
`;