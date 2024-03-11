import "./Signup.css"
import image from "../../assets/Login.jpg";
import { FcGoogle } from "react-icons/fc";
import { SiGmail } from "react-icons/si";
import { MdHorizontalRule } from "react-icons/md";

const Signup = () => {
  return (
    
    <div className="wrapper">
      <div className="main-section">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="credentials">
          <h1>iSHOP</h1>
          <div className="auth-btn">
            <h3>Sign In To iSHOP</h3>
            <div className="social-btn">
              <button>
                <FcGoogle id="gbtn" /> Sign up with Google
              </button>
              <button>
                <SiGmail id="gbtn" /> Sign up with Email
              </button>
            </div>
          </div>
          <div className="mid-section">
            <h1>
              <MdHorizontalRule />
              OR <MdHorizontalRule />
            </h1>
          </div>
          <div className="inputField">
            <input type="text" name="" id="" placeholder="Email" />
            <input type="text" name="" id="" placeholder="Password" />
          </div>

          <div className="btn">
            <button id="signIn">Sign In</button>
            <button id="register">Register now</button>
            <a href="">
              <h5 className="forget">Forget Password?</h5>
            </a>
          </div>

          <h5 className="terms">ISHOP Terms & Conditions</h5>
        </div>
      </div>
    </div>
  )
}
export default Signup