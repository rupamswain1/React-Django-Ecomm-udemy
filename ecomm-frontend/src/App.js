import Header from './components/header/Header.component';
import Footer from './components/footer/Footer.component';
import ProductPage from './pages/productPage/ProductPage.component';
import CartPage from './pages/cartPage/CartPage.component';
import HomePage from './pages/homePage/HomePage.component';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path="/product/:prodId" component={ProductPage}/>
            <Route exact path="/cart/" component={CartPage}/>
          </Switch>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
