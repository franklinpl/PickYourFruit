import './App.css';
import {Route, Switch} from 'react-router-dom';

//components
import Navbar from './components/Navbar'
import Contact from './components/Contact'

//screens
import HomeScreen from './components/screen/HomeScreen'
import ProductScreen from './components/screen/ProductScreen'
import CartScreen from './components/screen/CartScreen'


function App() {
  return (
    <div className="App">

        <Navbar/>

        <Switch>
          <Route exact path='/' component={HomeScreen}/>
          <Route exact path='/products' component={ProductScreen}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/cart' component={CartScreen}/>
        </Switch>
    </div>
  );
}

export default App;
