import "./Cart.css";
import Girl from "../../assets/Single.png";
import { useCart } from "../../context/myContext";
const CartCard = ({item}) => {
  const {removeFromCart} = useCart()
  const handleRemoveItems = (id)=>{
    removeFromCart(id);
  }
  return (
    <div className="cards-wrapper">
      <div className="productCart-details">
        <div className="cart-image">
          <img src={item.image} alt="" />
        </div>
        <div className="cart-content">
          <h1>{item.title} </h1>
          <h2>Size : S</h2>
          <h2 id="price">$ {item.price}</h2>

          <div className="qtys-no">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
        </div>
      </div>
      <div className="removebtn">
        <button onClick={()=>handleRemoveItems(item.id)}>Remove</button>
      </div>
    </div>
  );
};
export default CartCard;
