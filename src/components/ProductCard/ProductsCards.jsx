import React from 'react'
import { ProductsContainer } from './ProductCardStyles'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'

const ProductsCards = () => {
    let products = useSelector((state) => state.products.products)
    const {selectedCategory} = useSelector((state) => state.categories)
    
    if (selectedCategory) {
        products = { [selectedCategory]: products[selectedCategory]}
    }

    return (
        <ProductsContainer>
            {
                Object.entries(products).map(([, foods]) => {
                    return foods.map((food) => {
                        return <ProductCard {...food} key={food.id} />
                    })
                })
            }
        </ProductsContainer>
    )
}

export default ProductsCards