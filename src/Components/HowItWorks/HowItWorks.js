import React from "react";
import "./HowItWorks.css";
import "bootstrap/dist/css/bootstrap.min.css";

function HowItWorks() {
  return (
    <div>
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-lg-12">
            <h2 class="font-300">How It Works?</h2>
            <p className="text-muted mt-4 title-subtitle mx-auto" style={{ fontSize: '1.5em', fontStyle: 'italic', color: '#333' }}>
  Join Herfa today for a simple, reliable, and delightful service experience!
</p>


          </div>
        </div>
        <div class="timeline-page mt-5">
          <div class="timeline-item">
            <div class="row">
              <div class="col-lg-6">
                <div class="duration date-label-left">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1047/1047690.png"
                    alt=""
                    class="img-fluid rounded-circle"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="works works-description-right">
                  <h4>Connect</h4>
                  <p class="timeline-subtitle">
                    Create your Herfa account effortlessly. Choose if you're a
                    customer or a handyman. Quick and easy registration opens
                    the door to a tailored dashboard, putting you in control.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="row">
              <div class="col-lg-6">
                <div class="works works-description-left">
                  <h4> Find Services</h4>
                  <p class="timeline-subtitle">
                    For Customers: Explore skilled handymen with a user-friendly
                    search. Connect, view profiles, and request services
                    seamlessly.
                  </p>
                  <p class="timeline-subtitle">
                    For Handymen: Showcase your skills, set availability, and
                    get discovered by customers. Receive service requests,
                    respond, and manage your jobs hassle-free.
                  </p>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="duration duration-right ">
                  <img
                    src="https://media.istockphoto.com/id/614250216/vector/social-network-vector-illustration.jpg?s=612x612&w=0&k=20&c=qgeetDe-d99yBjqI6_xo06EJj12rRAf1dxUJk2RZfvs="
                    alt=""
                    class="img-fluid rounded-circle"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="timeline-item">
            <div class="row">
              <div class="col-lg-6">
                <div class="duration date-label-left">
                  <img
                   // src="https://bootdey.com/img/Content/avatar/avatar7.png"
                   src="https://thumbs.dreamstime.com/b/mobile-business-line-transaction-vector-backgrounds-concept-online-44585705.jpg"
                    alt=""
                    class="img-fluid rounded-circle"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="works works-description-right">
                  <h4> Enjoy Services</h4>
                  <p class="timeline-subtitle">
                    Experience smooth transactions. Customers create service
                    requests linked to specific categories, ensuring accurate
                    matches. Handymen organize tasks efficiently, provide
                    quotes, and deliver top-notch services. Ratings and reviews
                    build trust in the Herfa community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HowItWorks;
