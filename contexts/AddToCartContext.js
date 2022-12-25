import axios from "axios";
import React, { createContext, useReducer, useEffect, useContext, useMemo, useRef } from "react";
import cart_reducer from '../reducers/AddToCartReducer'



const mainState = {
    sizes: [],
    descriptions: [],
    cart: [],
    women_cart: [],
    women_descriptions: [],
    items_count: 0,
    amounts_count: 0,
    women_items_count: 0,
    women_amounts_count: 0,
    both_carts_items_total: 0,
    both_carts_amounts_total: 0,
    products: 0,
    taxes: 2099,
    count: 1,
    amount: 50
}

console.log(mainState);

const AddToCartContext = createContext()


export const AddToCartProvider = ({ children }) => {


    const [state, dispatch] = useReducer(cart_reducer, mainState)


    const fetchModalSizes = async () => {
        // const response = await axios.get('https://mybellshoes.com/sizes.php')
        const response = await axios.get('http://localhost:8888/sizes.php')
        const products = await response.data
        dispatch({ type: 'FETCH_SIZES', payload: products })
    }

    useEffect(() => {
        fetchModalSizes()
    }, [])


    const addToCart = (id, images, names, count, prices, stock, amount, sizes) => {
        dispatch({ type: 'ADD_TO_CART', payload: { id, images, names, count, prices, stock, amount, sizes } })
        console.log(id, images, names, count, prices, stock, amount, sizes);
    }


    const womenAddToCart = (id, images, names, count, prices, stock, amount, sizes) => {
        dispatch({ type: 'WOMEN_ADD_TO_CART', payload: { id, images, names, count, prices, stock, amount, sizes } })
    }


    const deleteProduct = (id) => {

        // dispatch({ type: 'DELETE_ITEM', payload: { id } }) - Another way of passing 
        // as an object, then you'll have to desctructure it in reducer before filtering it

        dispatch({ type: 'DELETE_ITEM', payload: id })
    }


    const deleteWomanProduct = (id) => {

        // dispatch({ type: 'DELETE_ITEM', payload: { id } }) - Another way of passing 
        // as an object, then you'll have to desctructure it in reducer before filtering it

        dispatch({ type: 'DELETE_WOMEN_ITEM', payload: id })
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


    useEffect(() => {
        displayCartIcon()
    }, [state.cart])


    useEffect(() => {
        dispatch({ type: 'CART_ITEMS_COUNT' })
        localStorage.setItem('cart', JSON.stringify(state.cart))
    }, [state.cart, state.women_cart])


    useEffect(() => {
        dispatch({ type: 'WOMEN_CART_ITEMS_COUNT' })
        dispatch({ type: 'ADD_CARTS_TOGETHER' })
        localStorage.setItem('women_cart', JSON.stringify(state.women_cart))
    }, [state.cart, state.women_cart])


    const learn = useMemo(() => {
        return { state, dispatch }
    }, [state, dispatch])

    const initialRender = useRef(true);

    useEffect(() => {
        const item = (JSON.parse(localStorage.getItem('cart')))
        console.log(item);
        if (item) {
            dispatch({
                type: 'SET_CART',
                payload: item
            })
        }
    }, [])


    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
            return
        }
        localStorage.setItem('cart', JSON.stringify(state.cart))
    }, [state.cart])



    useEffect(() => {
        const item = (JSON.parse(localStorage.getItem('women_cart')))
        console.log(item);
        if (item) {
            dispatch({
                type: 'SET_WOMEN_CART',
                payload: item
            })
        }
    }, [])


    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
            return
        }
        localStorage.setItem('women_cart', JSON.stringify(state.women_cart))
    }, [state.women_cart])


    return (
        <AddToCartContext.Provider value={{
            ...state,
            learn,
            fetchModalSizes,
            addToCart,
            adjustWomenCart,
            womenAddToCart,
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