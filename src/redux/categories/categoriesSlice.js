import { createSlice } from "@reduxjs/toolkit";
import { CategoriesList } from "../../data/CategoriesList";

const INITIAL_STATE = {
    categories: CategoriesList,
    selectedCategory: null
}

export const categoriesSlice = createSlice({
    name: "categories",
    initialState: INITIAL_STATE,
    reducers: {
        selectCategory : (state, action) => {
            return {
                ...state,
                selectedCategory: action.payload !== state.selectedCategory ? action.payload : null
            }
        },
        categories: (state) => {
            return state
        }
    }
})

export const {
    categories,
    selectCategory
} = categoriesSlice.actions;

export default categoriesSlice.reducer