import { useCart } from '../../context/myContext';
import './Cart.css'
import CartCard from './CartCard'
const Cart = () => {
  const {cartItems} = useCart();
  
  return (
    <div className='cart-wrapper'>
       
       {cartItems.length===0 ?<div style={{textAlign:"center", fontSize :"40px"}}>Your Cart is empty </div> :
        cartItems?.map((item)=>(
          <CartCard  key = {item.id} item={item}/>
        ))
       }   
    </div>
  )
}
export default Cart