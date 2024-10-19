import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
//import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { FaFacebook } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-content">
      <div className="footer-section">
        <h3>Elite Cars</h3>
        <p>Your dream car is just a click away!</p>
      </div>
      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/inventory">Inventory</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Contact Us</h4>
        <p>Email: info@elitecars.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
      <div className="footer-section">
        <h4>Follow Us</h4>
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram />
          </a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} Elite Cars. All rights reserved.</p>
    </div>
  </footer>
);
};

export default Footer;