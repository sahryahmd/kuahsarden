"use client";

import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Di sini Anda bisa menambahkan logika untuk mengirim email atau menyimpan pesan
    console.log("Form submitted:", formData);
    // Reset form setelah submit
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-bg-dark text-text-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-accent-1">
          Hubungi Saya
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-accent-2">
              Kirim Pesan
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-gray-800 text-white rounded"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-gray-800 text-white rounded"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 bg-gray-800 text-white rounded"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-accent-2 text-bg-dark py-2 px-6 rounded-full hover:bg-accent-1 transition duration-300"
              >
                Kirim Pesan
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-accent-2">
              Informasi Kontak
            </h3>
            <div className="space-y-4">
              <p className="flex items-center">
                <FaEnvelope className="mr-2 text-accent-1" />
                email@example.com
              </p>
              <p className="flex items-center">
                <FaPhone className="mr-2 text-accent-1" />
                +62 123 4567 890
              </p>
              <p className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-accent-1" />
                Jakarta, Indonesia
              </p>
            </div>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-accent-2">
              Ikuti Saya
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-accent-1 hover:text-accent-2"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-accent-1 hover:text-accent-2"
              >
                <FaGithub />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-accent-1 hover:text-accent-2"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
