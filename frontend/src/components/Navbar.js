import './Navbar.css'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

function Navbar({cart}){

    const [qtyInCart, setQtyInCart] = useState('')

    useEffect(() => {
        let sum = 0;
        let items = 0
        cart.forEach((item) => {
            items += item.qty;
            sum += items*item.qty
        }
            )
        setQtyInCart(items)
    },[cart, qtyInCart])

    return(
        <div className='navbar'>
            
            <Link to='/'>
                <h2 className='navbar-logo'>
                    PickYourFruit
                </h2>
            </Link>
            
            <div className='navbar-components'>
                
                <Link to='/products'>
                    <h2>Products</h2>
                </Link>
                
                <Link to='contact'>
                    <h2>Contact us</h2>
                </Link>
                
                <Link to='/cart'>
                    <h2> <span id='navbar-cart-span'>Cart: </span>
                        <span id='qtyInCart'>
                            <span>{qtyInCart}</span>
                        </span>
                    </h2>
                </Link>
            
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart
    }
}

export default connect (mapStateToProps) (Navbar)