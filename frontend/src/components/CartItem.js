import './CartItem.css'
import {useState} from 'react'

function CartItem({data}){
    
    const [input, setInput] = useState(data.qty)

    const onChangeInput = (e) => {
        setInput(e.target.value)
    }
    
    return (
        <div>
            <div className='items'>
                <img src={data.imageUrl} alt={data.name}/>
                <div>
                    <h2>{data.name}</h2>
                    <h2>{data.price}</h2>
                    Qty: <input type='number' min='1' max={data.stock}
                        onChange={(e) => onChangeInput(e)} value={input}/>
                </div>
            </div>
            <button className='delete-button'>X</button>
        </div>
    )
}

export default {CartItem}