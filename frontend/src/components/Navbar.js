import './Navbar.css'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

function Navbar({cart}){

    const [qtyInCart, setQtyInCart] = useState('')

    useEffect(() => {
        let sum = 0;
        cart.map(item => sum+=item.qty)
        setQtyInCart(sum)
    },[cart])

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
                    <h2>Cart: 
                        <span>{qtyInCart}</span>
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