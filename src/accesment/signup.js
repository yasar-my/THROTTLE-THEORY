import "./login.css";
import {useNavigate} from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
function Signup()
{

    const navigate = useNavigate();
    const gotohome = () => {
        navigate("/home.js")
    };

    return(
        <div className="full_body">
            <div className="top_layer">
                <i onClick={gotohome}><IoMdArrowRoundBack /></i>
            </div>
            <div className="form_layer">
                <Loginform/>
            </div>
        </div>
    );
}
function Loginform()
{
    const navigates = useNavigate();
    const gotologin = () => {
        navigates("/login.js")
    };

    const navigate = useNavigate();
    const gotohome = () => {
        navigate("/home.js")
    };
    return(
        <div className="log">
            <form>
                <h1>SIGN UP</h1><br></br><br></br>
                <label id="Email">Email Address</label><br></br>
                <input type="email" name="Email"></input><br></br>
                <label id="Password">Password</label><br></br>
                <input type="password" name="Password"></input><br></br>
                <button onClick={gotohome}>Sign up</button>
                <p>Already have an account?<a onClick={gotologin}> Sign up</a></p>
            </form>
        </div>
    );
}
export default Signup;