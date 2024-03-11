import "./SingleProduct.css";
import { FaHeart } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../../context/myContext";
const SingleProduct = () => {
    const {id} = useParams();
    const {addToCart} = useCart()
    const [particulaProduct , setParticularProduct] = useState(null);
    
    const fetchParticularProduct = async()=>{
        try {
            const result = await fetch(`https://fakestoreapi.com/products/${id}`)
            const data = await result.json()
            setParticularProduct(data)

        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(()=>{
        window.scrollTo(0,0)
        fetchParticularProduct()
    },[id])

    const handleAddToCart = ()=>{
      addToCart(particulaProduct)
    }

    if(!particulaProduct){
        return <div>Loading....</div>
    }
  return (
    <div className="product-wrapper">
      <div className="product-content">
        <div className="product-left ">
          <div className="product-img">     
            <img src={particulaProduct.image} alt="" />
          </div>
        </div>
        <div className="product-right">
          <div className="product-details">
            <h5 className="brandName">iSHOP</h5>
            <div className="product-fav">
              <h2>{particulaProduct.title}</h2>
              <div className="heart">
                <FaHeart className="fav" />
              </div>
            </div>
            <div className="star">
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
            </div>
            <h2 className="price">$ {particulaProduct.price} </h2> 
            <h3 className="size">
              Size : <span>M</span>{" "}
            </h3>

            <div className="size-btn">
              <button>S</button>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
            </div>

            <h4 className="qnty">Quantity</h4>
            <div className="qty">
              <div className="qty-no">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <button className="cart" onClick={handleAddToCart}>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleProduct;
