import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="footer-clean">
      <footer>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-4 col-md-3 item">
              <Link
                to="/ServicesPage"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <h3>Services</h3>
              </Link>
              <ul>
                <li>
                  <Link
                    to="/ServicesPage"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Web design
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ServicesPage"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {" "}
                    Development
                  </Link>
                </li>
                <li>

                <Link
                to="/ServicesPage"
                style={{ textDecoration: "none", color: "inherit" }}
              >

                Plumbing
              </Link>

                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 item">
              <h3>About</h3>
              <ul>
                {/*<li>
                  <Link to="/company"> Company</Link>{" "}
                </li>*/}
                <li>
                  <Link to="/team"> Team</Link>
                </li>
                <li>
                  <Link to="/contact"> Contact Us</Link>{" "}
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 item">
              <h3>Website</h3>
              <ul>
                <li>
                  <Link to="/how_it_works"> How It Works</Link>{" "}
                </li>
              </ul>
            </div>
            <div className="col-lg-3 item social">
              <a href="#">
                <i className="icon ion-social-facebook"></i>
              </a>
              <a href="#">
                <i className="icon ion-social-twitter"></i>
              </a>
              <a href="#">
                <i className="icon ion-social-snapchat"></i>
              </a>
              <a href="#">
                <i className="icon ion-social-instagram"></i>
              </a>
              <p className="copyright">Herfa © 2023</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
