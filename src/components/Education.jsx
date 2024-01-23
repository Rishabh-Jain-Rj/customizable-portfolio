import React from "react";

const Education = ({ qualifications }) => {
  return (
    <div className="my-5">
      <div className="inline-block mb-4">
        <h3 className="md:text-2xl text-xl px-5 py-2 font-bold border-s-4 border-primary heading text-primary">
          Education
        </h3>
      </div>
      <div className="flex flex-col gap-4">
        {qualifications?.map((item, index) => (
          <div className="card p-5 h-full bg-white dark:bg-neutral-800  rounded-lg cursor-pointer  overflow-hidden shadow-sm" key={index}>

            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              {item.institute_name}
            </h3>
            <p className="md:text-sm text-md my-1  text-gray-700 dark:text-gray-400">
              {item.course_name}
              <span className="border-s ms-2 ps-2  border-gray-700 dark:border-gray-400">
                {item.result}
              </span>
            </p>
            <p className="text-xs text-gray-700 dark:text-gray-400">
              {item.start_year} - {item.end_year}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
