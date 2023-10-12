import { ButtonLinkStyled} from './ButtonStyles'

const Button = ({
    children,
    background,
    color = '100',
    radius = "20",
    disabled = false,
    to,
    target,
    onClick,
    whileTap
}) => {
    return (
        
            <ButtonLinkStyled
                to={to}
                target={target}
                onClick={onClick}
                background={background}
                color={color}
                radius={radius}
                disabled={disabled}
                whileTap={whileTap}
            >
                {children}
            </ButtonLinkStyled> 
        
    )    
}

export default Button