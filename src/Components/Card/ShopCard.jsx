import './Card.css'
import Girl from "../../assets/Girl.jpg";
const ShopCard = () => {
  return (
    <div className="shop-card-wrapper">
        <div className="shop-card-image">
            <img src={Girl} alt="" />
        </div>
        <div className="shop-card-content">
            <h3>Rounded Red Hat</h3>
            <p>$ 30</p>
        </div>

    </div>
  )
}
export default ShopCard