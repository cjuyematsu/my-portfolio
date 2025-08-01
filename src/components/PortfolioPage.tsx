"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Github, ExternalLink, Mail, Linkedin, ChevronDown, Code2, Database, Hammer, Calendar, MapPin, GraduationCap, Briefcase, Folder, Globe, Users, LineChart, Chrome, Medal, BookOpen, DollarSign, Brain } from 'lucide-react';

const PlotTripLogo = () => (
  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m6.95 13.95c-.09-.16-.17-.3-.2-.38-.07-.15-.21-.61-.31-1.02s-.05-.79.12-.84.41.14.54.43c.08.17.23.43.38.68-.15.39-.32.77-.53 1.13M4 12c0-2.03.77-3.88 2.02-5.3.45.01 1.04.05 1.38.09.38.05.85-.05 1.05-.22.19-.17.57-.48.84-.69s.71-.63.99-.91c.21-.21.49-.57.73-.9.33-.04.66-.07 1-.07 1.6 0 3.1.48 4.35 1.3-.06.19-.11.65-.11 1.01s-.2 1-.44 1.41-.55.81-.67.88c-.13.07-.37.35-.54.63-.17.27-.46.37-.66.22s-.23-.49-.08-.74c.15-.26-.01-.55-.36-.65s-.9-.01-1.23.19c-.33.21-.9.72-1.27 1.14s-.75 1.03-.84 1.36 0 .65.22.71c.21.06.2.23-.03.36s-.6.34-.82.46-.43.57-.47.99c-.03.43-.33.75-.66.71s-.6.13-.6.38-.09.49-.2.53-.46.07-.78.07-.62.2-.67.46-.03.6.06.76.27.37.42.45c.14.09.46.17.7.19s.61-.1.82-.27.64-.4.96-.5c.32-.11.71-.11.85 0 .15.11.52.55.83.98s.65.58.76.32.07-.63-.09-.83-.08-.28.19-.18.56.44.63.76c.08.32.31.75.52.95s.55 0 .76-.45.53-1.19.71-1.64c.18-.46.45-.71.6-.56s.5.21.79.14.65-.11.8-.08.33.21.39.41-.32.42-.84.48l-.16.03-.46.09c-.58.23-1.02.73-1 1.1s.41.61.85.52.85-.04.91.12.01.47-.1.69c0 .01-.02.02-.03.03-.21.12-.42.23-.64.33-.13.03-.27.05-.4.05-.48 0-1.14-.02-1.48-.05-.33-.04-.83.05-1.1.18-.27.14-.82.2-1.23.14s-.84-.51-.97-1.01-.8-.81-1.5-.7c-.61.1-1.55.02-2.27-.16a7.96 7.96 0 0 1-2.4-5.7Z"/>
    <path d="M6.75 12.6c.01.05.1.09.19.08.09 0 .33.02.52.05.2.04.44.01.55-.05s.22-.23.25-.36a.47.47 0 0 0-.17-.43c-.12-.1-.17-.4-.1-.67s.18-.58.25-.68.08-.24.03-.3-.18-.11-.28-.11-.29.04-.42.1c-.13.05-.24.27-.24.47s.05.54.1.73c.06.2-.08.52-.3.71-.22.2-.39.4-.38.45Z"/>
    <path d="M6.69 11.96c.26-.19.45-.41.43-.5s-.08-.15-.15-.15-.24.03-.38.06-.31.19-.37.36c-.06.16-.08.36-.05.44s.27-.01.52-.2ZM15.1 7.04c.26.04.52.04.58 0s.03-.18-.08-.3c-.1-.12-.21-.4-.24-.62s-.03-.55 0-.72-.02-.33-.1-.36-.25.09-.38.27-.24.62-.24.99.21.71.47.75Z"/>
  </svg>
);

