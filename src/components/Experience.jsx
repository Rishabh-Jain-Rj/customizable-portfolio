import React from "react";

const Experience = ({ experiences }) => {
  return (
    <div>
      <div className="inline-block mb-4">
        <h3 className="md:text-2xl dark:border-secondary dark:text-secondary text-xl px-5 py-2 font-bold border-s-4 border-primary heading text-primary">
          Experiences
        </h3>
      </div>
      <div className="flex flex-col gap-5 ">
        {experiences?.map((item, index) => (
          <div key={index} className="card p-5 h-full bg-white dark:bg-neutral-800  rounded-lg cursor-pointer  overflow-hidden shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              {item.job_title}
            </h3>
            <h4 className="md:text-sm text-md  my-1 text-gray-700 dark:text-gray-400">
              {item.company_name}
            </h4>
            <p className="text-xs text-gray-700 my-1 dark:text-gray-400">
              {item.start_date} - {item.end_date}
            </p>
            <p className="text-xs my-1  text-gray-700 dark:text-gray-400">
              {item.location}
              <span className="border-s ms-2 ps-2  border-gray-800 dark:border-gray-200">
                {item.mode}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
