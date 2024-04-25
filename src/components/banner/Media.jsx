import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaWhatsapp } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs, SiFlutter, SiNodedotjs } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
            <a href='https://www.facebook.com/hirpa.feyisa.5?mibextid=ZbWKwL'>
              <FaFacebookF />
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
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiFlutter />
            </span>
            <span className="bannerIcon">
              <SiNodedotjs />
            </span>
            {/* <span className="bannerIcon">
              <SiTailwindcss />
            </span> */}
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media