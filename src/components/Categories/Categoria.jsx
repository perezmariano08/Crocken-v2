import React from 'react'
import { Category, CategoryImg } from './CategoriesStyles'
import { useDispatch, useSelector } from 'react-redux'
import { selectCategory } from '../../redux/categories/categoriesSlice'

const Categoria = ({img, title, category}) => {
    const {selectedCategory} = useSelector((state) => state.categories)
    const dispatch = useDispatch()

    return (
        <Category
            selected={category === selectedCategory}
            onClick={() => dispatch(selectCategory(category))}
            whileTap={{ scale: 0.95 }}
        >
        <CategoryImg>
            <img src={`/products/${img}`} alt={title} />
        </CategoryImg>
        {title}  
        </Category>
    )
}

export default Categoria