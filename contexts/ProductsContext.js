import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import products_reducer from '../reducers/ProductsReducer'


const initialState = {
    loading: false,
    error: false,
    products: [],
    single_product: {},
    women_products: [],
    women_single_product: [],
    random_items: []
}



const ProductContext = createContext()

export const ContextAPI = ({ children }) => {

    const [state, dispatch] = useReducer(products_reducer, initialState)


    const fetchProducts = async () => {
        dispatch({ type: 'LOADING' })
        try {
            const response = await fetch('http://localhost:8888/men.php')
            const items = await response.json()
            dispatch({ type: 'FETCH_PRODUCTS', payload: items })
        } catch (error) {
            dispatch({ type: 'GET_ERROR' })
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])





    const womenfetchProducts = async () => {
        dispatch({ type: 'LOADING' })
        try {
            const response = await fetch('http://localhost:8888/women.php')
            const women_items = await response.json()
            dispatch({ type: 'WOMEN_FETCH_PRODUCTS', payload: women_items })
        } catch (error) {
            dispatch({ type: 'GET_WOMEN_ERROR' })
        }
    }

    useEffect(() => {
        womenfetchProducts()
    }, [])

    return (
        <ProductContext.Provider value={{
            ...state,
            fetchProducts,
            womenfetchProducts
        }}>
            {children}
        </ProductContext.Provider>
    )

}

export const useProductsContext = () => {
    return useContext(ProductContext)
};





