import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt,FaSearch, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';
import { FaBrain, FaChartLine } from 'react-icons/fa'

import profile from '../assets/profile.jpg';
import myimg from '../assets/myimg.jpg';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.png';
import projectImg3 from '../assets/project3.png';
import projectImg4 from '../assets/project4.png';
import projectImg5 from '../assets/project5.png';
import projectImg6 from '../assets/project6.avif';


export const assets = {
    profile,myimg
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', 'Vue.js', 'JavaScript', 'Tailwind CSS', 'HTML5 & CSS3']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express', 'Django', 'php']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'Oracle', 'MySQL', 'Firebase']
  },
  {
    title: 'Data Science & Analytics',
    icon: FaChartLine,
    description: 'Analyzing data and extracting insights using statistical and ML techniques.',
    tags: ['Python', 'Pandas', 'NumPy', 'Data Visualization']
  },

  {
    title: 'AI & Generative AI',
    icon: FaBrain,
    description: 'Building intelligent systems using machine learning and generative AI models.',
    tags: ['Machine Learning', 'Deep Learning', 'LLMs', 'GenAI',"RAG", "Langchain"]
  },

  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'Webpack', 'Figma']
  }
];



export const projects = [
  {
    title: "Automated Professor Profile Search using AI",
    description:
      "An AI-powered application that automatically searches, extracts, and organizes professor profiles from multiple academic sources using NLP and intelligent data processing.",
    image: projectImg3,
    tech: ["Python","Pandas", "NLP","Ollama", "Web Scraping","Spacy","Transformers", "REST APIs","MySql"],
    icons: [FaReact],
    demo: "#",
    code: "https://github.com/rupanjali-bharti/Automated-Professor-Profile-Search-using-Ai.git",
  },
  {
    title: "Multi-Model Document Intelligence RAG QA System",
    description: "RAG system designed to answer questions from real-world, information-rich documents such as IMF Article IV reports, policy papers, and financial disclosures.",
    image: projectImg5,
    tech: ["Python","Multi-Modal RAG","LangChain","Hugging Face Inference API","Streamlit","Sentence-Transformers"],
    icons: [FaReact, FaNodeJs, FaDatabase ],
    demo: "#",
    code: "https://github.com/rupanjali-bharti/Multi-model-Document-Intelligence-RAG-QA-system-",
  },
  {
    title: "AI-Powered LinkedIn Post Generator",
    description: "A Generative AI-based application that creates professional, structured LinkedIn posts using prompt engineering and large language models.",
    image: projectImg4,
    tech: ["Streamlit", "LangChain", "Google Gemini API", "Python"],
    icons:  [FaRobot, FaBrain],
    demo: "https://rupanjali-bharti-ai-powered-linkedin-post--postgenerator-ern5ax.streamlit.app/",
    code: "https://github.com/rupanjali-bharti/AI-Powered-LinkedIn-Post-Generator-Streamlit-Gemini-LangChain-",
  },
  {
    title: "Recipe App",
    description: "A full-stack recipe application where users can browse, add, and manage recipes and with CRUD functionality.",
    image: projectImg2,
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    icons: [FaReact, FaNodeJs, FaDatabase ],
    demo: "https://food-lovers-spot.vercel.app/",
    code: "https://github.com/rupanjali-bharti/FoodLovers",
  },

  {
    title: "News App",
    description: "A web-based news application that fetches and displays the latest headlines with category-wise filtering and a clean user interface.",
    image: projectImg1,
    tech: ["React", "News API", "Tailwind CSS"],
    icons: [FaReact, FaFire],
    demo: "#",
    code: "https://github.com/rupanjali-bharti/NewsApp",
  }
];


/* orignal work data 
export const workData = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    duration: "2020 - Present",
    description:
      "Leading frontend development for enterprise clients, implementing modern frameworks, and mentoring junior developers.",
    color: "purple"
  },
  {
    role: "Web Developer",
    company: "Digital Solutions LLC",
    duration: "2018 - 2020",
    description:
      "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
    color: "pink"
  },
  {
    role: "Junior Developer",
    company: "StartUp Ventures",
    duration: "2016 - 2018",
    description:
      "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
    color: "blue"
  }
];
*/

export const workData = [
  {
    role: "Project Trainee",
    company: "Samsung PRISM – Samsung R&D India",
    duration: "Jun 2025 - Present",
    location: "Bengaluru, India",
    mode: "Industry–Academia Collaboration",
    type: "experience",
    description:
      "Worked on the Worklet ‘Automated Professor Profile Management’, building a system to search, extract, and manage academic profiles from multiple sources. Used LLM-based intelligent querying along with full-stack development to automate profile maintenance and improve faculty discovery efficiency.",
    tech: [
      "Generative AI",
      "LLMs",
      "NLP",
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Web Scraping"
    ],
    impact: "Reduced manual faculty search and profile maintenance effort by ~80% through automation.",
    color: "indigo"
  },

  {
    role: "Computer Science Student",
    company: "B.Tech – Computer Science & Engineering",
    duration: "2023 - Present",
    location: "India",
    mode: "Full-time",
    type: "education",
    description:
      "Pursuing a B.Tech in Computer Science & Engineering with a strong foundation in data structures, algorithms, operating systems, and database management systems.",
    tech: [
      "Data Structures",
      "Algorithms",
      "Operating Systems",
      "DBMS",
      "SQL"
    ],
    color: "purple"
  },

  {
    role: "Self-Learning & Skill Development",
    company: "Online Platforms & Practice",
    duration: "2022 - Present",
    location: "Remote",
    mode: "Self-paced",
    type: "learning",
    description:
      "Actively upskilling through online courses and hands-on practice. Strengthening problem-solving abilities with DSA, SQL, and mini-projects while continuously exploring new technologies.",
    tech: [
      "Problem Solving",
      "DSA",
      "SQL",
      "JavaScript",
      "React.js",
      "AI & ML Basics"
    ],
    color: "blue"
  }
];


