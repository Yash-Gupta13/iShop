import { Link } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import "./Navbar.css";
import { useCart } from "../../context/myContext";


const Navbar = () => {
  const {cartCount} = useCart()
  return (
    <nav>
      <div className="logo">
        <Link to={"/"}>
          <h1>iSHOP</h1>
        </Link>
      </div>
      <div className="items">
        <Link to={`/`}>Home</Link>
        <Link to={"/"}>Deals</Link>
        <Link to={"/"}>New Arrivals</Link>
        <Link to={"/"}>Packages</Link>
        <Link to={"/"}>Sign in</Link>
        <Link to={"/cart"}>
          <div className="cartBtn">
            <div className="item-no">{cartCount}</div>
            <BsCartFill id="signUp" />
          </div>
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
