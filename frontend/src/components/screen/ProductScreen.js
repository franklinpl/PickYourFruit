import './ProductScreen.css'
import Product from '../Product'
import {connect} from 'react-redux'

function ProductScreen({products}){
    return(
        <div className='productscreen'>
            {
                products.map(item => <Product name={item.name} 
                    price={item.price} image={item.imageUrl} key={item.id}/>)
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.shop.products
    }
}

export default connect (mapStateToProps)(ProductScreen)