import './App.css';
import {useState} from 'react'
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux'

//components
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import NavigationMenu from './components/NavigationMenu'

//screens
import HomeScreen from './components/screen/HomeScreen'
import ProductScreen from './components/screen/ProductScreen'
import CartScreen from './components/screen/CartScreen'
import InfoProduct from './components/screen/InfoProduct'
import Checkout from './components/screen/CheckoutScreen.js'


function App({currentItem}) {

  const [show, setShow] = useState(false)

  const changeShow = () => {
    show ? setShow(false) : setShow(true)
  }

  return (
    <div className="App">

        <Navbar show={show} changeShow={changeShow}/>
        <NavigationMenu show={show} changeShow={changeShow}/>

        <Switch>
          <Route exact path='/' component={HomeScreen}/>
          <Route exact path='/products' component={ProductScreen}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/cart' component={CartScreen}/>
          <Route exact path='/products/:id' component={InfoProduct}/>
          <Route exact path='/checkout' component={Checkout}/>
        </Switch>
    </div>
  );
}

const mapStateToProps = state => {
  return {
      currentItem: state.shop.currentItem
  }
}

export default connect (mapStateToProps)(App);
