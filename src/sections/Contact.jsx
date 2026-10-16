
import { useState } from 'react';
import {
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPaperPlane,
} from 'react-icons/fa';

import '../css/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'YouTube Video Editing',
    message: '',
  });

  // Apna contact details baad mein yahan update karna
  const whatsappNumber = '+919472469076';
  const contactEmail = 'ripukesh870@gmail.com';

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const message = `Hello! I would like to discuss a project.

Name: ${formData.name}
Email: ${formData.email}
Service: ${formData.service}

Project Details:
${formData.message}`;

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  }

  function handleEmail() {
    const subject = encodeURIComponent(
      `Project Inquiry - ${formData.service}`
    );

    const body = encodeURIComponent(
      `Hello,

Name: ${formData.name}
Email: ${formData.email}
Service: ${formData.service}

Project Details:
${formData.message}`
    );

    window.location.href =
      `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-heading">
          <span className="section-eyebrow">LET'S CONNECT</span>

          <h2>
            Have a Project?
            <br />
            <span>Let's Create Together.</span>
          </h2>

          <p>
            Need a video editor or animation creator?
            Tell me about your project and let's discuss your ideas.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-info">
            <h3>Let's talk about your project.</h3>

            <p>
              Whether it's YouTube editing, 2D animation,
              3D cartoons or documentary editing, I'd love
              to hear about your project.
            </p>

            <a
              className="contact-info-item"
              href={`mailto:${contactEmail}`}
            >
              <span className="contact-info-icon">
                <FaEnvelope />
              </span>
              <span>
                <small>Email Me</small>
                <strong>{contactEmail}</strong>
              </span>
            </a>

            <a
              className="contact-info-item"
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="contact-info-icon">
                <FaWhatsapp />
              </span>
              <span>
                <small>WhatsApp</small>
                <strong>Let's chat about your project</strong>
              </span>
            </a>

            <div className="contact-info-item">
              <span className="contact-info-icon">
                <FaMapMarkerAlt />
              </span>
              <span>
                <small>Work Availability</small>
                <strong>Available for online projects</strong>
              </span>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="contact-name">Your Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-service">Service Required</label>
              <select
                id="contact-service"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option>YouTube Video Editing</option>
                <option>2D Animation</option>
                <option>3D Animation</option>
                <option>Documentary Editing</option>
                <option>Informative Videos</option>
                <option>Other Project</option>
              </select>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">Project Details</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="Tell me about your video, deadline and requirements..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button className="contact-submit" type="submit">
              <FaWhatsapp />
              Send via WhatsApp
              <FaPaperPlane />
            </button>

            <button
              className="contact-email-submit"
              type="button"
              onClick={handleEmail}
            >
              <FaEnvelope />
              Continue via Email
            </button>

            <p className="contact-form-note">
              Your message will open in WhatsApp or your default
              email application. It won't be sent automatically.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
