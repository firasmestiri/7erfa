import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div class="footer-clean">
      <footer>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-sm-4 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#">Web design</a>
                </li>
                <li>
                  <a href="#">Development</a>
                </li>
                <li>
                  <a href="#">Hosting</a>
                </li>
              </ul>
            </div>
            <div class="col-sm-4 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <Link to="/company"> Company</Link>{" "}
                </li>
                <li>
                  <Link to="/team"> Team</Link>
                </li>
                <li>
                  <Link to="/contact"> Contact Us</Link>{" "}
                </li>
              </ul>
            </div>
            <div class="col-sm-4 col-md-3 item">
              <h3>Website</h3>
              <ul>
                <li>
                <Link to="/how_it_works"> How It Works</Link>{" "}
                </li>
               
              </ul>
            </div>
            <div class="col-lg-3 item social">
              <a href="#">
                <i class="icon ion-social-facebook"></i>
              </a>
              <a href="#">
                <i class="icon ion-social-twitter"></i>
              </a>
              <a href="#">
                <i class="icon ion-social-snapchat"></i>
              </a>
              <a href="#">
                <i class="icon ion-social-instagram"></i>
              </a>
              <p class="copyright">Herfa © 2023</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
