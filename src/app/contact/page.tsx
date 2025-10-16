"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaFacebookMessenger, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

interface ContactProps {
  title: string;
  description: string;
  form_description: string;
  form_name: string;
  form_email: string;
  form_message: string;
  form_submit: string;
  form_sending: string;
  status_success: string;
  status_error: string;
  cta_whatsapp: string;
  cta_facebook: string;
  cta_linkedin: string;
}

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function Contact(props: ContactProps) {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://formspree.io/f/mblzdlqb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setStatus(props.status_success);
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus(props.status_error);
      }
    } catch (error) {
      console.error(error);
      setStatus(props.status_error);
    }
    setLoading(false);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center px-6 py-20
                    bg-gradient-to-b from-gray-50 via-gray-100 to-white
                    dark:from-[#050505] dark:via-[#0b0b0f] dark:to-[#090909]
                    text-gray-900 dark:text-white transition-colors duration-500 scroll-mt-24">

      {/* Titre */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center mb-12"
      >
        <FaPhoneAlt size={50} className="text-blue-600 dark:text-blue-400 mb-4" />
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 text-center">
          {props.title}
        </h1>
      </motion.div>

      {/* Contenu principal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="flex flex-col md:flex-row items-start gap-12 w-full max-w-5xl"
      >
        {/* Liens sociaux */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 items-center md:items-start order-1 md:order-2">
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-center md:text-left max-w-md">
            {props.description}
          </p>

          <a
            href="https://wa.me/22953173035"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full
                       bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-[0_0_25px_rgba(0,212,255,0.25)]
                       hover:scale-105 hover:shadow-[0_0_35px_rgba(0,212,255,0.4)] transition-all duration-300 w-full md:w-auto justify-center"
          >
            <FaWhatsapp size={20} /> {props.cta_whatsapp}
          </a>

          <a
            href="https://web.facebook.com/profile.php?id=61579343805169"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full
                       bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-[0_0_25px_rgba(0,212,255,0.25)]
                       hover:scale-105 hover:shadow-[0_0_35px_rgba(0,212,255,0.4)] transition-all duration-300 w-full md:w-auto justify-center"
          >
            <FaFacebookMessenger size={20} /> {props.cta_facebook}
          </a>

          <a
            href="https://www.linkedin.com/in/abdoulaye-patawala-84b138381"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full
                       bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-[0_0_25px_rgba(0,212,255,0.25)]
                       hover:scale-105 hover:shadow-[0_0_35px_rgba(0,212,255,0.4)] transition-all duration-300 w-full md:w-auto justify-center"
          >
            <FaLinkedin size={20} /> {props.cta_linkedin}
          </a>
        </div>

        {/* Formulaire */}
        <div className="w-full md:w-1/2 p-6 rounded-xl bg-gradient-to-br from-gray-50 via-gray-100 to-white
                        dark:from-[#050505] dark:via-[#0b0b0f] dark:to-[#090909]">
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg flex flex-col gap-4"
          >
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg text-justify">
              {props.form_description}
            </p>

            <input
              type="text"
              placeholder={props.form_name}
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-800 dark:text-gray-200"
              required
            />
            <input
              type="email"
              placeholder={props.form_email}
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-800 dark:text-gray-200"
              required
            />
            <textarea
              placeholder={props.form_message}
              rows={5}
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-800 dark:text-gray-200"
              required
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className={`group relative inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full
                         bg-gradient-to-r from-blue-600 to-green-500 text-white shadow-[0_0_25px_rgba(0,212,255,0.25)]
                         hover:scale-105 hover:shadow-[0_0_35px_rgba(0,212,255,0.4)] transition-all duration-300 ${
                           loading ? "opacity-70 cursor-not-allowed" : ""
                         }`}
            >
              {loading ? props.form_sending : props.form_submit}
            </button>

            {status && (
              <p className="mt-4 text-green-600 dark:text-green-400 font-medium">{status}</p>
            )}
          </form>
        </div>
      </motion.div>
    </div>
  );
}
