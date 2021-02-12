import './CartScreen.css'
import {connect} from 'react-redux'
import CartItem from '../CartItem'

function CartScreen({cart}){

    return(
        <div className='cartscreen'>
            <div className='cart-items'>
                {cart.map(item => <CartItem data={item}/>)}
            </div>
            

        <div className='info-and-card-details'>

        </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    }
}

export default connect (mapStateToProps)(CartScreen)