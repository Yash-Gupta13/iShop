import "./Card.css";
import { IoIosStar } from "react-icons/io";

const Card = ({ product }) => {
  return (
    <div className="card-wrapper">
      <div className="card-image">
        <img src={product.image} alt="" />
      </div>
      <div className="card-content">
        <div className="content-name">
          <h2>{product.title}</h2>
          {/* <div className="card-star">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
          </div> */}
        </div>

        <div className="content-price">
          <h3>${product.price}</h3>
        </div>
      </div>
    </div>
  );
};
export default Card;
