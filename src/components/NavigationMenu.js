import './NavigationMenu.css'
import {Link} from 'react-router-dom'

function NavigationMenu({show, changeShow}){
    return(
        <div>
            {show ? <div className='navigation-menu'>
                <Link to='/products' onClick={() => changeShow()}>
                    <h2>Products</h2>
                </Link>

                <Link to='/contact' onClick={() => changeShow()}>
                    <h2>Contact us</h2>
                </Link>
           
                <Link to='/cart' onClick={() => changeShow()}>
                    <h2>Cart</h2>
                </Link>
        </div>   : ''}
        </div>  
    )
}

export default NavigationMenu