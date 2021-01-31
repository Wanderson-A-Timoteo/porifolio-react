import React from "react";
import { FaFacebookF, FaTwitter, FaTelegram, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="contactSection">
          <div className="row justifyConter">
            <div className="col-6">
              <div className="contactSection-logo">
                <h1>Contacts</h1>
                <img src="/images/logo.png" alt="Logomarca Wanderson Timóteo" />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor inci- didunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exe- rcitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <ul className="contactCircles">
                <li>
                  <a href="https://www.facebook.com/wanderson.a.timoteo"> <FaFacebookF className="contactIcon" /> </a>
                </li>
                <li>
                  <a href="https://twitter.com/WandersonAT"> <FaTwitter className="contactIcon" /> </a>
                </li>
                <li>
                  <a href="https://t.me/WandersonTimoteo"> <FaTelegram className="contactIcon" /> </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/wanderson.a.timoteo"> <FaInstagram className="contactIcon" /> </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/wanderson.a.timoteo"> <FaWhatsapp className="contactIcon" /> </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/wanderson-a-timoteo/"> <FaLinkedin className="contactIcon" /> </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
