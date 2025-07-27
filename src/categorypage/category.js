import "./category.css";
import tshirt1 from "./imgs3/tshirt5.jpg";
import tshirt2 from "./imgs3/tshirt1.jpg";
import cap1 from "./imgs3/cap4.jpg";
import cap2 from "./imgs3/cap1.jpg";
import jacket1 from "./imgs3/jacket3.jpg";
import jacket2 from "./imgs3/jacket1.jpg";
import shirt1 from "./imgs3/shirt1.jpg";
import scarf1 from "./imgs3/scarf1.jpg";
import {useNavigate} from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
function Category(){


    const navigat = useNavigate();
            const gotohome = () => {
                navigat("/home.js")
            };


    let name1= "Classic Fit Tee";
    let rate1= 29;
    const navigate = useNavigate();
            const gotoproduct = () => {
                navigate("/product.js",{
                     state: { productname:name1 , productrate:rate1 ,image:tshirt1}
                });
            };
    let name2= "Performance Tee";
    let rate2= 35;        
    const navigates = useNavigate();
            const gotoproduct2 = () => {
                navigates("/product.js",{
                     state: { productname:name2 , productrate:rate2,image:tshirt2}
                });
            };
    let name3= "Bomber Jacket";
    let rate3= 80;         
    const navigatess = useNavigate();
            const gotoproduct3 = () => {
                navigatess("/product.js",{
                     state: { productname:name3 , productrate:rate3,image:jacket1}
                });
            };
    let name4= "Windbreaker";
    let rate4= 74; 
    const navigatesss = useNavigate();
            const gotoproduct4 = () => {
                navigatesss("/product.js",{
                     state: { productname:name4 , productrate:rate4,image:jacket2}
                });
            };
    let name5= "Baseball Cap";
    let rate5= 34; 
    const navigatessss = useNavigate();
            const gotoproduct5 = () => {
                navigatessss("/product.js",{
                     state: { productname:name5 , productrate:rate5,image:cap1}
                });
            };
    let name6= "Unstructured Dad Cap";
    let rate6= 20; 
    const navigatesssss = useNavigate();
            const gotoproduct6 = () => {
                navigatesssss("/product.js",{
                     state: { productname:name6 , productrate:rate6,image:cap2}
                });
            };
    let name7= "Fleece Scarf";
    let rate7= 15; 
    const navigatessssss = useNavigate();
            const gotoproduct7 = () => {
                navigatessssss("/product.js",{
                     state: { productname:name7 , productrate:rate7,image:shirt1}
                });
            }; 
    let name8= "Hoodie";
    let rate8= 54; 
    const navigatessssssss = useNavigate();
            const gotoproduct8 = () => {
                navigatessssssss("/product.js",{
                     state: { productname:name8 , productrate:rate8,image:scarf1}
                });
            };                
    return(
        <div className="top-page">
            <div className="head-page">
            <i onClick={gotohome}><IoArrowBackCircleOutline/></i>
            <h1>THROTTLE THEORY</h1>
            </div>
            <div className="row">
                <div className="double-pieace">
                    <h3>TEES</h3><br></br>
                    <div className="single-pieace" onClick={gotoproduct}>
                        <img src={tshirt1} alt="error"></img><br></br>
                        <h2>{name1}</h2><p>{rate1}</p>
                        <p>!00% cotton,pre-shurnk<br></br>Available in 6 colors</p>
                    </div>
                    <div className="single-pieace" onClick={gotoproduct2}>
                        <img src={tshirt2} alt="error"></img><br></br>
                        <h2>{name2}</h2><p>{rate2}</p>
                        <p>Moisture-wicking, soft stretch <br></br>b Perfect for workouts or casual wear</p>
                    </div>
                </div>
                <div className="double-pieace">
                    <h3>JACKET</h3><br></br>
                    <div className="single-pieace" onClick={gotoproduct3}>
                        <img src={jacket1} alt="error"></img><br></br>
                        <h2>{name3}</h2><p>{rate3}</p>
                        <p>Water-resistant, matte finish <br></br>Zippered pockets, ribaed cuffs</p>
                    </div>
                    <div className="single-pieace" onClick={gotoproduct4}>
                        <img src={jacket2} alt="error"></img><br></br>
                        <h2>{name4}</h2><p>{rate4}</p>
                        <p>Lightweight, breathable mesh lining <br></br>Ideal for layering and outooor activity</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="double-pieace">
                    <h3>CAPS</h3><br></br>
                    <div className="single-pieace" onClick={gotoproduct5}>
                        <img src={cap1} alt="error"></img><br></br>
                        <h2>{name5}</h2><p>{rate5}</p>
                        <p>Adjustable snapback <br></br>Embroidered logo</p>
                    </div>
                    <div className="single-pieace" onClick={gotoproduct6}>
                        <img src={cap2} alt="error"></img><br></br>
                        <h2>{name6}</h2><p>{rate6}</p>
                        <p>Soft brim, low profile<br></br> Washed cotton finish</p>
                    </div>
                </div>
                <div className="double-pieace">
                    <h3>ACCESSORIES</h3><br></br>
                    <div className="single-pieace" onClick={gotoproduct7}>
                        <img src={shirt1} alt="error"></img><br></br>
                        <h2>{name7} </h2><p>{rate7}</p>
                        <p>Double-layered warmth <br></br>Unisex sizing </p>
                    </div>
                    <div className="single-pieace" onClick={gotoproduct8}>
                        <img src={scarf1} alt="error"></img><br></br>
                        <h2>{name8}</h2><p>{rate8}</p>
                        <p>Midweight-fieece, kangatop porcket<br></br> Embroldered "Performance" branding</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Category;