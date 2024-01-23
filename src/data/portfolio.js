import project1 from "../../src/assets/project1.png";
import project2 from "../../src/assets/project2.png";

const data = {
  about: {
    profile_url:
      "https://www.coolprogrammingprojects.live/static/media/logo.5837d8bfc873e6cc3f01.png",
    name: "Rishabh Jain RJ",
    description: "MERN Stack Developer",
  },
  contact: {
    linkedin: "https://www.linkedin.com/in/rishabh-jain-873a29243/",
    instagram: "https://www.instagram.com/rishabhjain515/",
    youtube: "https://www.youtube.com/@CoolProgrammingProjectsRJ",
    email: "rishabhjainmorena@gmail.com",
    website: "https://coolprogrammingprojects.live",
  },
  skills: [
    {
      name:"HTML",
      color:"#f97316",
    },
    {
      name:"CSS",
      color:"#06b6d4",
    },
    {
      name:"Javascript",
      color:"#eab308",
    },
    {
      name:"Boostrap",
      color:"#8713F2",
    },
    {
      name:"Tailwind",
      color:"#38BDF8",
    },
    {
      name:"React Js",
      color:"#5ED3F3",
    },
    {
      name:"Node Js",
      color:"#85B557",
    },
    {
      name:"Express Js",
      color:"#78716c",
    },
    {
      name:"MongoDB",
      color:"#00ED64",
    },
    {
      name:"AWS",
      color:"#EC7211",
    },
  ],
  projects: [
    {
      name: "Ecommerce + Portfolio",
      description:"",
      stack: ["Nodejs", "ReactJs", "MongoDB", "Razorpay"],
      img_url: project1, 
      project_url: "https://www.coolprogrammingprojects.live/",
      video_url: "https://www.youtube.com/watch?v=0cAPHh-_uD8",
    },
    {
      name: "Portfolio Generator",
      stack: ["Html", "Css", "Javascript", "React Js"],
      img_url: project2,
      project_url:
        "https://www.coolprogrammingprojects.live/portfolio-generator",
      video_url: "https://www.youtube.com/watch?v=0cAPHh-_uD8",
    },
  ],
  qualifications: [
    {
      institute_name: "Shriram College Of Engg. & Management",
      course_name: "B.tech",
      result: "9 CGPA",
      start_year: "2019",
      end_year: "2023",
    },
    {
      institute_name: "Mother Teresa Convent H.S. School",
      course_name: "Class 12th",
      result: "86.4%",
      start_year: "2018",
      end_year: "2019",
    },
    {
      institute_name: "Tulika Convent H.S. School",
      course_name: "Class 10th",
      result: "85.5%",
      start_year: "2016",
      end_year: "2017",
    },
  ],
  experiences: [
    {
      job_title: "MERN Stack Developer",
      company_name: "Virtusa Software System",
      start_date: "Jan 2023",
      end_date: "Present",
      location: "United States",
      mode: "Remote",
    },
  ],
};
export default data;
