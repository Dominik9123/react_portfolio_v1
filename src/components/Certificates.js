import React from "react";
import "./Certificates.css";

import certificate1Image from "../assets/images/coursera_final_crt.jpg"; // Obraz certyfikatu
import certificate1PDF from "../assets/images/coursera_final_crt.pdf";  // PDF certyfikatu

import certificate2Image from "../assets/images/certyfikat_responsive.jpg";
import certificate2PDF from "../assets/images/certyfikat_responsive.pdf";

import certificate3Image from "../assets/images/certyfikat_Csharp.jpg";
import certificate3PDF from "../assets/images/certyfikat_Csharp.pdf";


const certificates = [
  {
    name: "Responsive Web Design",
    image: certificate2Image,
    pdf: certificate2PDF,
    link: "https://freecodecamp.org/certification/fcc1da8013f-bc8e-49e6-add3-55fb90f6edf1/responsive-web-design",
  },
  {
    name: "Meta Front-End Developer",
    image: certificate1Image,
    pdf: certificate1PDF,
    link: "https://www.coursera.org/account/accomplishments/professional-cert/KJ0JNZJP9F8T",
  },
  {
    name: "Foundational C# with Microsoft",
    image: certificate3Image,
    pdf: certificate3PDF,
    link: "https://freecodecamp.org/certification/fcc1da8013f-bc8e-49e6-add3-55fb90f6edf1/foundational-c-sharp-with-microsoft",
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="certificates">
      <h1>My Certificates</h1>
      <p>Here are some of the certifications I have obtained in my learning journey
      <p>I have some other certifications, but these are the most important ones</p></p>
      <p>Click on a certificate to verify it or download the PDF.</p>
      <div className="certificates-gallery">
        {certificates.map((certificate, index) => (
          <div key={index} className="certificate-item">
            {/* Kliknięcie na obraz prowadzi do strony weryfikacji certyfikatu */}
            <a href={certificate.link} target="_blank" rel="noopener noreferrer">
              <img src={certificate.image} alt={certificate.name} className="certificate-img" />
            </a>
            <p>{certificate.name}</p>

            {/* Opcja pobrania PDF certyfikatu */}
            <div className="download-link">
            <a href={certificate.pdf} target="_blank" rel="noopener noreferrer">
              📜 Download PDF
            </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
