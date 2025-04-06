import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    companyEmail: "",
    companyWebsite: "",
    projectDetails: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Initialize EmailJS with your User ID
    emailjs.init("YOUR_USER_ID");

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Service ID
        "YOUR_TEMPLATE_ID", // Template ID
        formData // Form data
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSubmitStatus("success");
          setFormData({
            firstName: "",
            lastName: "",
            companyName: "",
            companyEmail: "",
            companyWebsite: "",
            projectDetails: "",
          });
        },
        (error) => {
          console.log("FAILED...", error);
          setSubmitStatus("error");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div id="main">
      <div>
        <div>
          <div>
            <div className="overflow-hidden">
              <div>
                <div>
                  <div>
                    {/* First child div */}
                    <div></div>

                    {/* Second child div - This is where your heading goes */}
                    <div className="rotating-heading-container">
                      <div className="rotating-heading">
                        CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rest of your form content */}
            <div className="contact-container">
              <p className="form-p">
                Let’s Start a Conversation Have a project in mind? Use the form
                below to tell us more * we’re ready to turn your ideas into
                impactful digital solutions. For press inquiries, media
                collaborations, or career opportunities, feel free to connect
                with us directly via email.
              </p>
              <h2 className="form-h2">Start Your Project with ByteHive</h2>
              <hr />

              {submitStatus === "success" && (
                <div className="success-message">
                  Thank you! Your submission has been received.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="error-message">
                  Oops! Something went wrong. Please try again.
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name*</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName">Last Name*</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="companyName">Company Name</label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="companyEmail">Company Email*</label>
                    <input
                      type="email"
                      id="companyEmail"
                      name="companyEmail"
                      value={formData.companyEmail}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="companyWebsite">Company Website</label>
                  <input
                    type="url"
                    id="companyWebsite"
                    name="companyWebsite"
                    value={formData.companyWebsite}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="projectDetails">
                    Tell us about the project (scope, timeline, budget):*
                  </label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleChange}
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
