
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Inventory from './components/inventory/Inventory';
import Notfound from './components/notfound/Notfound';
import OrderReview from './components/review/OrderReview';
import Shop from './components/shop/Shop';


function App() {
  return (
    <div className="App">

    <BrowserRouter>
    <Header></Header>
    <Switch>
    <Route path='/home'>
      <Home></Home>
    </Route>

    <Route exact path='/'>
      <Home></Home>
    </Route>

    <Route path='/inventory'>
      <Inventory></Inventory>
    </Route>

    <Route path='/shop'>
      <Shop></Shop>
    </Route>

    <Route path='/review'>
      <OrderReview></OrderReview>
    </Route>

    <Route path='*'>
      <Notfound></Notfound>
    </Route>



    </Switch>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
