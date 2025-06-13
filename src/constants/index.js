// data.js

const navLinks = [
  { name: "Work", link: "#work" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Testimonials", link: "#testimonials" },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 4, suffix: "+", label: "Months of Experience" },
  { value: 50, suffix: "+", label: "Leet Problems" },
  { value: 40, suffix: "+", label: "Completed Projects" },
  { value: 400, suffix: "+", label: "Git Commits" },
];

const logoIconsList = [
  { imgPath: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" },
  { imgPath: "https://logospng.org/download/css-3/logo-css-3-2048.png" },
  { imgPath: "https://blog.getbootstrap.com/assets/brand/bootstrap-logo-shadow.png" },
  { imgPath: "https://static.vecteezy.com/system/resources/previews/027/127/560/original/javascript-logo-javascript-icon-transparent-free-png.png" },
  { imgPath: "https://images.icon-icons.com/2699/PNG/512/reactjs_logo_icon_168875.png" },
  { imgPath: "https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-png-transparent.png" },
  { imgPath: "https://logowik.com/content/uploads/images/express-js1720895493.logowik.com.webp" },
  { imgPath: "https://pluspng.com/img-png/logo-mongodb-png-mongodb-logo-png-400.png" },
  { imgPath: "https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png" },
  { imgPath: "https://pluspng.com/img-png/firebase-logo-png-firebase-google-icon-512x512.png" },
  { imgPath: "https://pngimg.com/uploads/github/github_PNG28.png" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Commitment to Quality",
    desc: "Ensuring excellence in every task executed.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Effective Communication",
    desc: "Always clear and honest updates during the process.",
  },
  {
    imgPath: "/images/time.png",
    title: "Timely Project Completion",
    desc: "Meeting deadlines without compromising quality.",
  },
];

const techStackImgs = [
  { name: "React Developer", imgPath: "/images/logos/react.png" },
  { name: "Data Analtics", imgPath: "/images/logos/python.svg" },
  { name: "Backend Developer", imgPath: "/images/logos/node.png" },
  { name: "Interactive Developer", imgPath: "/images/logos/three.png" },
  { name: "Project Manager", imgPath: "/images/logos/git.svg" },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Dhinesh excels at transforming complex data into clear, insightful visualizations using Excel, enabling better business decisions.",
    imgPath: "/images/excel-exp.png",
    logoPath: "/images/ex-logo.png",
    title: "Excel Data Analyst & Visualization Specialist",
    date: "May 2021 - July 2021",
    responsibilities: [
      "Created basic Excel charts for business analytics.",
      "Analyzed large datasets and presented key insights with visual tools.",
    ],
  },
  {
    review:
      "Dhinesh is skilled in React.js, building dynamic, user-friendly web applications with modern frontend technologies.",
    imgPath: "/images/react-exp.png",
    logoPath: "/images/react-2.png",
    title: "Frontend Developer (React.js)",
    date: "August 2023 - November 2023",
    responsibilities: [
      "Developed responsive and interactive user interfaces with React.js and Redux.",
      "Integrated REST APIs to connect frontend with backend services smoothly.",
      "Worked closely with design teams to ensure pixel-perfect UI implementations.",
    ],
  },
];

// const expCard = [
//   {
//     review:
//       "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
//     imgPath: "/images/excel-exp.png",
//     logoPath: "/images/ex-logo.png",
//     title: "Frontend Developer",
//     date: "January 2023 - Present",
//     responsibilities: [
//       "Developed and maintained user-facing features for the Hostinger website.",
//       "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
//       "Optimized web applications for maximum speed and scalability.",
//     ],
//   },
//   {
//     review:
//       "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
//     imgPath: "/images/exp2.png",
//     logoPath: "/images/logo2.png",
//     title: "Full Stack Developer",
//     date: "June 2020 - December 2023",
//     responsibilities: [
//       "Led the development of Docker's web applications, focusing on scalability.",
//       "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
//       "Contributed to open-source projects that were used with the Docker ecosystem.",
//     ],
//   },
//   {
//     review:
//       "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
//     imgPath: "/images/exp3.png",
//     logoPath: "/images/logo3.png",
//     title: "React Native Developer",
//     date: "March 2019 - May 2020",
//     responsibilities: [
//       "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
//       "Improved app performance and user experience through code optimization and testing.",
//       "Coordinated with the product team to implement features based on feedback.",
//     ],
//   },
// ];

const expLogos = [
  { name: "logo1", imgPath: "/images/excel-exp.png" },
  { name: "logo2", imgPath: "/images/react-1.png" },
  { name: "logo3", imgPath: "/images/react-2.png" },
];

const testimonials = [
  {
    name: "DhanaSekar K",
    mentions: "@DhanaSekar",
    review:
      "Dhinesh transformed our complex data into clear, actionable insights using Excel visualizations. His attention to detail helped our team make better decisions quickly.",
    imgPath: "/images/myCli-1.png",
  },
  {
    name: "Prabhu Hari",
    mentions: "@prabhu666",
    review:
      "Working with Dhinesh was a great experience. He developed a modern, responsive React.js frontend that improved our website's usability and performance.",
    imgPath: "/images/myCli-2.png",
  },
  // {
  //   name: "Ganesan K",
  //   mentions: "@ganeshan",
  //   review:
  //     "Dhinesh's professionalism and dedication stood out throughout the project. His expertise in React and data visualization helped elevate our platform to the next level.",
  //   imgPath: "/images/client2.png",
  // },
  {
    name: "Vaishnavi R",
    mentions: "@vaish333",
    review:
      "Dhinesh revamped our outdated website with clean, efficient React code, making the site modern and easy to navigate. Excellent work and communication.",
    imgPath: "/images/myCli-3.jpg",
  },
  {
    name: "Nisha K",
    mentions: "@nisha",
    review:
      "Dhinesh delivered scalable and robust frontend solutions with React. Our user engagement increased significantly after his work. Highly recommended for web projects.",
    imgPath: "/images/myCli-4.png",
  },
  {
    name: "Rohit G",
    mentions: "@rohit",
    review:
      "Dhinesh understood our project needs perfectly and combined his Excel and React skills to deliver a seamless experience that exceeded expectations.",
    imgPath: "/images/myCli-5.png",
  },
];

const socialImgs = [
  { name: "insta", imgPath: "/images/insta.png" },
  { name: "fb", imgPath: "/images/fb.png" },
  { name: "x", imgPath: "/images/x.png" },
  { name: "linkedin", imgPath: "/images/linkedin.png" },
];

export {
  navLinks,
  words,
  counterItems,
  logoIconsList,
  abilities,
  techStackImgs,
  techStackIcons,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
};
