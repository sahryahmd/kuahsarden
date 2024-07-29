import React from "react";
import { FaCode, FaLightbulb, FaBook } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-20 bg-zinc-950 w-full text-text-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-accent-1">
          TENTANG SAYA
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-lg">
              Halo! Saya adalah seorang pengembang web berpengalaman dengan
              hasrat dalam menciptakan solusi digital yang inovatif dan efisien.
              Dengan latar belakang dalam ilmu komputer dan pengalaman industri
              selama 5 tahun, saya telah mengembangkan keahlian dalam berbagai
              teknologi web modern.
            </p>
            <p className="text-lg">
              Saya percaya bahwa teknologi memiliki kekuatan untuk mengubah
              dunia menjadi lebih baik, dan saya berdedikasi untuk terus belajar
              dan mengembangkan keterampilan saya untuk mencapai tujuan ini.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-bg-dark p-4 rounded-lg shadow-md border border-accent-2">
              <FaCode className="text-4xl text-accent-1 mb-2" />
              <h3 className="text-xl font-semibold mb-2">Keahlian Teknis</h3>
              <ul className="list-disc list-inside text-text-secondary">
                <li>React & Next.js</li>
                <li>Node.js & Express</li>
                <li>TypeScript</li>
                <li>GraphQL</li>
              </ul>
            </div>
            <div className="bg-bg-dark p-4 rounded-lg shadow-md border border-accent-2">
              <FaLightbulb className="text-4xl text-accent-1 mb-2" />
              <h3 className="text-xl font-semibold mb-2">Soft Skills</h3>
              <ul className="list-disc list-inside text-text-secondary">
                <li>Problem Solving</li>
                <li>Team Collaboration</li>
                <li>Project Management</li>
                <li>Komunikasi Efektif</li>
              </ul>
            </div>
            <div className="bg-bg-dark p-4 rounded-lg shadow-md border border-accent-2 col-span-2">
              <FaBook className="text-4xl text-accent-1 mb-2" />
              <h3 className="text-xl font-semibold mb-2">
                Pendidikan & Sertifikasi
              </h3>
              <ul className="list-disc list-inside text-text-secondary">
                <li>S1 Ilmu Komputer, Universitas Terkemuka</li>
                <li>Sertifikasi AWS Developer Associate</li>
                <li>Google Professional Cloud Developer</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/path-to-your-cv.pdf"
            className="inline-block bg-accent-2 text-bg-dark py-2 px-6 rounded-full hover:bg-accent-1 transition duration-300"
          >
            Unduh CV Saya
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
