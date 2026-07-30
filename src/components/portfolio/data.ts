import certNlp from "@/assets/cert-nlp.jpeg.asset.json";
import certSql from "@/assets/cert-sql.jpeg.asset.json";
import certExcel from "@/assets/cert-excel.jpeg.asset.json";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export const SKILLS = [
  { name: "Python", level: 89 },
  { name: "HTML & CSS", level: 86 },
  { name: "Java", level: 75 },
  { name: "JavaScript", level: 78 },
  { name: "Machine Learning", level: 82 },
  { name: "SQL", level: 80 },
];

export const SKILL_TAGS = [
  "Python",
  "Java",
  "JavaScript",
  "SQL",
  "Git & GitHub",
  "React",
  "Machine Learning",
  "Artificial Intelligence",
  "OpenCV",
  "Computer Vision",
  "Problem Solving",
  "HTML & CSS",
];

export const EDUCATION = [
  {
    degree: "Bachelor of Technology",
    field: "Artificial Intelligence and Machine Learning",
    college: "Vemu Institute of Technology",
    period: "3rd Year — Ongoing",
    score: "CGPA 9.5",
  },
  {
    degree: "Diploma",
    field: "Computer Engineering",
    college: "Vemu Institute of Technology",
    period: "Completed",
    score: "92%",
  },
  {
    degree: "SSC (10th Standard)",
    field: "Secondary School Education",
    college: "Govt High School, Pakala",
    period: "2021 — 2022",
    score: "87%",
  },
];

export const SOCIAL = {
  github: "https://github.com/Dilliprasanna143",
  linkedin: "https://www.linkedin.com/in/dilliprasanna-mulavagila",
};

export const PROJECTS = [
  {
    title: "Face Recognition and Detection System",
    subtitle: "Diploma Major Project",
    description:
      "Real-time face recognition and detection system built with Python and OpenCV, capable of detecting and recognizing human faces through a webcam.",
    tech: ["Python", "OpenCV", "NumPy", "Haar Cascade"],
    features: [
      "Real-time face detection",
      "Face recognition",
      "User identification",
      "Webcam integration",
      "High accuracy",
    ],
    link: null as string | null,
  },
  {
    title: "Department Library Management System",
    subtitle: "Full Stack Web Application",
    description:
      "A complete library platform with role-based access, book cataloguing and issue/return workflows for students and staff.",
    tech: ["React", "Node.js", "MongoDB", "HTML", "CSS", "JavaScript"],
    features: [
      "Role-based authentication",
      "Book management",
      "Student dashboard",
      "Issue and return management",
      "Responsive UI",
    ],
    link: "https://library-front-it9u.onrender.com",
  },
  {
    title: "Image Processing using Python",
    subtitle: "Computer Vision Toolkit",
    description:
      "A collection of classical computer vision pipelines exploring detection, segmentation and feature extraction techniques.",
    tech: ["Python", "OpenCV", "NumPy"],
    features: [
      "Face Detection",
      "Edge Detection",
      "Image Segmentation",
      "Histogram Equalization",
      "ORB Feature Detection",
    ],
    link: null as string | null,
  },
];

export const CERTIFICATE_IMAGES = [
  {
    title: "Introduction to Natural Language Processing",
    issuer: "Infosys Springboard",
    date: "June 16, 2026",
    url: certNlp.url,
  },
  {
    title: "Introduction to SQL",
    issuer: "Simplilearn SkillUp",
    date: "29th May 2026",
    url: certSql.url,
  },
  {
    title: "Introduction to MS Excel",
    issuer: "Microsoft × Simplilearn SkillUp",
    date: "22nd June 2026",
    url: certExcel.url,
  },
];

export const CERTIFICATE_LIST = [
  "Python Programming",
  "Java Programming",
  "HTML & CSS",
  "Artificial Intelligence Fundamentals",
  "Machine Learning Fundamentals",
  "Database Management Systems",
  "Web Development",
];

export const ACHIEVEMENTS = [
  "Diploma in Computer Engineering — 92%",
  "Current B.Tech CGPA — 9.5",
  "Successfully completed multiple software development projects",
  "Strong interest in Artificial Intelligence and Machine Learning",
];

export const STRENGTHS = [
  "Problem Solving",
  "Leadership",
  "Critical Thinking",
  "Quick Learner",
  "Team Collaboration",
  "Adaptability",
  "Time Management",
  "Continuous Learning",
  "Communication Skills",
];

export const CONTACT = {
  phone: "+91 8904075250",
  email: "dilliprasannamulavagila@gmail.com",
  location: "Andhra Pradesh, India",
};
