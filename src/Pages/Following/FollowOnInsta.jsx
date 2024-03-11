import "./Following.css";
import Insta7 from "../../assets/Insta7.png";
import Insta1 from '../../assets/Insta1.png'
import Insta2 from '../../assets/Insta2.png'
import Insta3 from '../../assets/Insta3.png'
import Insta4 from '../../assets/Insta4.png'
import Insta5 from '../../assets/Insta5.png'
import Insta6 from '../../assets/Insta6.png'
const FollowOnInsta = () => {
  return (
    <div className="follow-wrapper">
      <div className="content">
        <div className="content-header">
          <h3>Follow Us On Instagram</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo unde
            fugit voluptatibus eum aspernatur modi itaque minima adipisci illum
            vel?
          </p>
        </div>
        <div className="content-image">
          <div className="images">
            <img src={Insta7} alt="" />
          </div>
          <div className="images">
            <img src={Insta1} alt="" />
          </div>
          <div className="images">
            <img src={Insta2} alt="" />
          </div>
          <div className="images">
            <img src={Insta3} alt="" />
          </div>
          <div className="images">
            <img src={Insta4} alt="" />
          </div>
          <div className="images">
            <img src={Insta5} alt="" />
          </div>
          <div className="images">
            <img src={Insta6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default FollowOnInsta;
