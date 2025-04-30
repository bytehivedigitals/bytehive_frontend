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
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

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
    setSubmitSuccess(false);
    setSubmitError(null);

    // Initialize EmailJS with your User ID
    emailjs.init("TxUV9W3atW6y6Hd3t");

    // Mapping formData to match template variables (snake_case)
    const emailParams = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      company_name: formData.companyName,
      company_email: formData.companyEmail,
      company_website: formData.companyWebsite,
      project_details: formData.projectDetails,
      year: new Date().getFullYear(), // for {{year}} in footer
    };

    // Sending email using EmailJS
    emailjs
      .send(
        "service_m73nvyq", // Service ID
        "template_k3r5vg8", // Template ID
        emailParams // Mapped data for template
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSubmitSuccess(true);
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
          setSubmitSuccess(false);
          setSubmitError("Something went wrong. Please try again later.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="form-container">
        <div className="form-left-section">
            <h1>Let’s Start a Conversation!</h1>
            <p className="form-p">
                Reach out to our team for any inquiries or collaborations.
            </p>
        </div>

        <div className="form-right-section">
            <h2 className="form-h2">Start Your Project with ByteHive</h2>
            <hr />
            {submitSuccess === true && (
                <div className="success-message">
                    Thank you! We'll be reaching out to you soon.
                </div>
            )}
            {submitError && (
                <div className="error-message">
                    <p> Oops! Something went wrong. Please try again.</p>
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
                    className={`submit-button ${
                        submitSuccess ? "submit-success" : 
                        submitError ? "submit-error" : ""
                    }`}
                    disabled={isSubmitting || submitSuccess}
                    >
                    {submitSuccess ? (
                        <span className="success-check">✓</span>
                    ) : submitError ? (
                        "Failed"
                    ) : isSubmitting ? (
                        "Sending..."
                    ) : (
                        "Submit"
                    )}
                </button>
            </form>
        </div>
    </div>
  );
};

export default Form;