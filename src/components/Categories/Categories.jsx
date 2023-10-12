import React from 'react'
import { CategoriesStyled } from './CategoriesStyles'
import {useSelector } from 'react-redux'

import Categoria from './Categoria'
const Categories = () => {

    const {categories} = useSelector((state) => state.categories)

    return (
        <>
            <CategoriesStyled>
                {
                    categories.map((category) => {
                        return <Categoria {...category} key={category.id} />
                    })
                }
            </CategoriesStyled>
        </>
        
    )
}

export default Categories