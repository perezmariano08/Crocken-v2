import { LoadingContainer, LoadingSpinnerStyled } from './LoadingSpinnerStyles';

const LoadingSpinner = ({ loading }) => {
    if (!loading) return null;

    return (
        <LoadingContainer>
            <LoadingSpinnerStyled/>
        </LoadingContainer>
    );
};

export default LoadingSpinner;
