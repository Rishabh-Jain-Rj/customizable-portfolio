import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { FaSquareEnvelope } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <>
      <section class="p-10 text-center">
        <h3 className="md:text-5xl text-2xl py-2 text-teal-500">
          Cool Programming Projects
        </h3>
        <p className="md:text-2xl text-xl font-semibold py-2 text-neutral-800 dark:text-white">
          Mern Stack Developer
        </p>
        <p className="text-md text-gray-600 max-w-xl mx-auto dark:text-gray-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
          laudantium doloremque quod vel repellendus eos porro? Quisquam minus,
          delectus adipisci, nulla veritatis enim odit, dicta impedit qui
          repellat sunt inventore?
        </p>
        <div className="flex justify-center text-gray-600 md:text-5xl text-3xl gap-10 my-5 dark:text-white">
          <BsLinkedin />
          <BsYoutube />
          <FaSquareEnvelope />
        </div>
        <div className="mx-auto relative mt-10 rounded-full w-48 h-48 md:w-80 md:h-80 overflow-hidden bg-gradient-to-b from-cyan-500 to-teal-500">
          <img
            src="https://res.cloudinary.com/dtws0vjlb/image/upload/v1689062624/avtars/cd4ihz1spsjg2jpwejqi.png"
            className="object-cover"
            alt=""
          />
        </div>
      </section>
      <section className=" py-10">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="text-center rounded-lg dark:bg-gray-800 shadow-lg p-10 ">
            <p className="text-xl text-gray-950 dark:text-white font-semibold">Frontend Developer</p>
            <p className="text-gray-600 text-sm dark:text-gray-400 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque tempora at cumque nostrum similique fugiat, provident repudiandae voluptas sunt ipsa?</p>
          </div>
          <div className="text-center rounded-lg dark:bg-gray-800  shadow-lg  p-10 ">
            <p className="text-xl text-gray-950 dark:text-white font-semibold">Backend Developer</p>
            <p className="text-gray-600 text-sm dark:text-gray-400 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque tempora at cumque nostrum similique fugiat, provident repudiandae voluptas sunt ipsa?</p>
          </div>
          <div className="text-center rounded-lg dark:bg-gray-800 shadow-lg  p-10 ">
            <p className="text-xl text-gray-950 dark:text-white font-semibold">UI/UX Designer</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque tempora at cumque nostrum similique fugiat, provident repudiandae voluptas sunt ipsa?</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
