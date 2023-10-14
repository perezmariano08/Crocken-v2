import { motion } from "framer-motion";
import styled from "styled-components";

// Modal Cart Wrapper
export const ModalCartWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100%;
  background-color: var(--orange);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  z-index: 51;
`;

export const ModalCartHeader = styled.div`  
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  background: var(--blue-dark);
  color: #fff;
  width: 100%;

  svg {
    cursor: pointer;
    font-size: 20px;
  }
`;

export const ModalCartBody = styled.div`
  width: 100%;
  max-height: 70%;
  overflow-y: auto;
  background: var(--orange);
  padding: 20px;
`;

export const ModalCartProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

// Item (Product) Component
export const Item = styled.div`
  border-radius: 20px;
  background-color: var(--200);
  height: 100px;
`;

// Modal Cart Footer
export const ModalCartFooter = styled.div`
  background: var(--orange);
  height: fit-content;
  padding: 20px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const FooterSubtotal = styled.div`
  display: flex;
  justify-content: space-between;
`

export const FooterTotal = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
` 


// Modal Overlay
export const ModalOverlayStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* Fondo semitransparente */
`;

// Establece tus variables CSS personalizadas aquí (por ejemplo, --orange
