import './ProductScreen.css'
import Product from '../Product'
import {connect} from 'react-redux'

function ProductScreen({products}){
    return(
        <div className='productscreen'>
            {
                products.map(item => <Product data={item} key={item.id}/>)
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