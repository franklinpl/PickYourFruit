import './CheckoutScreen.css'
import {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

function Checkout({cart}){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [street, setStreet] = useState('')
    const [number, setNumber] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [city, setCity] = useState('')
    const [cardHolder, setCardHolder] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [expiry, setExpiry] = useState(new Date())
    const [cvv, setCvv] = useState('')

    const [qtyInCart, setQtyInCart] = useState('')
    const [totalSum, setTotalSum] = useState('')

    useEffect(() => {
        let sum = 0;
        let items = 0
        cart.forEach((item) => {
            items += item.qty;
            sum += item.qty*item.price
        }
            )
        setQtyInCart(items);
        setTotalSum(sum)
    },[cart, qtyInCart])

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePhone = (e) => {
        setPhone(e.target.value)
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }

    const onChangeNumber = (e) => {
        setNumber(e.target.value)
    }

    const onChangeZipCode = (e) => {
        setZipCode(e.target.value)
    }

    const onChangeCardHolder = (e) => {
        setCardHolder(e.target.value)
    }

    const onChangeCardNumber = (e) => {
        setCardNumber(e.target.value)
    }

    const onChangeExpiry = (e) => {
        setExpiry(e.target.value)
    }

    const onChangeCvv = (e) => {
        setCvv(e.target.value)
    }

    return(
        <div>
            {cart.length ===0 ? 
            
            <div className='zero-cart'>
                <h1>You don't have any item in your cart</h1>
                <Link to='/products'>
                    <button>Search for products</button>
                </Link>
            </div>
            : 
            <div className='checkout'>
                <div className='personal-info'>
                <form>
                    {/* full name, cellphone, email, house street, house number, zip code */}
                    <h1>Personal information</h1>
                    <div className='name'>
                        <label>Name:</label>
                        <input type='text' onChange={onChangeName}/>
                    </div>
                    <div className='phone'>
                        <label>Phone:</label>
                        <input type='tel' onChange={onChangePhone}/>
                    </div>
                    <div className='email'>
                        <label>Email:</label>
                        <input type='email' onChangeName={onChangeEmail}/>
                    </div>
                    <div className='house-street'>
                        <label>House street:</label>
                        <input type='text' onChangeName={onChangeStreet}/>
                    </div>
                    <div className='house-number'>
                        <label>House number:</label>
                        <input type='number' onChangeName={onChangeNumber}/>
                    </div>
                    <div className='zip-code'>
                        <label>Zip code:</label>
                        <input type='number' onChangeName={onChangeZipCode}/>
                    </div>
                </form>
            </div>
            
            <div className='card-info'>
                {/* Card holder, card number, expiry date, CVV */}
                <form>
                    <h1>Card information</h1>
                    <div className='card-holder'>
                        <label>Card holder:</label>
                        <input type='text' onChangeName={onChangeCardHolder}/>
                    </div>
                    <div className='card-number'>
                        <label>Card number:</label>
                        <input type='number' onChangeName={onChangeCardNumber}/>
                    </div>
                    <div className='expiry'>
                        <label>Expiry date:</label>
                        <input type='number' onChangeName={onChangeExpiry}/>
                    </div>
                    <div className='cvv'>
                        <label>CVV:</label>
                        <input type='number' onChangeName={onChangeCvv}/>
                    </div>
                </form>
            
                <div className='summary-and-pay'>
                    <div className='checkout-summary'>
                        <h2 id='summary-title'>Chechout summary</h2>
                        {cart.map(item => {
                            return <div className='summary-item'>
                                <h3>{item.name} : £{item.description_price}</h3>
                                <h4>qty: {item.qty}</h4>
                            </div>
                        })}
                    </div>
                    <h2 id='summary-total'>Total: £{totalSum}</h2>
                    <button>Pay now</button>
                </div>
            </div>
        </div>}
        
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    }
}

export default connect (mapStateToProps) (Checkout)