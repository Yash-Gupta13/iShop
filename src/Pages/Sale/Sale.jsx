import "./Sale.css";
import Sale3 from "../../assets/Sale3.png";
import Sale4 from "../../assets/Sale4.png";
import Sale1 from "../../assets/Sale2.png";
import Sale2 from "../../assets/Sale1.png";
import Arrivals from "../Arrivals/Arrivals";
import FollowOnInsta from "../Following/FollowOnInsta";
const Sale = () => {
  return (
    <>
    <div className="sale-wrapper">
      <div className="section">
        <div className="left-section">
          <img src={Sale4} alt="" />
        </div>
        <div className="mid-section">
          <div className="mid-img-top">
            <img src={Sale1} alt="" />
          </div>
          <div className="mid-text">
            <h2>Ultimate</h2>

            <h1>Sale</h1>

            <h4>New Collection</h4>

            <button>Shop Now</button>
          </div>
          <div className="mid-img-down">
            <img src={Sale2} alt="" />
          </div>
        </div>
        <div className="right-section">
          <img src={Sale3} alt="" />
        </div>
      </div>
      <div className="branding">
        <div>chanel</div>
        <div>louis vuitton</div>
        <div>Prada</div>
        <div>calvin klein</div>
        <div>denim</div>
      </div>
    </div>
    <Arrivals/>
    <FollowOnInsta/>
    </>
  );
};
export default Sale;
