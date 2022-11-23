import React from "react";
import footStyle from "../footer/footer.module.css";
import img1 from "../imges/img1.png";

function Footer() {
  return (
    <footer id="foot">
      <div>
        <div>
          <a href="#home">
            <img src={img1} alt="home" className={footStyle.foot} width="20%" />
          </a>
          <h4 className={footStyle.foot1}>Healthy Teeth With AAUP</h4>
          <p className={footStyle.foot1}>
            ARAB AMERICAN UNIVERSITY <br />
            <span>Contact</span>
          </p>
          <a href="mailto:info@example.com" className={footStyle.foot2}>
            info@aaup.edu
          </a>
          <a className={footStyle.foot3}>+(970) 4 2418888 </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
