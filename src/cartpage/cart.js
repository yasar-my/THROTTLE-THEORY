import "./cart.css";
import {useNavigate} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import React, { useState } from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
function Cart(){


    const naviga = useNavigate();
            const gotoproduct = () => {
                naviga("/product.js",{
                    state: { productname, productrate,image}
                });
            };

            const navig = useNavigate();
            const gotohome = () => {
                navig("/home.js");
            };

    const navigat = useNavigate();
                const gotocategory = () => {
                    navigat("/category.js");
                };


    const location = useLocation();
    const { productname, productrate,image } = location.state || {};

    const price = productrate;
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState("M");

    const handleQuantityChange = (type) => {
    setQuantity((prevQty) => {
      if (type === "inc") return prevQty + 1;
      if (type === "dec" && prevQty > 1) return prevQty - 1;
      return prevQty;
    });
    };


    return(
        <div className="cart-page">
            <div className="head-layer">
                <div className="head-left"><h3>THROTTLE THEORY</h3></div>
                <div className="head-right">
                    <i className="heart"><FaRegHeart/></i>
                    <i className="contact"><IoMdContact/></i>
                </div>
            </div>
            <div className="title-layer">
                <i onClick={gotoproduct}><IoArrowBackCircleOutline/></i>
                <h1>CART</h1>
            </div>
            <div className="main-content">
                <div className="product-head">
                    <div className="pro">
                        <h3>Product</h3>
                    </div>
                    <div className="detai">
                        <ul>
                            <li>Price</li>
                            <li>Quantity</li>
                            <li>Size</li>
                            <li>Sutotal</li>
                        </ul>
                    </div>
                </div>
                <div className="product-price">
                    <img src={image} alt="error"></img>
                    <h3>{productname}</h3>
                    <p>${productrate}</p>
                    <div className="quantity">
                        <button onClick={() => handleQuantityChange("dec")}>−</button>
                        <input type="text" value={quantity} readOnly/>
                        <button onClick={() => handleQuantityChange("inc")}>+</button>
                        <select value={size} onChange={(e) => setSize(e.target.value)}>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                        </select>
                        <p>${price * quantity}</p>
                    </div>
                </div>
                <div className="price-calcu">
                    <div className="sub-total"><p>Subtotal</p><h4>: ${price * quantity}</h4></div><br></br>
                    <div className="delivery"><p>Delivery</p><h4>: Free</h4></div><br></br>
                </div>
                <div className="total-amount">
                    <p>Total</p><h4>: ${price * quantity}</h4> 
                </div>
                <div className="order-button"><button onClick={gotohome}>Proceed to Checkout</button></div><br></br>
                <div className="about-us" onClick={gotocategory}><p>Your cart is empty.Add something cool!</p></div>
            </div>
        </div>
    );
}
export default Cart;