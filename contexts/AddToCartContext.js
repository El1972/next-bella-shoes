import axios from "axios";
import React, { createContext, useReducer, useEffect, useContext, useMemo } from "react";
import cart_reducer from '../reducers/AddToCartReducer'


const mainState = {
    sizes: [],
    descriptions: [],
    cart: [],
    // women_cart: [],
    women_descriptions: [],
    items_count: 0,
    amounts_count: 0,
    woman_items_count: 0,
    woman_amounts_count: 0,
    both_carts_items_total: 0,
    both_carts_amounts_total: 0,
    products: 0,
    taxes: 2099,
    count: 1,
    amount: 50
}



const AddToCartContext = createContext()


export const AddToCartProvider = ({ children }) => {


    const [state, dispatch] = useReducer(cart_reducer, mainState)


    const fetchModalSizes = async () => {
        const response = await axios.get('https://mybellshoes.com/sizes.php')
        // const response = await axios.get('http://localhost:8888/sizes.php')
        const products = response.data
        dispatch({ type: 'FETCH_SIZES', payload: products })
    }

    useEffect(() => {
        fetchModalSizes()
    }, [])


    const addToCart = (id, images, names, count, prices, stock, amount, sizes, cart) => {
        dispatch({ type: 'ADD_TO_CART', payload: { id, images, names, count, prices, stock, amount, sizes, cart } })
        console.log(id, images, names, count, prices, stock, amount, sizes);
    }


    const womanAddToCart = (id, images, names, count, prices, stock, amount, sizes) => {
        dispatch({ type: 'WOMAN_ADD_TO_CART', payload: { id, images, names, count, prices, stock, amount, sizes } })
    }


    const deleteProduct = (id) => {

        // dispatch({ type: 'DELETE_ITEM', payload: { id } }) - Another way of passing 
        // as an object, then you'll have to desctructure it in reducer before filtering it

        dispatch({ type: 'DELETE_ITEM', payload: id })
    }


    const deleteWomanProduct = (id) => {

        // dispatch({ type: 'DELETE_ITEM', payload: { id } }) - Another way of passing 
        // as an object, then you'll have to desctructure it in reducer before filtering it

        dispatch({ type: 'DELETE_WOMAN_ITEM', payload: id })
    }


    const adjustCart = (id, value) => {
        dispatch({ type: 'ADJUST_THE_CART', payload: { id, value } })
    }


    const adjustWomenCart = (id, value) => {
        dispatch({ type: 'ADJUST_WOMEN_CART', payload: { id, value } })
    }


    const emptyCart = () => {
        dispatch({ type: 'EMPTY_CART' })
    }


    const displayCartIcon = () => {
        dispatch({ type: 'DISPLAY_CART_ICON' })
    }

    const learn = useMemo(() => {
        return { state, dispatch }
    }, [state, dispatch])

    // useEffect(() => {
    //     const item = (JSON.parse(localStorage.getItem('cart')))
    //     if (item) {
    //         dispatch({
    //             type: 'SET_CART',
    //             payload: (JSON.parse(localStorage.getItem('cart')))
    //         })
    //     }
    // }, [])

    // useEffect(() => {
    //     localStorage.setItem('cart', JSON.stringify(state))
    // }, [state])


    // useEffect(() => {
    //     if (state !== mainState) {
    //         localStorage.setItem('woman_cart', JSON.stringify(state))
    //     }
    // }, [state])


    return (
        <AddToCartContext.Provider value={{
            ...state,
            learn,
            fetchModalSizes,
            addToCart,
            adjustWomenCart,
            womanAddToCart,
            deleteProduct,
            deleteWomanProduct,
            adjustCart,
            emptyCart
        }}>
            {children}
        </AddToCartContext.Provider>
    )
}

export const useAddToCartContext = () => {
    return useContext(AddToCartContext)
}