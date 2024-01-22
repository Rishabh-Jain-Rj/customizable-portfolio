import React from "react";
const colors = ["green", "yellow", "red", "cyan"];
const Skills = ({ skills }) => {
  return (
    <>
      <div>
        <div className="inline-block mb-4 ">
          <h3 className="md:text-2xl text-xl px-5 py-2 font-bold border-s-4 border-primary heading text-primary">
            What I Know
          </h3>
        </div>
        {skills && (
          <div className=" card w-full shadow-sm  text-center bg-white dark:bg-neutral-800 p-5 rounded-lg flex flex-wrap gap-3 justify-center">
            {/* {
              skills.items.map((skill)=>(
          <span className={`border rounded-sm shadow-md border-${skill.color}-500 px-2 py-1`}>
            {skill.name}
            </span>
              ))
            } */}
            <span className="border rounded-sm shadow-md border-orange-500 px-2 py-1">
              HTML
            </span>
            <span className="border rounded-sm shadow-md border-cyan-500 px-2 py-1">
              CSS
            </span>
            <span className="border rounded-sm shadow-md border-green-500 px-2 py-1">
              Javascript
            </span>
            <span className="border rounded-sm shadow-md border-blue-500 px-2 py-1">
              React Js
            </span>
            <span className="border rounded-sm shadow-md border-violet-500 px-2 py-1">
              Bootstrap
            </span>
            <span className="border rounded-sm shadow-md border-indigo-500 px-2 py-1">
              Tailwind
            </span>
            <span className="border rounded-sm shadow-md border-green-500 px-2 py-1">
              Nodejs
            </span>
            <span className="border rounded-sm shadow-md border-lime-500 px-2 py-1">
              expressjs
            </span>
            <span className="border rounded-sm shadow-md border-emerald-500 px-2 py-1">
              MonogDB
            </span>
            <span className="border rounded-sm shadow-md border-neutral-500 px-2 py-1">
              Git
            </span>
            <span className="border rounded-sm shadow-md border-gray-500 px-2 py-1">
              VS Code
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default Skills;
