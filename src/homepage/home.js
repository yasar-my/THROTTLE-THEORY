import "./home.css";
import tshirt1 from "../categorypage/imgs3/tshirt5.jpg";
import { IoShirt,IoSearch } from "react-icons/io5";
import { PiBaseballCapLight } from "react-icons/pi";
import { GiShirt } from "react-icons/gi";
import { FaBasketShopping } from "react-icons/fa6";
import { SlFire } from "react-icons/sl";
import {useNavigate} from "react-router-dom";
function Home(){
    let name1= "Classic Fit Tee";
    let rate1= 29;
     const navigate = useNavigate();
        const gotoproduct = () => {
            navigate("/product.js",{
                     state: { productname:name1 , productrate:rate1 ,image:tshirt1}
                });
        };
        const navigates = useNavigate();
        const gotocategory = () => {
            navigates("/category.js")
        };

        const navigat = useNavigate();
        const gotologin = () => {
        navigat("/login.js")
        };
        const naviga = useNavigate();
        const gotosignup = () => {
        naviga("/signup.js")
        };
    return(
        <div className="main">
            <nav className="navbars">
                <ul>
                    <li className="Active-button">HOME</li>
                    <li>SHOP</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                </ul>
                <div className="Search-icon"><i><IoSearch/></i></div>
            </nav>
            <div className="content">
                <div className="hero">
                    <h1>RACE IN STYLE</h1><br></br>                        <br></br>
                    <button onClick={gotocategory}>VIEW ALL PRODUCTS</button>
                </div>
                <div className="categories">
                    <div className="first-layer">
                        <div className="card" onClick={gotoproduct}>
                            <i><IoShirt/></i><br></br>
                            <p>TEES</p>
                        </div>
                        <div className="card">
                            <i><PiBaseballCapLight/></i>
                            <p>CAPS</p>
                        </div>
                        <div className="card">
                            <i><GiShirt/></i>
                            <p>JACKETS</p>
                        </div>
                        <div className="card">
                            <i><FaBasketShopping/></i>
                            <p>ACCESSORIES</p>
                        </div>
                    </div>
                    <div className="first-layer">
                        <div className="offer-zone">
                            <i><SlFire/></i>
                            <h3>RACE SALE 50% OFF</h3>
                            <p>-only this week</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="account-layer">
                <div className="signup">
                    <button onClick={gotosignup}>SIGN UP</button>
                </div>
                <div className="signin">
                    <button onClick={gotologin}>SIGN IN</button>
                </div>
            </div>
        </div>
    );
}
export default Home;