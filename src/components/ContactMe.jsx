import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submission is currently disabled.\nFeel free to contact me via LinkedIn or email!');
  };

  return (
    <section className="w-full bg-[#0f172a] text-slate-200 py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#60fbc4] tracking-wide mb-10">
          Contact Me
        </h2>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="bg-white/5 border border-[#4CC89D] backdrop-blur p-8 rounded-2xl shadow hover:shadow-[0_0_20px_#4CC89D] transition-all space-y-6"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="flex-1 px-4 py-3 bg-[#1e293b] text-slate-200 border border-white/10 rounded-md focus:outline-none focus:border-[#60fbc4]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="flex-1 px-4 py-3 bg-[#1e293b] text-slate-200 border border-white/10 rounded-md focus:outline-none focus:border-[#60fbc4]"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#1e293b] text-slate-200 border border-white/10 rounded-md focus:outline-none focus:border-[#60fbc4]"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#1e293b] text-slate-200 border border-white/10 rounded-md focus:outline-none focus:border-[#60fbc4] resize-none"
          />

          <button
            type="submit"
            className="bg-[#60fbc4] text-black font-medium px-6 py-3 rounded-md hover:bg-[#7ae3ff] transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactMe;
