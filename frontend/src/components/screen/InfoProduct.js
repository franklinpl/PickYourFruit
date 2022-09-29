import './InfoProduct.css'
import {connect} from 'react-redux'
import { addToCart, loadCurrentItem } from '../redux/Shopping/shopping-actions'
import {Link} from 'react-router-dom'

function InfoProduct({currentItem, products, addToCart, loadCurrentItem}){
    return(
        <div className='info-product'>
            <div className='each-item'>
                <img src={currentItem.imageUrl} alt={currentItem.name}/>
                <div className='info-right'>
                    <h2 className='info-name'>{currentItem.name}</h2>
                    <h2 className='info-description'>{currentItem.description}</h2>
                    <h2 className='info-price'>£{currentItem.description_price}</h2>
                    <button onClick={() => addToCart(currentItem.id)}>Add to cart</button>
                </div>
            </div>
            
            <div className='other-products'>
                <h1>Other fruits you may want to try:</h1>
                <div className='other-fruits'>
                    {products.filter(item => item.id !== currentItem.id).map(item => <div className='other-fruits-item' key={item.id}>
                        <Link to={`/products/${item.id}`}>
                            <img className='other-products-img' src={item.imageUrl} onClick={() => loadCurrentItem(item)}/>
                        </Link>
                        <h2>{item.name}</h2>
                        <h3>£{item.price}</h3>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentItem: state.shop.currentItem,
        products: state.shop.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem: (data) => dispatch(loadCurrentItem(data))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(InfoProduct)