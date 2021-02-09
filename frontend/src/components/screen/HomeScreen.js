import './HomeScreen.css'
import {Link} from 'react-router-dom'

function HomeScreen(){
    return(
        <div className='homescreen'>
            <h2>
                We deliver Scottish fairtrade fruits to you,  
                <span> Everyday</span>
            </h2>
            <Link to='/products'>
                <button className='homescreen-button'>Check our products</button>
            </Link>
           
        </div>
    )
}

export default HomeScreen