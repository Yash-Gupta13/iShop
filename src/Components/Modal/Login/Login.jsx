import "./Login.css";

import { FcGoogle } from "react-icons/fc";
import { SiGmail } from "react-icons/si";
import { MdHorizontalRule } from "react-icons/md";
import Image from "../Image";
import Button from "../Button";
import Input from "../Input";
import image from "../../../assets/Login.jpg";
const Login = () => {
  return (
    <div className="wrapper">
      <div className="main-section">
        <Image url={image}/>
        <div className="right-section">
        <div className="credentials">
          <h1>iSHOP</h1>
          <div className="auth-btn">
            <h3>Sign In To iSHOP</h3>
            <div className="social-btn">
              <Button icon={<FcGoogle id="gbtn" />} name={"Sign up with Google"}/>
              <Button icon={<SiGmail id="gbtn" />} name={"Sign up with Email"}/>
            </div>
          </div>
          <div className="mid-section">
            <h1>
              <MdHorizontalRule />
              OR <MdHorizontalRule />
            </h1>
          </div>
          <div className="inputField">
            <Input placeHolder={"Email"}/>
            <Input placeHolder={"Password"}/>
          </div>

          <div className="btn">
            <Button id={"signIn"} name={"Sign In"}/>
            <Button id={"register"} name={"Register now"}/>
            <a href="">
              <h5 className="forget">Forget Password?</h5>
            </a>
          </div>

        </div>
          <div className="terms">ISHOP Terms & Conditions</div>
        </div>
      </div>
    </div>
  );
};
export default Login;
