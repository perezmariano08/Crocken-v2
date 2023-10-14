import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ButtonSubmitStyled = styled(motion.button)`
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
  background: var(--orange-gradient);
  color: var(--100);
  border-radius: 20px;
  padding: 5px 10px;

  &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
  }
`;
