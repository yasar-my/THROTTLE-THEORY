import './App.css';
import Home from "./homepage/home";
import Product from "./productpage/product";
import Category from "./categorypage/category";
import Cart from './cartpage/cart';
import Login from './accesment/login';
import Signup from './accesment/signup';
import{BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home.js" element={<Home/>}/>
        <Route path="/category.js" element={<Category/>}/>
        <Route path="/product.js" element={<Product/>} />
        <Route path="/cart.js" element={<Cart/>}/>
        <Route path="/login.js" element={<Login/>}/>
        <Route path="/signup.js" element={<Signup/>}/>
      </Routes>
    </Router>
  );
}

export default App;
