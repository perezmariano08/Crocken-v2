import styled from "styled-components";
import { Form as FormikForm } from 'formik';

export const Form = styled(FormikForm)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
    gap: 20px;
`