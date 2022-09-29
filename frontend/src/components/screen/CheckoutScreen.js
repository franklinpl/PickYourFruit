import './CheckoutScreen.css'
import {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import orderNumbers from '../orderNumbers'
import * as emailjs from 'emailjs-com'
import env from 'react-dotenv'

function Checkout({cart}){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [street, setStreet] = useState('')
    const [number, setNumber] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [cardHolder, setCardHolder] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [expiry, setExpiry] = useState(new Date())
    const [cvv, setCvv] = useState('')

    const [qtyInCart, setQtyInCart] = useState('')
    const [totalSum, setTotalSum] = useState('')

    const [paymentSuccessful, setPaymentSuccessful] = useState(false)
    const [orderNumber, setOrderNumber] = useState(null)

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

    
    const paymentProcessment = (e) => {
        e.preventDefault()        
        
        let newOrderNumber = function(){
            let max=99999999
            let min=10000000
            function generate(max, min){
                return Math.floor(Math.random()*(max-min))+min
            }
            let chosenNumber = generate(max, min)
            
            for (let i=0; i<=orderNumbers.length; i++){
                if (i === orderNumbers.length){return chosenNumber}
                if (chosenNumber === orderNumbers[i]){newOrderNumber()}
            }
        }

        let generateOrderNumber = newOrderNumber()

        setOrderNumber(generateOrderNumber)
        
        emailjs.sendForm('gmail', 'template_mudydw2', e.target,'user_ei2HwlX5HUA6Vb2BoNWPR', {
            order_number: "12",
            email: email,
            name: name
        }).then((result) => {
            setPaymentSuccessful(true)
            console.log(result)
        }, (error) => {
            console.log(error)
        })

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
            
            <div>
                {
                    paymentSuccessful ? 
                    
                    <div className='payment-successful'>
                        <h1 id='payment-successful-title'>Your payment was successful</h1>
                        <h2>Your order number is <span style={{fontSize:32}}>{orderNumber}</span></h2>
                        <h2 style={{margin:10}}>We sent you an email with the order number and delivering 
                            information. Thank you for choosing us
                        </h2>
                    </div>
                    :
                    <div>
                        <div className='checkout'>
                    <form onSubmit={(e)=>paymentProcessment(e)}>  
                        <div className='personal-info'>
                            {/* full name, cellphone, email, house street, house number, zip code */}
                            <h1>Personal information</h1>
                            <div className='name'>
                                <label>Name: </label>
                                <input type='text' name='name' onChange={(e) => setName(e.target.value)} value={name}/>
                            </div>
                            <div className='email'>
                                <label>Email: </label>
                                <input type='email' name='email' onChange={(e) => setEmail(e.target.value)} value={email}/>
                            </div>
                            <div className='house-street'>
                                <label>House street: </label>
                                <input type='text' onChange={(e) => setStreet(e.target.value)} value={street}/>
                            </div>
                            <div className='house-number'>
                                <label>House number: </label>
                                <input type='number' onChange={(e) => setNumber(e.target.value)} value={number}/>
                            </div>
                            <div className='zip-code'>
                                <label>Zip code: </label>
                                <input type='number' onChange={(e) => setZipCode(e.target.value)} value={zipCode}/>
                            </div>
                        </div>

                        <div className='card-info'>
                        {/* Card holder, card number, expiry date, CVV */}
                            <h1>Card information</h1>
                            <div className='card-holder'>
                                <label>Card holder: </label>
                                <input type='text' onChange={(e) => setCardHolder(e.target.value)} value={cardHolder}/>
                            </div>
                            <div className='card-number'>
                                <label>Card number: </label>
                                <input type='number' onChange={(e) => setCardNumber(e.target.value)} value={cardNumber}/>
                            </div>
                            <div className='expiry'>
                                <label>Expiry date: </label>
                                <input type='number' onChange={(e) => setExpiry(e.target.value)} value={expiry}/>
                            </div>
                            <div className='cvv'>
                                <label>CVV: </label>
                                <input type='number' onChange={(e) => setCvv(e.target.value)} value={cvv}/>
                            </div> 
                        </div>
                        <div className='summary-button'>
                            <button type='submit' id='summary-button'>Pay now</button>
                        </div> 
                </form>

                <div className='summary-and-pay'>
                    <div className='checkout-summary'>
                        <h2 id='summary-title'>CHECKOUT SUMMARY</h2>
                        {cart.map(item => {
                            return <div className='summary-item' key={item.id}>
                                <h3>{item.name} x {item.qty}</h3>
                                <h3 id='item-price'>£{item.price*item.qty}</h3>
                            </div>
                        })}
                    </div>
                    <h2 id='summary-total'>Total: £{totalSum}</h2>
                </div>
        </div>
                    </div>
                }
            </div>

            }
        
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    }
}

export default connect (mapStateToProps) (Checkout)