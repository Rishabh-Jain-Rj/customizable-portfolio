
import { FaLink } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import React from "react";

const Projects = ({ projects }) => {
  return (
    <div>
      <div className="inline-block mb-4">
        <h3 className="md:text-2xl text-xl px-5 py-2 font-bold border-s-4 border-primary heading text-primary">
          Projects
        </h3>
      </div>
      <div className="flex flex-col gap-5 ">
        {projects?.map((item, index) => (
          <div key={index}className="card  rounded-lg cursor-pointer  overflow-hidden shadow-sm">
            <img
              src={item.img_url}
              className="w-full object-cover object-center aspect-video"
              alt=""
            />
            <div className="p-5 h-full bg-white dark:bg-neutral-800 ">

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.name}
              </h3>
              {
                item.description &&
              <p className="text-xs font-semibold text-gray-700 dark:text-gray-400">
                {item.description}
              </p>
              }
              <p className="md:text-sm text-xs  text-gray-700 dark:text-gray-400">
                {item.stack?.map((stack) => (
                  <span key={stack}>{stack}, </span>
                ))}
              </p>
                     
              <div className="flex flex-row gap-3 text-sm mt-2  text-gray-700 dark:text-gray-400">
                {item.project_url && (
                  <a href={item.project_url} rel="noreferrer"  target="_blank">
                    <FaLink />
                  </a>
                )}
                {
                  item.video_url &&
                  <a href={item.video_url} rel="noreferrer" target="_blank">
                  <FaYoutube />
                </a>
                }
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
