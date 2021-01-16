import React from "react";
import { FaFacebookF, FaTwitter, FaTelegram, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="contactSection">
          <div className="row justifyConter">
            <div className="col-6">
              <div className="contactSection-logo">
                <h1>Contacts</h1>
                <img src="/images/logo.jpg" alt="" />
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor inci- didunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exe- rcitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <ul className="contactCircles">
                <li>
                  <FaFacebookF className="contactIcon" />
                </li>
                <li>
                  <FaTwitter className="contactIcon" />
                </li>
                <li>
                  <FaTelegram className="contactIcon" />
                </li>
                <li>
                  <FaInstagram className="contactIcon" />
                </li>
                <li>
                  <FaWhatsapp className="contactIcon" />
                </li>
                <li>
                  <FaLinkedin className="contactIcon" />
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
