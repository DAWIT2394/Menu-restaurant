import React from 'react';
import '../css/footer.css'
const Footer = () => {
  return (
    <footer>
      <div className="containerf">
        <div className="row">
          <div className="t2">
            <h3>Contact Us</h3>
            <p>Addis ababa, Ayat</p>
            <p>Phone: 123-456-7890</p>
            <p>Email: info@example.com</p>
          </div>
          <div className="title">
            <h3>Follow Us</h3>
            <ul className="social-links">
              <li><a href="https://facebook.com">Facebook</a></li>
              <li><a href="https://twitter.com">Twitter</a></li>
              <li><a href="https://instagram.com">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