const LinkedInCheckerLogo = () => (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="m19,6h-4v-1c0-1.65-1.35-3-3-3s-3,1.35-3,3v1h-4c-1.1,0-2,.9-2,2v4c0,.55.45,1,1,1h2c.55,0,1,.45,1,1s-.45,1-1,1h-2c-.55,0-1,.45-1,1v4c0,1.1.9,2,2,2h14c1.1,0,2-.9,2-2v-12c0-1.1-.9-2-2-2Zm0,14H5v-3h1c1.65,0,3-1.35,3-3s-1.35-3-3-3h-1v-3h5c.55,0,1-.45,1-1v-2c0-.55.45-1,1-1s1,.45,1,1v2c0,.55.45,1,1,1h5v12Z"/>
    </svg>
);


const PortfolioWebsite = () => {
  const [activeSection, setActiveSection] = useState('about');

  const aboutInfo = {
    intro: "I am a Computer Science and Math major at Pomona College graduating in May 2026. I am passionate about building intuitive, data-driven applications and exploring with new technologies. I've led and contributed to several full-stack projects.",
    projects: "These include a roommate matching platform using clustering algorithms, a GitHub visualization tool that graphs commit activity over time, a reference checker chrome extension on LinkedIn, and a basketball data website. Most recently, I've been working on PlotTrip, an interactive travel visualizer plotting on a globe trips by car, plane, train, etc. while calculating total distance and tracking countries visited.",
    tech: "Through these projects I have used Supabase, React, TypeScript, Python, and machine learning frameworks like PyTorch, TensorFlow, and scikit-learn. I've worked with LSTMs, clustering models, sentiment analysis, and time-series forecasting, and I enjoy exploring the intersection of software engineering and AI/ML. I'm particularly interested in product-focused work where user experience and design come together to optimize software through ideation and iteration."
  };

  const education = {
    school: "Pomona College",
    location: "Claremont, CA",
    degree: "Bachelor of Arts - Computer Science and Mathematics",
    graduation: "May 2026",
    coursework: [
      "Algorithms", "Data Structures", "Database Systems",
      "Intro Machine Learning", "Machine Learning for Asset Management",
      "Discrete Math & Functional Programming", "Linear Algebra", 
      "Calculus III", "Combinatorial Mathematics", "Differential Equations",
      "Quantum Mechanics", "Intro Engineering Design"
    ],
    additionalEducation: [
      {
        school: "University of Washington",
        course: "CSE416: Intro to Machine Learning",
        duration: "Jun 2024 - Aug 2024",
        description: "Summer course focused on Python programming with scikit-learn, developing knowledge about basic machine learning structures and practices."
      }
    ]
  };

  const skills = {
    languages: ["Python", "Java", "JavaScript", "TypeScript", "HTML", "CSS", "Haskell", "LaTeX", "R", "Swift", "MATLAB"],
    frameworks: ["React", "Next.js", "Flask", "FastAPI", "Express.js"],
    databases: ["SQL", "PostgreSQL", "MongoDB", "Supabase"],
    tools: ["Docker", "GitHub", "Git", "AWS", "Chart.js", "Beautiful Soup", "OpenCV"],
    ml: ["Scikit-learn", "PyTorch", "TensorFlow", "Pandas", "NumPy", "Matplotlib", "Seaborn", "YOLOv8", "XGBoost"],
    techniques: [
      "Supervised/Unsupervised ML", "LSTM", "Random Forest", "k-means Clustering",
      "Hierarchical Clustering", "GMM", "ARIMA", "BERT", "Sentiment Analysis",
      "Time-Series Forecasting", "NLP", "Computer Vision", "Feature Engineering"
    ]
  };

  const projects = [
    {
      name: "PlotTrip",
      duration: "Current Project",
      description: [
        "Building an interactive travel visualizer that plots trips on a 3D globe",
        "Supports multiple transportation modes (car, plane, train) with distance calculations",
        "Tracks countries visited and provides comprehensive trip statistics and analytics"
      ],
      tech: ["React", "Three.js", "TypeScript", "Geospatial APIs"],
      icon: <Globe className="w-5 h-5" />,
      logo: <PlotTripLogo />
    },
    {
      name: "Hoops Data",
      duration: "May 2025 – July 2025",
      link: "https://hoopsdata.net/",
      description: [
        "Compiled career stats for all NBA players using Kaggle dataset of box scores",
        "Utilized BeautifulSoup to scrape additional online sources for complete database",
        "Built frontend with Next.js and hosted backend/database on Supabase",
        "Features include player comparison tool, all-time rankings, and trivia games"
      ],
      tech: ["Next.js", "Supabase", "TypeScript", "Beautiful Soup", "Tailwind CSS", "SQL"],
      icon: <LineChart className="w-5 h-5" />,
      logo: '/nbastatslogo.svg' 
    },
    {
      name: "LinkedIn Reference Checker",
      duration: "Chrome Extension",
      description: [
        "Developed Chrome extension for LinkedIn to streamline reference checking process",
        "Automated verification of professional connections and endorsements",
        "Improved recruitment workflow efficiency for hiring managers"
      ],
      tech: ["JavaScript", "Chrome APIs", "React", "Web Scraping"],
      icon: <Chrome className="w-5 h-5" />,
      logo: <LinkedInCheckerLogo />
    },
    {
      name: "ASPC Website",
      duration: "Dec 2024 – Present",
      link: "https://pomonastudents.org/",
      description: [
        "Developing and maintaining the official website for Pomona College student government",
        "Building tools for academic planning and event management",
        "Implementing features to improve overall student experience"
      ],
      tech: ["Next.js", "TypeScript", "MongoDB", "Express.js"],
      icon: <BookOpen className="w-5 h-5" />,
      logo: '/ASPC_logo.png' 
    },
    {
      name: "GitTempo",
      duration: "Apr 2025 – May 2025",
      link: "https://gittempo.com/",
      description: [
        "Leveraged GitHub API to analyze commit patterns from public repositories",
        "Visualizes last 500 commits by contributor and recency",
        "Built with Next.js frontend and Chart.js for interactive data visualization"
      ],
      tech: ["Next.js", "Chart.js", "GitHub API", "JavaScript"],
      icon: <Github className="w-5 h-5" />,
      logo: '/gittempologo.png' 
    },
    {
      name: "p-RoomMatch",
      duration: "Sep 2024 – Dec 2024",
      description: [
        "Led team of 8 students across 5 colleges as Project Lead",
        "Built smart roommate-matching platform using AI clustering algorithms (k-means, hierarchical, GMM)",
        "Managed entire product lifecycle from concept through data collection to launch",
        "Ensured user alignment and data accuracy throughout development"
      ],
      tech: ["Python", "Scikit-learn", "Pandas", "Flask", "SQL", "HTML/CSS/JS"],
      icon: <Users className="w-5 h-5" />,
      logo: '/roommatchlogo.png' 
    },
    {
      name: "p-MarketForecast",
      duration: "Feb 2025 – May 2025",
      link: "https://p-marketforecast-website.vercel.app/",
      description: [
        "Led team of 6 students evaluating ML models for financial market analysis",
        "Implemented LSTM, Random Forest, ARIMA, BERT, and XGBoost models",
        "Built robust ETL pipeline using yFinance and NewsAPI",
        "Created comprehensive analysis of model effectiveness in complex financial environments"
      ],
      tech: ["Python", "TensorFlow", "PyTorch", "LSTM", "BERT", "XGBoost", "MATLAB"],
      icon: <DollarSign className="w-5 h-5" />,
      logo: '/marketlogo.png' 
    },
    {
      name: "p-NXTPlay",
      duration: "Feb 2024 – May 2024",
      description: [
        "Collaborated with team of 5 to build computer vision system for football analysis",
        "Implemented player tracking, team identification, and jersey number recognition",
        "Used YOLOv8 for object detection and OpenCV for video processing",
        "Provided real-time formation and play strategy analysis"
      ],
      tech: ["Python", "PyTorch", "YOLOv8", "OpenCV", "Pandas", "NumPy"],
      icon: <Medal className="w-5 h-5" />,
      logo: null
    },
  ];

  interface Role {
    position: string;
    duration: string;
    description: string[];
  }

  interface Experience {
    company: string;
    position?: string;
    duration?: string;
    description?: string[];
    roles?: Role[];
  }

  const experience: Experience[] = [
    {
      company: "Associated Students of Pomona College",
      roles: [
        {
          position: "Product Manager",
          duration: "May 2025 – Present",
          description: [
            "Acting as technical liaison between student government and development team",
            "Contributing directly to codebase to develop, test, and deploy new features",
            "Gathering and prioritizing student needs for platform improvements"
          ]
        },
        {
          position: "Software Developer",
          duration: "Dec 2024 – May 2025",
          description: [
            "Designed and developed web applications to improve student experience",
            "Built tools for academic planning and event management",
            "Maintained and optimized existing features based on user feedback"
          ]
        }
      ]
    },
    {
      company: "P-ai at the Claremont Colleges",
      position: "Project Lead / Software Engineer",
      duration: "Sep 2024 – May 2025",
      description: [
        "Led p-RoomMatch project with 8 students across 5 colleges",
        "Directed p-MarketForecast research project with team of 6 students",
        "Previously contributed to p-NXTPlay computer vision project for football analysis",
        "Managed full product lifecycles from ideation to deployment"
      ]
    },
    {
      company: "Acalynics",
      position: "Math, Physics, ACT/SAT Test Prep Tutor",
      duration: "Aug 2022 – Dec 2024",
      description: [
        "Provided weekly tutoring sessions to high school students",
        "Taught subjects ranging from basic to AP-level Math and Physics",
        "Specialized in ACT and SAT test preparation strategies"
      ]
    }
  ];

  const certifications = [
    {
      name: "Supervised Machine Learning: Regression and Classification",
      issuer: "Coursera",
      date: "Sep 2023",
      credentialId: "DT2HNGC2JMXB"
    }
  ];

  const navItems = [
    { id: 'about', label: 'About', icon: <Code2 className="w-4 h-4" /> },
    { id: 'education', label: 'Education', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'skills', label: 'Skills', icon: <Hammer className="w-4 h-4" /> },
    { id: 'projects', label: 'Projects', icon: <Folder className="w-4 h-4" /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase className="w-4 h-4" /> }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-sky-50">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Code2 className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">
                Cole Uyematsu
              </span>
            </div>
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="about" className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">
              Cole Uyematsu
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              CS & Math @ Pomona College &lsquo;26 | Full-Stack Developer
            </p>
            <div className="flex justify-center space-x-4 mb-12">
              <a 
                href="https://github.com/cjuyematsu" 
                className="p-3 bg-blue-100 rounded-lg hover:bg-blue-200 transition-all duration-200 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 text-blue-600" />
              </a>
              <a 
                href="https://www.linkedin.com/in/cole-uyematsu-94995a252/" 
                className="p-3 bg-blue-100 rounded-lg hover:bg-blue-200 transition-all duration-200 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-blue-600" />
              </a>
              <a 
                href="mailto:cjul2022@mymail.pomona.edu" 
                className="p-3 bg-blue-100 rounded-lg hover:bg-blue-200 transition-all duration-200 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-6 h-6 text-blue-600" />
              </a>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">{aboutInfo.intro}</p>
            <p className="text-lg">{aboutInfo.projects}</p>
            <p className="text-lg">{aboutInfo.tech}</p>
          </div>
          
          <div className="flex justify-center mt-12">
            <ChevronDown className="w-8 h-8 text-blue-600 animate-bounce" />
          </div>
        </div>
      </section>

      <section id="education" className="py-20 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{education.school}</h3>
                  <p className="text-blue-600 flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{education.location}</span>
                  </p>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <p className="text-gray-600 flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>Aug 2022 – {education.graduation}</span>
                  </p>
                </div>
              </div>
              <p className="text-xl text-gray-700 mb-6">{education.degree}</p>
              <div>
                <h4 className="text-lg font-semibold text-blue-600 mb-3">Relevant Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition-all duration-200"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {education.additionalEducation.map((edu, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{edu.school}</h3>
                  <p className="text-gray-600 text-sm">{edu.duration}</p>
                </div>
                <p className="text-lg text-blue-600 mb-2">{edu.course}</p>
                <p className="text-gray-700">{edu.description}</p>
              </div>
            ))}

            <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Certifications</h3>
              {certifications.map((cert, index) => (
                <div key={index} className="flex justify-between items-start">
                  <div>
                    <p className="text-lg font-semibold text-gray-800">{cert.name}</p>
                    <p className="text-gray-600">{cert.issuer} • Credential ID: {cert.credentialId}</p>
                  </div>
                  <p className="text-gray-600 text-sm">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-blue-600 mb-4 flex items-center space-x-2">
                <Code2 className="w-5 h-5" />
                <span>Languages</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-50 text-gray-700 rounded-md text-sm hover:bg-blue-100 transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-blue-600 mb-4 flex items-center space-x-2">
                <Database className="w-5 h-5" />
                <span>Databases & Tools</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {[...skills.databases, ...skills.tools].map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-50 text-gray-700 rounded-md text-sm hover:bg-blue-100 transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-blue-600 mb-4 flex items-center space-x-2">
                <Brain className="w-5 h-5" />
                <span>ML & Data Science</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.ml.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-50 text-gray-700 rounded-md text-sm hover:bg-blue-100 transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6 bg-white rounded-xl p-6 shadow-lg border border-blue-100">
            <h3 className="text-xl font-bold text-blue-600 mb-4">Advanced Techniques & Frameworks</h3>
            <div className="flex flex-wrap gap-2">
              {[...skills.frameworks, ...skills.techniques].map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-blue-50 text-gray-700 rounded-md text-sm hover:bg-blue-100 transition-all">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-[1.02]"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-3">
                    {project.logo ? (
                      typeof project.logo === 'string' ? (
                        <Image 
                          src={project.logo} 
                          alt={`${project.name} logo`}
                          width={32} 
                          height={32} 
                          className="object-contain rounded"
                        />
                      ) : (
                        <div className="w-8 h-8 text-gray-800">{project.logo}</div>
                      )
                    ) : (
                      project.icon
                    )}
                    <h3 className="text-2xl font-bold text-gray-800">{project.name}</h3>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition-all duration-200"
                      aria-label={`View ${project.name}`}
                    >
                      <ExternalLink className="w-5 h-5 text-blue-600" />
                    </a>
                  )}
                </div>
                <p className="text-gray-600 text-sm mb-4 flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{project.duration}</span>
                </p>
                <ul className="space-y-2 mb-4">
                  {project.description.map((desc, i) => (
                    <li key={i} className="text-gray-700 text-sm leading-relaxed flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{experience[0].company}</h3>
                <div className="space-y-6">
                  {experience[0].roles?.map((role, roleIndex) => (
                    <div key={roleIndex} className="border-l-4 border-blue-200 pl-4">
                      <div className="flex flex-col md:flex-row justify-between items-start mb-2">
                        <p className="text-xl font-semibold text-blue-600">{role.position}</p>
                        <p className="text-gray-600 flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{role.duration}</span>
                        </p>
                      </div>
                      <ul className="space-y-2">
                        {role.description.map((desc, i) => (
                          <li key={i} className="text-gray-700 flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {experience.slice(1).map((exp, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">{exp.company}</h3>
                    <p className="text-blue-600 text-lg">{exp.position}</p>
                  </div>
                  <p className="text-gray-600 flex items-center space-x-2 mt-4 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.duration}</span>
                  </p>
                </div>
                <ul className="space-y-2">
                  {exp.description?.map((desc, i) => (
                    <li key={i} className="text-gray-700 flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-blue-200 bg-white/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600">
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioWebsite;