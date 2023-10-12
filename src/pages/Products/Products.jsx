import React from 'react'
import Section from '../../components/Section/Section'
import { useSelector } from 'react-redux'
import { ProductsContainer } from '../../components/ProductCard/ProductCardStyles'
import ProductCard from '../../components/ProductCard/ProductCard'

const Products = () => {
    let products = useSelector((state) => state.products.products)
    const {selectedCategory} = useSelector((state) => state.categories)

    return (
        <>
        <Section>
        <ProductsContainer>
            {
                Object.entries(products).map(([, foods]) => {
                    return foods.map((food) => {
                        return <ProductCard {...food} key={food.id} />
                    })
                })
            }
        </ProductsContainer>
        </Section>
        
        
        
        </>
        
    )
}

export default Products