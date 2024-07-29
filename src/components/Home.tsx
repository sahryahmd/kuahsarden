"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Home: React.FC = () => {
  // Ganti dengan nomor WhatsApp Anda (tanpa tanda + atau spasi)
  const whatsappNumber = "6285693922994";
  const whatsappMessage = "Halo, saya tertarik dengan layanan Anda.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-bg-dark"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="relative w-64 h-64 mx-auto md:mx-0">
            {/* Elemen dekoratif */}
            <div className="absolute -top-4 -left-4 w-64 h-64 bg-accent-1 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-accent-2 rounded-full opacity-20 animate-pulse"></div>

            {/* Container gambar dengan border glow */}
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-accent-1 shadow-lg shadow-accent-1/50">
              {/* Overlay gradien */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-1/30 to-accent-2/30 z-10"></div>

              {/* Gambar profil */}
              <div className="relative w-full h-full">
                <Image
                  src="/assets/pp.jpg"
                  alt="Foto Profil"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4 text-accent-1">Kuah Sarden</h1>
          <p className="text-xl text-text-secondary mb-8">
            Saya adalah seorang pengembang web kreatif
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="#portfolio"
              className="bg-accent-2 text-bg-dark py-3 px-6 rounded-full hover:bg-accent-1 transition duration-300 text-center"
            >
              Portfolio
            </Link>
            <a
              href="/path-to-your-resume.pdf"
              download
              className="bg-transparent border-2 border-accent-1 text-accent-1 py-3 px-6 rounded-full hover:bg-accent-1 hover:text-bg-dark transition duration-300 text-center"
            >
              Unduh
            </a>
          </div>

          {/* WhatsApp CTA */}
          <div className="mt-8">
            <p className="text-text-secondary mb-2">Tertarik bekerja sama?</p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-accent-1 hover:underline font-semibold"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Hubungi Saya
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
