import React from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsBrowserChrome } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import blankProfile from '../assets/blank_profile.webp'

const HeroSection = ({ darkMode, setDarkMode, about,contact }) => {
  return (
    <>
        <div class="flex justify-between p-5 shadow-sm bg-white dark:bg-neutral-800 rounded-lg">
          <div className="flex-row gap-4 flex items-center">
            <div
              className={`rounded-full bg-primary dark:border-white border-gray-700 overflow-hidden border-2 `}
            >
              <img
                src={about.profile_url?about.profile_url:blankProfile}
                className="w-20 h-20 object-cover object-center "
                alt=""
              />
            </div>
            <div>
              {
                about.name &&
              <h1 className="font-bold md:text-3xl text-xl">{about.name}</h1>
              }
              {
                about.description &&
              <h2 className="text-sm text-gray-700  dark:text-gray-300 ">
                {about.description}
              </h2>
              }

              {
                contact &&
              <div className="flex gap-2 mt-1 text-lg text-gray-800  dark:text-gray-200 ">
                {contact.linkedin && (
                  <a href={contact.linkedin} rel="noreferrer"  target="_blank">
                    <FaLinkedin />
                  </a>
                )}
                {contact.email && (
                  <a href={`mailto:${contact.email}`} rel="noreferrer"  target="_blank">
                    <MdEmail />
                  </a>
                )}
                {contact.website && (
                  <a href={contact.website}rel="noreferrer"  target="_blank">
                    <BsBrowserChrome />
                  </a>
                )}
                {contact.instagram && (
                  <a href={contact.instagram} rel="noreferrer" target="_blank">
                    <RiInstagramFill />
                  </a>
                )}
                {contact.youtube && (
                  <a href={contact.youtube} rel="noreferrer" target="_blank">
                    <FaYoutube />
                  </a>
                )}
              </div>
              }
            </div>
          </div>
          <button
            className=""
            onClick={() => {
              setDarkMode(!darkMode);
            }}
          >
            <BsMoonStarsFill />
          </button>
        </div>
     
    </>
  );
};

export default HeroSection;
