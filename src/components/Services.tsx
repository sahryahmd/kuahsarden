import React from "react";
import {
  FaDesktop,
  FaMobile,
  FaServer,
  FaCode,
  FaDatabase,
  FaCloud,
  FaLock,
  FaSearch,
  FaBullhorn,
} from "react-icons/fa";

const serviceItems = [
  {
    icon: FaDesktop,
    title: "Web Design",
    description: "Desain website yang menarik dan responsif",
    color: "text-blue-400",
  },
  {
    icon: FaMobile,
    title: "Pengembangan Aplikasi Mobile",
    description: "Aplikasi iOS dan Android yang inovatif",
    color: "text-green-400",
  },
  {
    icon: FaServer,
    title: "Backend Development",
    description: "Sistem backend yang kuat dan skalabel",
    color: "text-red-400",
  },
  {
    icon: FaCode,
    title: "Frontend Development",
    description: "Antarmuka pengguna yang interaktif dan dinamis",
    color: "text-yellow-400",
  },
  {
    icon: FaDatabase,
    title: "Manajemen Database",
    description: "Optimasi dan pemeliharaan database",
    color: "text-purple-400",
  },
  {
    icon: FaCloud,
    title: "Cloud Solutions",
    description: "Implementasi dan manajemen layanan cloud",
    color: "text-indigo-400",
  },
  {
    icon: FaLock,
    title: "Keamanan Web",
    description: "Perlindungan website dan data dari ancaman",
    color: "text-pink-400",
  },
  {
    icon: FaSearch,
    title: "SEO Optimization",
    description: "Meningkatkan visibilitas website di mesin pencari",
    color: "text-teal-400",
  },
  {
    icon: FaBullhorn,
    title: "Digital Marketing",
    description: "Strategi pemasaran digital yang efektif",
    color: "text-orange-400",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-bg-dark text-text-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-accent-1">
          LAYANAN
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            >
              <item.icon className={`text-5xl mb-4 ${item.color}`} />
              <h3 className="text-xl font-semibold mb-2 text-accent-2">
                {item.title}
              </h3>
              <p className="text-text-secondary">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
