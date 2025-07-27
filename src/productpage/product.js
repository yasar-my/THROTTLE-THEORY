import  "./order.css";
import "./product.css";
import { useLocation } from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
function Product(){


    const naviga = useNavigate();
            const gotocategory = () => {
                naviga("/category.js")
            };


    const location = useLocation();
    const { productname, productrate,image } = location.state || {};
        const navigat = useNavigate();
                const gotocart = () => {
                    navigat("/cart.js",{
                     state: { productname, productrate,image}
                });
                };
    return(
        <div className="total-page">
            <div className="product-details">
                <i onClick={gotocategory}><IoArrowBackCircleOutline/></i>
                <img src={image} alt="error"></img>
                <h1>{productname}</h1><p>{productrate}</p>
            </div>
            <div className="description">
                <div className="order-layer">
            <div className="size">
                <button>S</button>
                <button>M</button>
                <button>L</button>
            </div>
            <div className="buy">
                <button onClick={gotocart} >ADD TO CART</button>
            </div>
            <div className="desc">
                <h2>Description</h2>
            </div>
        </div>
            <p>Embarance speed and style with our F1-inspired t-shirt,featuring<br></br>
                bold'PERFORMANCE 2018' grapics.Crafted from premium cotton, this <br></br>
                streetwear staple offers all-day comfort</p></div>
        </div>
    );
}
export default Product;