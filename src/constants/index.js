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
    desc: "I focus on delivering high-standard results with attention to detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Clear Communication",
    desc: "I share regular updates and make sure everything is well understood.",
  },
  {
    imgPath: "/images/time.png",
    title: "Punctual Delivery",
    desc: "I complete tasks on time without affecting the quality of work.",
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
    logoPath: "../../public/images/ex-logo.png",
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


const expLogos = [
  { name: "logo1", imgPath: "/images/excel-exp.png" },
  { name: "logo2", imgPath: "/images/react-1.png" },
  { name: "logo3", imgPath: "/images/react-2.png" },
];

const testimonials = [
  {
    name: "DhanaSekar K",
    mentions: "@DhanaSekar99",
    review:
      "Dhinesh transformed our complex data into clear, actionable insights using Excel visualizations. His attention to detail helped our team make better decisions quickly.",
  imgPath: "/images/client1.png",
  },
  {
    name: "Prabhu Hari S",
    mentions: "@prabhu666",
    review:
      "Working with Dhinesh was a great experience. He developed a modern, responsive React.js frontend that improved our website's usability and performance.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Ganesan K",
    mentions: "@ganeshan11",
    review:
      "Dhinesh's professionalism and dedication stood out throughout the project. His expertise in React and data visualization helped elevate our platform to the next level.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Vishnu R",
    mentions: "@vishnu333",
    review:
      "Dhinesh revamped our outdated website with clean, efficient React code, making the site modern and easy to navigate. Excellent work and communication.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Aravind S",
    mentions: "@aravind07",
    review:
      "Dhinesh delivered scalable and robust frontend solutions with React. Our user engagement increased significantly after his work. Highly recommended for web projects.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Rohit G",
    mentions: "@rohit684",
    review:
      "Dhinesh understood our project needs perfectly and combined his Excel and React skills to deliver a seamless experience that exceeded expectations.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [{ 
  name: "insta", 
  url:"https://www.instagram.com/_ms_dhinesh_/",
  imgPath: "/images/insta.png" },
  { name: "linkedin",
    url:"https://linkedin.com/in/dhineshkumar45",
    imgPath: "/images/linkedin.png" },
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
