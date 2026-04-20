import "./index.css";

const ContactCard = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <h2 className="contact-title">
          <span className="contact-number">04.</span> Contact
        </h2>
        <hr className="contact-line" />
      </div>

      <p className="contact-subtitle">Get in touch</p>

      <p className="contact-text">
        Open to job opportunities and collaborations — feel free to get in
        touch.
      </p>

      <div className="contact-info">
        <p className="contact-info-item">
          <span className="contact-label">Email:</span>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=boyayugandhar135@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-value"
          >
            boyayugandhar135@gmail.com
          </a>
        </p>

        <p className="contact-info-item">
          <span className="contact-label">GitHub:</span>
          <a
            href="https://github.com/yugandharboya"
            target="_blank"
            rel="noreferrer"
            className="contact-value"
          >
            github.com/yugandharboya
          </a>
        </p>

        <p className="contact-info-item">
          <span className="contact-label">LinkedIn:</span>
          <a
            href="https://linkedin.com/in/yugandharboya"
            target="_blank"
            rel="noreferrer"
            className="contact-value"
          >
            linkedin.com/in/yugandharboya
          </a>
        </p>

        <p className="contact-info-item">
          <span className="contact-label">Location:</span>
          <span className="contact-value">Hyderabad, India</span>
        </p>
      </div>

      <div className="contact-buttons">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=boyayugandhar135@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          📩 Email
        </a>

        <a
          href="https://wa.me/919848181206?text=Hi%20Yugandhar,%20I%20visited%20your%20portfolio."
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          💬 WhatsApp
        </a>

        <a href="tel:+919848181206" className="contact-button">
          📞 Call
        </a>
      </div>
    </section>
  );
};

export default ContactCard;
