import './Product.css'
import {connect} from 'react-redux'
import { addToCart, loadCurrentItem } from './redux/Shopping/shopping-actions'
import {Link} from 'react-router-dom'

function Product({data, addToCart, loadCurrentItem}){
    return(
        <div className='product'>
            <div className='product-picture'>
                <img src={data.imageUrl} alt={data.name}/>
            </div>
            <div className='product-others'>
                <div className='name-and-price'>
                    <h2 className='product-name'>{data.name}</h2>
                    <h2 className='product-price'>£{data.price}</h2>
                </div>
                <Link to={`/products/${data.id}`}>
                    <button className='info-button' onClick={() => loadCurrentItem(data)}>Info</button>
                </Link>
                <button className='add-to-cart' onClick={() => addToCart(data.id)}>Add to cart</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
    }
}

export default connect (null, mapDispatchToProps)(Product)