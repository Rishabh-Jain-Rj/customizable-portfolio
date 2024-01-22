import project1 from '../../src/assets/project1.png'
import project2 from '../../src/assets/project2.png'

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
  skills:["HTML","CSS","Javascript","ReactJs","Tailwind Css","Bootstrap","Nodejs","Express js","MongoDB"],
  projects:[
    {
      name:"Ecommerce + Portfolio",
      stack:["Nodejs","ReactJs","MongoDB","Razorpay",],
      img_url:project1 ,//imported from local folder
      project_url:"https://www.coolprogrammingprojects.live/",
      video_url:"https://www.youtube.com/watch?v=0cAPHh-_uD8",
    },
    {
      name:"Portfolio Generator",
      stack:["Html","Css", "Javascript","React Js"],
      img_url:project2,
      project_url:"https://www.coolprogrammingprojects.live/portfolio-generator",
      video_url:"https://www.youtube.com/watch?v=0cAPHh-_uD8",
    },

  ],
  qualifications:[
    {
      institute_name:"Shriram College Of Engg. & Management",
      course_name:"B.tech",
      result:"9 CGPA",
      start_year:"2019",
      end_year:"2023",
    },
    {
      institute_name:"Mother Teresa Convent H.S. School",
      course_name:"Class 12th",
      result:"86.4%",
      start_year:"2018",
      end_year:"2019",
    },
    {
      institute_name:"Tulika Convent H.S. School",
      course_name:"Class 10th",
      result:"85.5%",
      start_year:"2016",
      end_year:"2017",
    }
  ],
  experiences:[
    {
      job_title:"MERN Stack Developer",
      company_name:"Virtusa Software System",
      start_date:"Jan 2023",
      end_date:"Present",
      location:"United States",
      mode:"Remote",
    }
  ]
};
export default data;
