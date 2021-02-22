import * as actionTypes from './shopping-types'

const INITIAL_STATE = {
    products: [
        {
            name: 'Strawberry',
            id: 1,
            price:2.5,
            description_price:'2.5/200g box',
            description: 'An all times favorite. Put on some dessert or eat after a meal',
            stock: 16,
            imageUrl:'https://images.pexels.com/photos/46174/strawberries-berries-fruit-freshness-46174.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            name: 'Blueberry',
            id: 2,
            price:3,
            description_price:'3/300g box',
            description: 'An all times favorite. Put on some dessert or eat after a meal',
            stock: 8,
            imageUrl:'https://images.pexels.com/photos/70862/pexels-photo-70862.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            name: 'Raspberry',
            id: 3,
            price:3.5,
            description_price:'3.5/200g box',
            description: 'An all times favorite. Put on some dessert or eat after a meal',
            stock: 5,
            imageUrl:'https://images.pexels.com/photos/59999/raspberries-fruits-fruit-berries-59999.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            name: 'Apple',
            id: 4,
            price:1.5,
            description_price:'1.5/kg',
            description: 'An all times favorite. Put on some dessert or eat after a meal',
            stock: 20,
            imageUrl:'https://images.pexels.com/photos/2487443/pexels-photo-2487443.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            name: 'Orange',
            id: 5,
            price:2,
            description_price:'2.5/kg',
            description: 'An all times favorite. Put on some dessert or eat after a meal',
            stock: 30,
            imageUrl:'https://images.pexels.com/photos/2084239/pexels-photo-2084239.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            name: 'Banana',
            id: 6,
            price:2,
            description_price:'2.5/12 units',
            description: 'An all times favorite. Put on some dessert or eat after a meal',
            stock: 15,
            imageUrl:'https://images.unsplash.com/photo-1589468619550-3c6350b50ce0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGJhbmFuYXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
    ],
    cart: [],
    currentItem: null
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            //first find data in the products
            const item = state.products.find(item => item.id === action.payload.id)
            //then check if the product is already in the cart or not
            const inCart = state.cart.find(item => item.id === action.payload.id ? true : false)
            
            return {
                ...state,
                cart: inCart ? state.cart.map(item => item.id === action.payload.id ? 
                    {...item, qty: item.qty+1} : item) 
                    : [...state.cart, {...item, qty:1}]
            }

        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            }
        
        case actionTypes.ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ? 
                    {...item, qty: + action.payload.qty}: item)
            }

        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload
            }
        default:
            return state
    }
}

export default shopReducer