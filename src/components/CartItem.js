import './CartItem.css'
import {adjustQty, removeFromCart} from './redux/Shopping/shopping-actions'
import {useState} from 'react'
import {connect} from 'react-redux'

function CartItem({data, adjustQty, removeFromCart}){
    
    const [input, setInput] = useState(data.qty)
    
    const onChangeInput = (e) => {
        setInput(e.target.value);
        adjustQty(data.id, e.target.value)
    }
    
    return (
            <div className='items-and-delete-button'>
                <div className='items'>
                    <img src={data.imageUrl} alt={data.name}/>
                    <div>
                        <h2 className='cart-name'>{data.name}</h2>
                        <h2 className='cart-price'>£ {data.price}</h2>
                        <h2 className='cart-qty'>Qty: <input type='number' min='1' max={data.stock}
                            onChange={(e) => onChangeInput(e)} value={input}/></h2>
                    </div>
                </div>
                <div className='delete-box'>
                    <button className='delete-button' onClick={() => removeFromCart(data.id)}>
                        <i className='fas fa-trash-alt'/>
                    </button>
                </div>
            </div>
       
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        adjustQty: (id, value) => dispatch(adjustQty(id, value)),
        removeFromCart: (id) => dispatch(removeFromCart(id))
    }
}

export default connect (null, mapDispatchToProps)(CartItem)