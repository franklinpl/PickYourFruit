import './Product.css'

function Product(props){
    return(
        <div className='product'>
            <div className='product-picture'>
                <img src={props.image} alt={props.name}/>
            </div>
            <div className='product-others'>
                <div className='name-and-price'>
                    <h2 className='product-name'>{props.name}</h2>
                    <h2 className='product-price'>£{props.price}</h2>
                </div>
                <button className='info-button'>Info</button>
                <button className='add-to-cart'>Add to cart</button>
            </div>
        </div>
    )
}

export default Product