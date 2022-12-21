// ------------------------ Men ---------------------------

const products_reducer = (state, action) => {

    if (action.type === 'LOADING') {
        return { ...state, loading: true }
    }

    if (action.type === 'FETCH_PRODUCTS') {
        return {
            ...state,
            loading: false,
            products: action.payload
        }
    }

    if (action.type === 'GET_ERROR') {
        return {
            ...state,
            loading: false,
            error: true
        }
    }

    if (action.type === 'FETCH_SINGLE_PRODUCT') {
        return { ...state, single_product: action.payload }
    }

    // ------------------------ Women ---------------------------

    if (action.type === 'LOADING') {
        return { ...state, loading: true }
    }

    if (action.type === 'WOMEN_FETCH_PRODUCTS') {
        return {
            ...state,
            loading: false,
            women_products: action.payload
        }
    }

    if (action.type === 'GET_WOMEN_ERROR') {
        return {
            ...state,
            loading: false,
            error: true
        }
    }

    if (action.type === 'WOMEN_FETCH_SINGLE_PRODUCT') {
        return { ...state, women_single_product: action.payload }
    }

    // ------------------------ Random ---------------------------

    if (action.type === 'FETCH_RANDOM') {
        return {
            ...state, random_items: action.payload
        }
    }

}

export default products_reducer