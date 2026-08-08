import { FaEnvelope, FaWhatsapp, FaPhoneAlt, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

const ContactCard = () => {
  return (
    <section className="w-full flex flex-col gap-6 scroll-mt-24 min-w-0" id="contact">
      <div className="flex items-center gap-4 w-full min-w-0">
        <h2 className="text-fluid-section font-bold text-[#e6f1ff] flex items-center min-w-0 break-normal">
          <span className="text-[#64ffda] font-mono mr-2 flex-shrink-0">05.</span> Get In Touch
        </h2>
        <div className="h-[1px] bg-[#233554] flex-1 ml-2 sm:ml-4" />
      </div>

      <div className="bg-[#112240]/90 backdrop-blur-sm border border-[#233554] rounded-xl p-6 sm:p-8 md:p-10 flex flex-col items-center text-center shadow-xl min-w-0">
        <h3 className="text-fluid-h2 font-extrabold text-[#e6f1ff] tracking-tight mb-3 min-w-0 break-normal">
          Let’s Connect & Collaborate
        </h3>

        <p className="text-fluid-body text-[#8892b0] max-w-xl leading-relaxed mb-8 min-w-0 break-normal">
          I'm currently looking for full-stack developer roles, freelance opportunities, and interesting projects to collaborate on. Whether you have a question or just want to say hi, my inbox is always open!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mb-8 min-w-0">
          <div className="bg-[#0b1f36] border border-[#1d3557] rounded-lg p-4 flex items-center gap-3 min-w-0">
            <FaEnvelope className="text-[#64ffda] text-xl flex-shrink-0" />
            <div className="text-left min-w-0">
              <p className="text-xs font-mono text-[#8892b0]">Email</p>
              <a
                href="mailto:boyayugandhar135@gmail.com"
                className="text-xs sm:text-sm text-[#e6f1ff] hover:text-[#64ffda] transition-colors break-words block min-w-0"
              >
                boyayugandhar135@gmail.com
              </a>
            </div>
          </div>

          <div className="bg-[#0b1f36] border border-[#1d3557] rounded-lg p-4 flex items-center gap-3 min-w-0">
            <FaMapMarkerAlt className="text-[#64ffda] text-xl flex-shrink-0" />
            <div className="text-left min-w-0">
              <p className="text-xs font-mono text-[#8892b0]">Location</p>
              <span className="text-xs sm:text-sm text-[#e6f1ff] block truncate min-w-0">
                Hyderabad, India
              </span>
            </div>
          </div>

          <div className="bg-[#0b1f36] border border-[#1d3557] rounded-lg p-4 flex items-center gap-3 min-w-0">
            <FaGithub className="text-[#64ffda] text-xl flex-shrink-0" />
            <div className="text-left min-w-0">
              <p className="text-xs font-mono text-[#8892b0]">GitHub</p>
              <a
                href="https://github.com/yugandharboya"
                target="_blank"
                rel="noreferrer"
                className="text-xs sm:text-sm text-[#e6f1ff] hover:text-[#64ffda] transition-colors break-words block min-w-0"
              >
                github.com/yugandharboya
              </a>
            </div>
          </div>

          <div className="bg-[#0b1f36] border border-[#1d3557] rounded-lg p-4 flex items-center gap-3 min-w-0">
            <FaLinkedin className="text-[#64ffda] text-xl flex-shrink-0" />
            <div className="text-left min-w-0">
              <p className="text-xs font-mono text-[#8892b0]">LinkedIn</p>
              <a
                href="https://linkedin.com/in/yugandharboya"
                target="_blank"
                rel="noreferrer"
                className="text-xs sm:text-sm text-[#e6f1ff] hover:text-[#64ffda] transition-colors break-words block min-w-0"
              >
                linkedin.com/in/yugandharboya
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto min-w-0">
          <a
            href="mailto:boyayugandhar135@gmail.com"
            className="border-2 border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 px-6 py-3 rounded font-mono text-sm font-semibold tracking-wide transition-all duration-200 min-h-[44px] flex items-center justify-center gap-2 shadow-lg shadow-[#64ffda]/5 hover:-translate-y-0.5"
          >
            <FaEnvelope /> Email Me
          </a>

          <a
            href="https://wa.me/919848181206?text=Hi%20Yugandhar,%20I%20visited%20your%20portfolio."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#112240] hover:bg-[#1d3557] text-[#ccd6f6] border border-[#233554] hover:border-[#64ffda] px-6 py-3 rounded font-mono text-sm tracking-wide transition-all duration-200 min-h-[44px] flex items-center justify-center gap-2"
          >
            <FaWhatsapp className="text-[#25D366]" /> WhatsApp
          </a>

          <a
            href="tel:+919848181206"
            className="bg-[#112240] hover:bg-[#1d3557] text-[#ccd6f6] border border-[#233554] hover:border-[#64ffda] px-6 py-3 rounded font-mono text-sm tracking-wide transition-all duration-200 min-h-[44px] flex items-center justify-center gap-2"
          >
            <FaPhoneAlt /> Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;




