import React from 'react'
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

import { bannerImg, contactImg, logo } from "../../assets/index"; 
import { MdEmail } from 'react-icons/md';

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-40 h-30 object-cover rounded-lg mb-2"
        src={bannerImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Hirpha Fayisa</h3>
        <p className="text-lg font-normal text-gray-400">
          Fullstack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+251930605974</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">hirphafayisa88@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">connect with me on</h2>
        <div className="flex gap-4">
            <span className="bannerIcon">
            <a href='mailto:hirphafayisa88@gmail.com'>
              <MdEmail />
              </a>
            </span>
            <span className="bannerIcon">
            <a href="https://api.whatsapp.com/send?phone=251930605974">
               <FaWhatsapp />
               </a>
            </span>
            <span className="bannerIcon">
            <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">
               <FaLinkedinIn />
               </a>
             
            </span>
          </div>
      </div>
    </div>
  );
}

export default ContactLeft