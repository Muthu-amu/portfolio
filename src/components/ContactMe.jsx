import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

   toast.promise(
      emailjs.sendForm(
        "service_kl3wc7n",      
        "template_2xcc088",     
        form.current,
        "QATmcOdfdxbCCCFPR"       
      ),
      {
        loading: "Sending message...",
        success: "Message sent successfully!",
        error: "Something went wrong. Please try again.",
      }
    ).then(() => {
      form.current.reset();
    });
  };

  return (
    <section className="w-full text-slate-200 py-6 md:py-8 lg:py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#60fbc4] tracking-wide mb-10">
          Contact Me
        </h2>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 border border-[#4CC89D] backdrop-blur p-8 rounded-2xl shadow hover:shadow-[0_0_20px_#4CC89D] transition-all space-y-6"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="flex-1 px-4 py-3 bg-[#1e293b] text-slate-200 border border-white/10 rounded-md focus:outline-none focus:border-[#60fbc4]"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="flex-1 px-4 py-3 bg-[#1e293b] text-slate-200 border border-white/10 rounded-md focus:outline-none focus:border-[#60fbc4]"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full px-4 py-3 bg-[#1e293b] text-slate-200 border border-white/10 rounded-md focus:outline-none focus:border-[#60fbc4]"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 bg-[#1e293b] text-slate-200 border border-white/10 rounded-md focus:outline-none focus:border-[#60fbc4] resize-none"
          />

          <button
            type="submit"
            className="bg-[#60fbc4] text-black font-medium px-6 py-3 rounded-md hover:bg-[#7ae3ff] transition cursor-pointer"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactMe;
