/* eslint-disable no-unused-vars */
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    carrent,
    jobit,
    tripguide,
    threejs,
    truminds,
    parsec,
    yif,
    careerbolt,
    c,
    python,
    java,
    mysql,
    app,
    soi,
    ros,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Competitive Coder",
      icon: backend,
    },
    {
      title: "Android Developer",
      icon: mobile,
    },
    {
      title: "UI-UX Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "C++",
      icon: c,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
  ];
  
  const experiences = [
    {
      title: "Software Development Engineer",
      company_name: "Truminds Software Solutions",
      icon: truminds,
      iconBg: "#E6DEDD",
      date: "September 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Technical Team Member",
      company_name: "CareerBolt (Early Stage Startup)",
      icon: careerbolt,
      iconBg: "#E6DEDD",
      date: "January 2023 - August 2023",
      points: [
        "Developed frontend and user-centric website contributing to an early-stage startup, driving efficiency by 37%.",
        "Develping the Technical aspects like Web Design, Web Functionality, UI-UX, etc for the products offered",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      ],
    },
    {
      title: "Utilities and Technical Lead",
      company_name: "PARSEC (TechFest IIT Dharwad)",
      icon: parsec,
      iconBg: "#E6DEDD",
      date: "January 2022 - March 2022",
      points: [
        "Lead a team of 30 students for managing utilites for about 2500 students and 22 lakhs of sponsorship.",
        "Managed the Technical aspects of various events in the Techfest",
        "Marketed the event over 200 colleges including prime Institutes like IITs, NITs, IIMs, etc.",
        "Collaborated and led different departments with a total of 40 team members for operations and conduction of the event",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Youth India Foundation",
      icon: yif,
      iconBg: "#E6DEDD",
      date: "May 2021 - August 2021",
      points: [
        "Designing the entire Frontend and User Design of company’s mental health program website",
        "Designing the entire Frontend and UI of company’s mental health program website",
        "Technologies Used: ReactJs, MDBootstrap, Bootstrap, CSS, Material UI, Javascript,",
        "Participating in code reviews and providing constructive feedback",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "Summer of Innovation",
      description:
        "Web-based platform that allows students to participate in a summer fest giving information about events, providing event timelines and certificates through the portal", 
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "react-bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "API + javascript",
          color: "pink-text-gradient",
        },
      ],
      image: soi,
      source_code_link: "https://github.com/oss2019/soi",
    },
    {
      name: "ROS Navigation System",
      description:
        "ROS and Image Detection based UAV and UGV navigation model using OpenCV and various other python libraries. It also had other ML models for better naigviation",
      tags: [
        {
          name: "OpenCV",
          color: "blue-text-gradient",
        },
        {
          name: "AI",
          color: "green-text-gradient",
        },
        {
          name: "Machine Learning",
          color: "pink-text-gradient",
        },
      ],
      image: ros,
      source_code_link: "https://github.com/saurabh021120/MP_DR_T18",
    },
    {
      name: "Weather Detection App",
      description:
        "Android application that enables users to see what is the weather based on the location they enter. Made using Java, Android Studio and OpenWeather API.",
      tags: [
        {
          name: "Andriod",
          color: "blue-text-gradient",
        },
        {
          name: "Java",
          color: "green-text-gradient",
        },
        {
          name: "API",
          color: "pink-text-gradient",
        },
      ],
      image: app,
      source_code_link: "https://drive.google.com/file/d/1HGecte_bs8RnD3r2hbjkHgeoBedi222Z/view",
    },
  ];
  
  export { services, technologies, experiences, projects };