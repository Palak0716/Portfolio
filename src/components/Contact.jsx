import React from 'react';
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Contact = () => {
  return (
    <>
    <div className="container contact" id="contact">
      <h1>CONTACT ME</h1>
      <div 
      className="contact-icon"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      >
        <a href="https://www.linkedin.com/in/palak-sirothiya-608514222" className="items">
          < CiLinkedin className="icons" />
        </a>
        <a href="https://github.com/Palak0716" className="items">
          <FaGithubSquare className="icons" />
        </a>
        <a href="https://x.com/PalakSirothiya"className="items">
          <FaSquareXTwitter className="icons" />
        </a>
        <a href="mailto:palaksirothiya535@gmail.com"className="items">
          <SiGmail className="icons" />
        </a>
      </div>
    </div>  
    </>
  )
}

export default Contact
