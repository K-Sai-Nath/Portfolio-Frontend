import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ADMIN,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_ID
      );

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_USER,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_ID
      );

      alert("Message sent successfully!");
      form.current.reset();
    } catch (error) {
      console.error("Email sending error:", error);
      alert("Failed to send message. Try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="bg-black text-white py-24 px-6 flex flex-col justify-center items-center"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center tracking-wide">
        Get In Touch
      </h2>

      {/* Contact Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-[#0a0a0a] border border-[#00e5ff40] rounded-2xl p-8 md:p-10 w-full max-w-2xl shadow-[0_0_25px_#00e5ff20] backdrop-blur-sm"
      >
        <div className="mb-6">
          <label className="block text-gray-300 text-sm mb-2" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Enter your name"
            className="w-full p-3 rounded-lg bg-[#111] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00e5ff] transition-all"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-300 text-sm mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg bg-[#111] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00e5ff] transition-all"
          />
        </div>

        <div className="mb-8">
          <label className="block text-gray-300 text-sm mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Write your message..."
            rows="5"
            className="w-full p-3 rounded-lg bg-[#111] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00e5ff] transition-all resize-none"
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-black bg-[#7df9ff] rounded-full overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_#7df9ff]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#7df9ff] via-[#00e5ff] to-[#7df9ff] opacity-0 hover:opacity-100 transition-opacity duration-300 blur-md"></span>
            <span className="relative z-10 flex items-center gap-2 text-black">
              Send Message <span className="text-xl">📩</span>
            </span>
          </button>
        </div>
      </form>

      {/* Footer Text */}
      <p className="text-gray-400 text-sm mt-8 text-center">
        Or reach me directly at{" "}
        <a
          href="mailto:sainathkancharakuntla@gmail.com"
          className="text-cyan-400 hover:underline"
        >
          sainathkancharakuntla@gmail.com
        </a>
      </p>
    </section>
  );
}
