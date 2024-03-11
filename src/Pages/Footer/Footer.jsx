import "./Footer.css";
import boy from "../../assets/image2.png";
import girl from "../../assets/image3.png";
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-content">
        <div className="footer-left-image">
          <img src={boy} alt="" />
        </div>
        <div className="footer-subscriber">
          <div className="subscribe-content">
            <h2>Subscribe to our Newsletter</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              consequatur cumque culpa ab.
            </p>
            <h4>yash@gmail.com</h4>
          </div>
          <button>Subscribe now</button>
        </div>
        <div className="footer-right-image">
          <img src={girl} alt="" />
        </div>
      </div>

      <div className="footer">
        <div className="footer-bottom">
          <div className="logo">
            <h3>iSHOP</h3>
          </div>
          <div className="footer-items">
            <a href="">Support Center</a>
            <a href="">Invoicing</a>
            <a href="">Contract</a>
            <a href="">Carrers</a>
            <a href="">Blog</a>
            <a href="">FAQ,s</a>
          </div>
        </div>
        <div className="footer-copyright">
          <h4>Copyright 2024 . All Rights Reserved.</h4>
        </div>
      </div>
    </div>
  );
};
export default Footer;
