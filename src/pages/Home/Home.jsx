import React from 'react'
import Categories from '../../components/Categories/Categories'
import Hero from '../../components/Hero/Hero'
import Recommended from '../../components/Recommended/Recommended'
import Section from '../../components/Section/Section'

import {FaAngleRight} from 'react-icons/fa6'
import Button from '../../components/UI/Button/Button'
import { SectionTitle } from '../../components/Section/SectionStyles'
import ProductsCards from '../../components/ProductCard/ProductsCards'

const Home = () => {
    return (
        <>
            <Hero/>

            {/* Seccion de Destacados */}
            <Section>
                <SectionTitle>
                    <h2>Destacados</h2>
                    <Button
                        color= 'orange'>
                        Ver más
                        <FaAngleRight/>
                    </Button>
                </SectionTitle>
                <Recommended/>
            </Section>

            {/* Seccion de Productos */}
            <Section>
                <SectionTitle>
                    <h2>Categorias</h2>
                    <Button
                        color= 'orange'>
                        Ver más
                        <FaAngleRight/>
                    </Button>
                </SectionTitle>
                <Categories/>
                <ProductsCards/>
            </Section>
            
            
        </>
        
    )
}

export default Home