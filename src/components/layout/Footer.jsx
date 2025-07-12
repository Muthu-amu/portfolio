import { FiPhone, FiMail  } from 'react-icons/fi';
import { FaLinkedin , FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full text-slate-300 border-t border-white/10 py-10 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="flex justify-center gap-6 flex-wrap">
          {/* Phone */}
          <a
            href="tel:+919176804411"
            className="flex items-center gap-2 text-sm hover:text-[#60fbc4] transition"
          >
            <FiPhone size={18} /> Call Me
          </a>

          {/* Email */}
          <a
            href="mailto:muthu.amu.mp@gmail.com"
            className="flex items-center gap-2 text-sm hover:text-[#60fbc4] transition"
          >
            <FiMail size={18} /> Send Email
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/a-muthupandi-998545136/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm hover:text-[#60fbc4] transition"
          >
            <FaLinkedin size={18} /> LinkedIn
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919176804411"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm hover:text-[#60fbc4] transition"
          >
            <FaWhatsapp size={18} /> WhatsApp
          </a>
        </div>

        <p className="text-xs text-slate-400">&copy; {new Date().getFullYear()} A. Muthupandi • All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
