


const cart_reducer = (state, action) => {


    if (action.type === 'FETCH_SIZES') {
        return { ...state, sizes: [...action.payload] }
    }

    if (action.type === 'SET_CART') {
        return { ...state, cart: action.payload }
    }

    if (action.type === 'SET_WOMEN_CART') {
        return { ...state, women_cart: action.payload }
    }



    // if (action.type === 'FETCH_DESCRIPTIONS') {
    //     return { ...state, descriptions: [...action.payload] }
    // }

    // if (action.type === 'FETCH_WOMEN_DESCRIPTIONS') {
    //     return { ...state, women_descriptions: [...action.payload] }
    // }



    if (action.type === 'ADD_TO_CART') {

        const { id, images, names, count, prices, stock, amount, sizes } = action.payload; // destructuring from: action.payload

        let { us, uk, eu } = sizes

        const t = [];
        t.push(us, uk, eu)

        const result = t.filter((shoeSize) => {
            return shoeSize !== undefined
        })

        let [shoeSize] = result

        let tempObj = state.cart.find((c) => {
            return c.id === id + sizes.us
        })
        if (tempObj) {
            const tempUnits = state.cart.map((c) => {
                if (c.id === id + sizes.us) {
                    let renewedCount = parseInt(c.count) + parseInt(count)
                    if (renewedCount > c.stock) {
                        renewedCount = c.stock
                    }
                    return { ...c, count: parseInt(renewedCount) }
                } else {
                    return c
                }
            })
            return { ...state, cart: tempUnits }
        } else {
            const newObj = {
                id: id + sizes.us,
                names,
                images,
                size: shoeSize,
                prices: parseInt(prices),
                count: parseInt(count),
                stock: parseInt(stock),
                amount: parseInt(amount),
                max: parseInt(stock)
            }
            console.log(state);
            return { ...state, cart: [...state.cart, newObj] }

        }





    }



    if (action.type === 'WOMEN_ADD_TO_CART') {
        const { id, images, names, count, prices, stock, amount, sizes } = action.payload; // destructuring from: action.payload

        let { us, uk, eu } = sizes

        const t = [];
        t.push(us, uk, eu)

        const result = t.filter((shoeSize) => {
            return shoeSize !== undefined
        })

        let [shoeSize] = result

        const tempObj = state.women_cart.find((c) => {
            return c.id === id + sizes.us
        })

        if (tempObj) {
            const tempUnits = state.women_cart.map((c) => {
                if (c.id === id + sizes.us) {
                    let renewedCount = parseInt(c.count) + parseInt(count)
                    if (renewedCount > c.stock) {
                        renewedCount = c.stock
                    }
                    return { ...c, count: parseInt(renewedCount) }
                } else {
                    return c
                }
            })
            return { ...state, women_cart: tempUnits }
        } else {
            const newObj = {
                id: id + sizes.us,
                names,
                images,
                size: shoeSize,
                prices: parseInt(prices),
                count: parseInt(count),
                stock: parseInt(stock),
                amount: parseInt(amount),
                max: parseInt(stock)
            }
            return { ...state, women_cart: [...state.women_cart, newObj] }
        }

    }




    if (action.type === 'DELETE_ITEM') {
        // const { id } = action.payload - if you pass it as an object from context you'll
        // have to destructure it
        const myCart = state.cart.filter((s) => {
            return s.id !== action.payload
        })
        return { ...state, cart: [...myCart] }
    }


    if (action.type === 'DELETE_WOMEN_ITEM') {
        // const { id } = action.payload - if you pass it as an object from context you'll
        // have to destructure it
        const womenCart = state.women_cart.filter((s) => {
            return s.id !== action.payload
        })
        return { ...state, women_cart: [...womenCart] }
    }





    if (action.type === 'ADJUST_THE_CART') {
        const { id, value } = action.payload

        const tempItem = state.cart.map((shoe) => {

            if (shoe.id === id) {
                if (value === 'increase') {
                    let newCount = shoe.count + 1
                    if (newCount > shoe.max) {
                        newCount = shoe.max
                    }
                    // here, we're spreading the rest of the properties, then
                    // setting new (incremented) property to a object's count
                    // property. Which will, everytime we're increasing amount 
                    // by one, will increase count propert in state by one
                    return { ...shoe, count: newCount }
                }



                if (value === 'decrease') {
                    let newCount = shoe.count - 1
                    if (newCount < 1) {
                        newCount = 1
                    }
                    // and the same logic is here only it will decrement by one
                    return { ...shoe, count: newCount }
                }

            } else {
                // if id is equal to the passed id (in the beginning), then we'll
                // toggle the functionality. If not then then we'll simply
                // return the item (meaning: it will stop execution and will return  
                // the value to caller of the method)
                return shoe
            }
        })

        return { ...state, cart: tempItem }
    }




    if (action.type === 'ADJUST_WOMEN_CART') {
        const { id, value } = action.payload

        const tempItem = state.women_cart.map((shoe) => {

            if (shoe.id === id) {
                if (value === 'increase') {
                    let newCount = shoe.count + 1
                    if (newCount > shoe.max) {
                        newCount = shoe.max
                    }
                    // here, we're spreading the rest of the properties, then
                    // setting new (incremented) property to a object's count
                    // property. Which will, everytime we're increasing amount 
                    // by one, will increase count propert in state by one
                    return { ...shoe, count: newCount }
                }



                if (value === 'decrease') {
                    let newCount = shoe.count - 1
                    if (newCount < 1) {
                        newCount = 1
                    }
                    // and the same logic is here only it will decrement by one
                    return { ...shoe, count: newCount }
                }

            } else {
                // if id is equal to the passed id (in the beginning), then we'll
                // toggle the functionality. If not then then we'll simply
                // return the item (meaning: it will stop execution and will return  
                // the value to caller of the method)
                return shoe
            }
        })

        return { ...state, women_cart: tempItem }
    }




    if (action.type === 'EMPTY_CART') {
        return { ...state, cart: [], women_cart: [] }
    }


    if (action.type === 'DISPLAY_CART_ICON') {

        const { count, amount } = state.cart.reduce((total, cartItem,) => {

            return total

        }, {
            count: 0,
            amount: 0
        })
        return { ...state, count, amount }
    }




    if (action.type === 'CART_ITEMS_COUNT') {

        const { items_count, amounts_count } = state.cart.reduce((total, item) => {

            const { count, prices } = item

            total.items_count += count
            total.amounts_count += prices * count
            return total

        },
            {
                items_count: 0,
                amounts_count: 0
            })

        return {
            ...state, items_count, amounts_count
        }
    }




    if (action.type === 'WOMEN_CART_ITEMS_COUNT') {

        const { women_items_count, women_amounts_count } = state.women_cart.reduce((total, item) => {

            const { count, prices } = item

            total.women_items_count += count
            total.women_amounts_count += prices * count
            return total

        }, {
            women_items_count: 0,
            women_amounts_count: 0
        })

        return {
            ...state, women_items_count, women_amounts_count
        }
    }



    if (action.type === 'ADD_CARTS_TOGETHER') {

        const { items_count, amounts_count,
            women_items_count, women_amounts_count } = state


        let both_carts_items_total = 0
        let both_carts_amounts_total = 0

        both_carts_items_total = items_count + women_items_count

        both_carts_amounts_total = amounts_count + women_amounts_count

        return { ...state, both_carts_items_total, both_carts_amounts_total }
    }


}

export default cart_reducer







