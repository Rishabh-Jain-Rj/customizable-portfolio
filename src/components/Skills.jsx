import React from "react";
const Skills = ({ skills }) => {
  return (
    <>
      <div>
        <div className="inline-block mb-4 ">
          <h3 className="md:text-2xl dark:border-secondary dark:text-secondary text-xl px-5 py-2 font-bold border-s-4 border-primary heading text-primary">
            What I Know
          </h3>
        </div>
        {skills && (
          <div className=" card w-full shadow-sm  text-center bg-white dark:bg-neutral-800 p-5 rounded-lg flex flex-wrap gap-3 justify-center">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className={` rounded-lg shadow-md  px-2 py-1`}
                style={{ border: `1px solid ${skill.color}` }}
              >
                {skill.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Skills;
