import { ProductCardContainer, ProductCardImg, ProductCardInfo, ProductCardPriceAdd, ProductCardText} from './ProductCardStyles'
import { HiOutlineStar,HiOutlineShoppingCart, HiStar  } from "react-icons/hi";
import { useDispatch } from 'react-redux';
import { formatPrice } from '../../utils/formatPrice';
import Button from '../UI/Button/Button';
import { addToCart } from '../../redux/cart/cartSlice';


const ProductCard = ({id, img, price, title, recommended}) => {
    const dispatch = useDispatch()

    return (
        <ProductCardContainer key={id}>
            <ProductCardImg>
                <img src={`/products/${img}`}/>
            </ProductCardImg>
            <ProductCardText>        
                <ProductCardInfo>
                    <span className='name'>{title}</span>
                    <span className='stars'>
                        4,5
                        <span className='stars-icons'>
                            <HiStar/>
                            <HiStar/>
                            <HiStar/>
                            <HiStar/>
                            <HiOutlineStar/>
                        </span>  
                    </span>
                </ProductCardInfo>
                
                <ProductCardPriceAdd>
                    <span className='price'>
                        <span className='signo'>$</span>
                        {formatPrice(price)}
                    </span>
                    <Button
                        background={'blue-gradient'}
                        onClick={() => dispatch(addToCart({img, title, price, id}))}
                    >
                        Añadir al carrito
                        <HiOutlineShoppingCart/>
                    </Button>
                </ProductCardPriceAdd>
                
            </ProductCardText>
        </ProductCardContainer>
    )
}

export default ProductCard
