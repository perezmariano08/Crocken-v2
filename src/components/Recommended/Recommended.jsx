import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { useSelector } from 'react-redux'
import { ProductsContainer } from '../ProductCard/ProductCardStyles'
const Recommended = () => {
    const {recommended} = useSelector((state) => state.recommended)

    return (
        <ProductsContainer>
            {   
                recommended.map((product) => {
                    return <ProductCard
                    {...product} key={product.id} recommended
                    />
                })
            }
        </ProductsContainer>
    )
}

export default Recommended