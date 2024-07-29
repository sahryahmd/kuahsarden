"use client";

import React, { useState } from "react";
import Image from "next/image";

const projects = [
  {
    title: "E-commerce Website",
    description:
      "Sebuah platform e-commerce lengkap dengan sistem pembayaran dan manajemen inventaris.",
    image: "/assets/project1.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://project1.com",
  },
  {
    title: "Aplikasi Manajemen Tugas",
    description: "Aplikasi web untuk manajemen tugas dan kolaborasi tim.",
    image: "/assets/project2.jpg",
    tags: ["Vue.js", "Firebase", "Tailwind CSS"],
    link: "https://project2.com",
  },
  {
    title: "Sistem Informasi Akademik",
    description: "Sistem manajemen informasi untuk institusi pendidikan.",
    image: "/assets/project3.jpg",
    tags: ["Laravel", "MySQL", "Bootstrap"],
    link: "https://project3.com",
  },
  {
    title: "Aplikasi Mobile Kesehatan",
    description: "Aplikasi mobile untuk pelacakan kesehatan dan kebugaran.",
    image: "/assets/project4.jpg",
    tags: ["React Native", "Redux", "Express.js"],
    link: "https://project4.com",
  },
  {
    title: "Dashboard Analytics",
    description: "Dashboard interaktif untuk visualisasi data bisnis.",
    image: "/assets/project5.jpg",
    tags: ["D3.js", "Python", "Flask"],
    link: "https://project5.com",
  },
  {
    title: "Chatbot AI",
    description: "Chatbot berbasis AI untuk layanan pelanggan otomatis.",
    image: "/assets/project6.jpg",
    tags: ["TensorFlow.js", "NLP", "WebSocket"],
    link: "https://project6.com",
  },
];

const Portfolio: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-accent-1">
          PORTOFOLIO
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
                {hoveredIndex === index && (
                  <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-accent-2 py-2 px-4 rounded-full hover:bg-accent-1 transition duration-300"
                    >
                      Lihat Proyek
                    </a>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-accent-2">
                  {project.title}
                </h3>
                <p className="text-text-secondary mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-accent-1 text-bg-dark text-sm py-1 px-2 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
