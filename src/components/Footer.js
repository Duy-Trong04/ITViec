import React from "react";
import { FaEnvelope, FaPhone, FaPaperPlane, FaLinkedinIn, FaFacebookF, FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="logo">
            <span className="logo-text">
                <img
                src="https://itviec.com/assets/logo-itviec-4492a2f2577a15a0a1d55444c21c0fa55810822b3b189fc689b450fb62ce0b5b.png"
                alt="NAB Logo"
                style={{ width: "140px", marginRight: "20px" }}
                />
            </span>
            <p className="slogan">Ít nhưng mà chất</p>
            <div className="social-icons">
              <a href="#" className="icon-linkedin"><FaLinkedinIn  /></a>
              <a href="#" className="icon-facebook"><FaFacebookF /></a>
              <a href="#" className="icon-youtube"><FaYoutube /></a>
            </div>
          </div>

          <div className="footer-links">
            <div>
              <h4>About Us</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">AI Match Service</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">All Jobs</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4>Campaign</h4>
              <ul>
                <li><a href="#">IT Story</a></li>
                <li><a href="#">Writing Contest</a></li>
                <li><a href="#">Featured IT Jobs</a></li>
                <li><a href="#">Annual Survey</a></li>
              </ul>
            </div>

            <div>
              <h4>Terms & Conditions</h4>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Operating Regulation</a></li>
                <li><a href="#">Complaint Handling</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Press</a></li>
              </ul>
            </div>

            <div>
              <h4>Want to post a job? Contact us at:</h4>
              <p><FaPhone /> Ho Chi Minh: (+84) 977 460 519</p>
              <p><FaPhone /> Ha Noi: (+84) 983 131 351</p>
              <p><FaEnvelope /> Email: <a href="#">love@itviec.com</a></p>
              <p><FaPaperPlane  /> <a href="#">Submit contact information</a></p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright © IT VIEC JSC | Tax code: 0312192258</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
