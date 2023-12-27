import React from "react";
import "./Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

function Contact() {
  const [errors, setErrors] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setErrors([]);
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = [];

    if (
      formData.email.trim().length === 0 ||
      formData.name.trim().length === 0 ||
      formData.message.trim().length === 0
    ) {
      newErrors = [
        ...newErrors,
        { id: "emptyField", msg: "All fields must be completed" },
      ];
    }
    if (!formData.email.includes("@")) {
      newErrors = [
        ...newErrors,
        { id: "invalidEmail", msg: "Email must contain @ character" },
      ];
    }
    console.log(newErrors);
    setErrors(newErrors);
    console.log(newErrors.length);
    if (newErrors.length === 0) {
      const data = {
        email: formData.email,
        name: formData.namme,
        message: formData.message,
      };

      // Optionally, you can clear the form fields by resetting the formData state
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };
  return (
    <div style={{ marginBottom: "25px" }}>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div className="container bootstrap snippets bootdeys">
        <div className="row text-center">
          <div className="col-sm-4">
            <div className="contact-detail-box">
              <i className="fa fa-th fa-3x text-colored"></i>
              <h4>Get In Touch</h4>
              <abbr title="Phone">P:</abbr> +216 12345678
              <br />
              E:{" "}
              <a
                href="mailto:herfa_contact@herfa.comherfa_contact@herfa.com"
                className="text-muted"
              >
                herfa_contact@herfa.com{" "}
              </a>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="contact-detail-box">
              <i className="fa fa-map-marker fa-3x text-colored"></i>
              <h4>Our Location</h4>

              <address>
                1053 Les Berges du Lac II Walkway <br />
                Tunis 1053 <br />
              </address>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="contact-detail-box">
              <i className="fa fa-book fa-3x text-colored"></i>
              <h4>24x7 Support</h4>

              <p>Industry's standard dummy text.</p>
              <h4 className="text-muted">1234 567 89</h4>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3192.8618778885566!2d10.26647131169366!3d36.84578387211828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2stn!4v1703152442670!5m2!1sen!2stn"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="col-sm-6">
            <Form className="form-main" onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                />{" "}
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <div
                  style={{
                    display: "inline-block",
                    color: "red",
                    marginLeft: "3px",
                  }}
                >
                  {errors.map((error) =>
                    error.id === "invalidEmail" ? error.msg : ""
                  )}
                </div>
                <Form.Control
                  type="text"
                  placeholder="Enter your Email"
                  id="email" // <-- Use "Email" as the id
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                />{" "}
              </Form.Group>
              <Button
                type="submit"
                size="lg"
                active
                style={{
                  backgroundColor: "#d85600 ",
                  border: "1px solid #d85600 ",
                }}
              >
                Submit{" "}
              </Button>
              <div
                style={{
                  display: "inline-block",
                  color: "red",
                  marginLeft: "3px",
                }}
              >
                {errors.map((error) =>
                  error.id === "emptyField" ? error.msg : ""
                )}
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
