import './Navbar.css'
import {useState} from 'react'
import {Link} from 'react-router-dom'

function Navbar(){

    const [cart, setCart] = useState(0)

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
                        <span>{cart}</span>
                    </h2>
                </Link>
            
            </div>
        </div>
    )
}

export default Navbar