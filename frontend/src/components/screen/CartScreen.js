import './CartScreen.css'
import {connect} from 'react-redux'
import CartItem from '../CartItem'
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

function CartScreen({cart}){

    const [totalPrice, setTotalPrice] = useState('')

    useEffect(() => {
        let total = 0;
        cart.forEach(item => total += item.qty*item.price);
        setTotalPrice(total)
    })

    return(
        <div>
            {cart.length ===0 ?
            
            <div className='zero-cart'>
                <h1>You don't have any item in your cart</h1>
                <Link to='/products'>
                    <button>Search for products</button>
                </Link>
            </div>
        : 
        <div className='cartscreen'>
            <div className='cart-items'>
                {cart.map(item => <CartItem data={item} key={item.id}/>)}
            </div>
            <div className='summary'>
                <h2 className='cart-total'>TOTAL: £ {totalPrice}</h2>
                <Link to='/checkout'>
                    <button>Proceed to checkout</button>
                </Link>
            </div>
        </div>
    }       
    </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    }
}

export default connect (mapStateToProps)(CartScreen)