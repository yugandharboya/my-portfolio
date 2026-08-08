import { FaEnvelope, FaWhatsapp, FaPhoneAlt, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

const ContactCard = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="section-header-row">
        <h2 className="section-heading-title text-fluid-section">
          <span className="section-heading-number">05.</span> Get In Touch
        </h2>
        <div className="section-heading-line" />
      </div>

      <div className="contact-card-container">
        <h3 className="contact-headline text-fluid-h2">
          Let’s Connect & Collaborate
        </h3>

        <p className="contact-body-text text-fluid-body">
          Whether you're one of my students looking for guidance, or a company interested in collaboration — let's connect. My inbox is always open!
        </p>

        <div className="contact-info-grid">
          <div className="contact-info-card">
            <FaEnvelope className="contact-info-icon" />
            <div className="contact-info-content">
              <p className="contact-info-label">Email</p>
              <a
                href="mailto:boyayugandhar135@gmail.com"
                className="contact-info-link"
              >
                boyayugandhar135@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-info-card">
            <FaMapMarkerAlt className="contact-info-icon" />
            <div className="contact-info-content">
              <p className="contact-info-label">Location</p>
              <span className="contact-info-value-text">
                Hyderabad, India
              </span>
            </div>
          </div>

          <div className="contact-info-card">
            <FaGithub className="contact-info-icon" />
            <div className="contact-info-content">
              <p className="contact-info-label">GitHub</p>
              <a
                href="https://github.com/yugandharboya"
                target="_blank"
                rel="noreferrer"
                className="contact-info-link"
              >
                github.com/yugandharboya
              </a>
            </div>
          </div>

          <div className="contact-info-card">
            <FaLinkedin className="contact-info-icon" />
            <div className="contact-info-content">
              <p className="contact-info-label">LinkedIn</p>
              <a
                href="https://linkedin.com/in/yugandharboya"
                target="_blank"
                rel="noreferrer"
                className="contact-info-link"
              >
                linkedin.com/in/yugandharboya
              </a>
            </div>
          </div>
        </div>

        <div className="contact-actions-group">
          <a
            href="mailto:boyayugandhar135@gmail.com"
            className="contact-btn-email"
          >
            <FaEnvelope /> Email Me
          </a>

          <a
            href="https://wa.me/919848181206?text=Hi%20Yugandhar,%20I%20visited%20your%20portfolio."
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn-whatsapp"
          >
            <FaWhatsapp className="whatsapp-green-icon" /> WhatsApp
          </a>

          <a
            href="tel:+919848181206"
            className="contact-btn-call"
          >
            <FaPhoneAlt /> Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
