export const personalInfo = {
  name: "Dolly Kushwaha",
  nameFirst: "Dolly",
  nameLast: "Kushwaha",
  tagline: "Full-Stack Developer | Data Analytics | Problem Solver",
  subtitle: "CSE Student · Developer · Problem Solver",
  bio: "Computer Science undergraduate with hands-on experience building full-stack web applications using React.js, Node.js, Express.js, MongoDB, and REST APIs. Solved 200+ Data Structures & Algorithms problems across LeetCode and CodeChef. Currently exploring data analytics and LLM-based application development.",
  email: "dollykush1804@gmail.com",
  phone: "+91 8318878783",
  linkedin: "https://linkedin.com/in/dolly-kushwaa",
  github: "https://github.com/dollykush",
  codolio: "https://codolio.com",
  location: "Lucknow, India",
  resumeUrl: "/resume.pdf",
};

export const education = [
  {
    institution: "Institute of Engineering & Technology",
    degree: "Bachelor of Technology in Computer Science & Engineering",
    period: "2025 – 2028",
    location: "Lucknow, India",
    grade: "CGPA: 8.4 / 10",
    type: "B.Tech",
  },
  {
    institution: "Government Polytechnic Jhansi",
    degree: "Diploma in Mechanical Engineering",
    period: "2021 – 2023",
    location: "Jhansi, India",
    grade: "Percentage: 74%",
    type: "Diploma",
    note: "Lateral Entry to B.Tech CSE",
  },
];

export const skills = [
  {
    category: "Languages",
    icon: "code",
    items: ["C++", "C", "Java", "Python", "JavaScript", "SQL"],
  },
  {
    category: "Web Development",
    icon: "globe",
    items: ["React.js", "Node.js", "Express.js", "Next.js", "REST APIs", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Data Analytics",
    icon: "bar-chart",
    items: ["Power BI", "DAX", "Excel"],
  },
  {
    category: "Databases",
    icon: "database",
    items: ["MongoDB", "MySQL"],
  },
  {
    category: "Core CS",
    icon: "cpu",
    items: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks"],
  },
  {
    category: "Developer Tools",
    icon: "tool",
    items: ["Git", "GitHub", "VS Code"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Employee Presence Analytics",
    year: "2026",
    tech: ["Power BI", "Excel", "SQL"],
    color: "#a3e635",
    description:
      "An interactive employee attendance and presence analytics dashboard built with Power BI to monitor attendance, WFH, leave, and presence trends.",
    bullets: [
      "Developed an interactive attendance & presence analytics dashboard in Power BI to monitor WFH, leave, and presence trends",
      "Cleaned and transformed employee attendance data using Excel and SQL, handling missing values and inconsistent records",
      "Created DAX measures and KPIs for Presence %, WFH %, leave trends, employee-level attendance, and overall workforce metrics",
      "Designed interactive visualizations with filters and slicers for analysis across employees, dates, and work modes",
    ],
    github: null,
    live: null,
    preview: "dashboard",
  },
  {
    id: 2,
    title: "CollabRoom",
    year: "2026",
    tech: ["Next.js", "TypeScript", "Clerk", "GetStream", "Tailwind CSS"],
    color: "#818cf8",
    description:
      "A real-time video conferencing web application enabling users to create, join, and manage virtual meetings.",
    bullets: [
      "Built a real-time video conferencing web app using Next.js and TypeScript, enabling users to create, join, and manage meetings",
      "Implemented user authentication and authorization using Clerk for secure account and session management",
      "Integrated GetStream to provide real-time meeting functionality including video calls, participant management, and screen sharing",
      "Developed features for instant meetings, scheduled meetings, meeting links, and responsive meeting interfaces using Tailwind CSS",
    ],
    github: null,
    live: null,
    preview: "webapp",
  },
  {
    id: 3,
    title: "Zerodha Clone",
    year: "2026",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    color: "#fb923c",
    description:
      "A responsive stock trading platform clone inspired by Zerodha, implementing user authentication, dashboard, portfolio, and stock-related functionality.",
    bullets: [
      "Developed a responsive stock trading platform clone inspired by Zerodha, implementing user authentication and dashboard",
      "Built reusable frontend components using React.js and implemented RESTful APIs using Node.js and Express.js",
      "Integrated MongoDB for storing user, portfolio, and transaction-related data with CRUD operations",
      "Implemented secure authentication and authorization mechanisms to manage user access and application functionality",
    ],
    github: null,
    live: null,
    preview: "trading",
  },
];

export const journey = [
  {
    year: "2021",
    event: "Diploma in Mechanical Engineering",
    detail: "Started at Govt. Polytechnic Jhansi",
    status: "done",
  },
  {
    year: "2023",
    event: "Diploma Completed — 74%",
    detail: "Pivoted to Computer Science",
    status: "done",
  },
  {
    year: "2025",
    event: "Lateral Entry into B.Tech CSE",
    detail: "Institute of Engineering & Technology, Lucknow",
    status: "done",
  },
  {
    year: "2025–26",
    event: "Full-Stack + Data Analytics",
    detail: "Built projects with React, Node.js, Power BI",
    status: "current",
  },
  {
    year: "2028",
    event: "B.Tech Graduation",
    detail: "Currently CGPA: 8.4 / 10",
    status: "future",
  },
];
