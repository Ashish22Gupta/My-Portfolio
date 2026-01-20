import React from "react";
import Theme from "./Theme";
import Profile from "./Profile";
import SocialMedia from "./SocialMedia";
import TechStack from "./TechStack";
import Certification from "./Certification";
import Education from "./Education";
import Publication from "./Projects/Publication";
import Projects from "./Projects/Projects";
import { Calculator, Dumbbell, FileLock, Landmark, Monitor, MonitorCheck, RectangleEllipsis, Clock, Worm, Timer, Construction, Sun, Briefcase, Users, Building, Globe, Terminal, CheckCircle, Code, TrendingUp, Gamepad2, Scissors, HelpCircle, Calendar } from 'lucide-react';
import Copyright from "./Projects/Copyright";
import { useState } from "react";

const Card = () => {
  const [theme, setTheme] = useState('light');

  // Theme configurations
  const themes = {
    light: {
      backgroundColor: 'bg-gradient-to-br from-gray-50 to-gray-100',
      textColor: 'text-gray-900',
      bg: 'bg-white',
      main: 'text-gray-600',
      rightbg: 'bg-gradient-to-br from-white to-gray-50',
      border: 'border-gray-200',
      primary: 'text-blue-600 hover:text-blue-700',
      secondary: 'text-purple-600',
      accent: 'bg-gradient-to-r from-blue-500 to-purple-500',
      shadow: 'shadow-xl shadow-gray-200/50',
      card: 'bg-white',
    },
    dark: {
      backgroundColor: 'bg-gradient-to-br from-gray-900 to-gray-800',
      textColor: 'text-gray-100',
      bg: 'bg-gray-900',
      main: 'text-gray-400',
      rightbg: 'bg-gradient-to-br from-gray-800 to-gray-900',
      border: 'border-gray-700',
      primary: 'text-blue-400 hover:text-blue-300',
      secondary: 'text-purple-400',
      accent: 'bg-gradient-to-r from-blue-600 to-purple-600',
      shadow: 'shadow-xl shadow-black/50',
      card: 'bg-gray-800',
    },
    blue: {
      backgroundColor: 'bg-gradient-to-br from-blue-50 to-blue-100',
      textColor: 'text-blue-900',
      bg: 'bg-blue-50',
      main: 'text-blue-600',
      rightbg: 'bg-gradient-to-br from-blue-50 to-indigo-50',
      border: 'border-blue-200',
      primary: 'text-blue-700 hover:text-blue-800',
      secondary: 'text-indigo-600',
      accent: 'bg-gradient-to-r from-blue-600 to-indigo-600',
      shadow: 'shadow-xl shadow-blue-200/50',
      card: 'bg-white',
    },
    purple: {
      backgroundColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
      textColor: 'text-purple-900',
      bg: 'bg-purple-50',
      main: 'text-purple-600',
      rightbg: 'bg-gradient-to-br from-purple-50 to-pink-50',
      border: 'border-purple-200',
      primary: 'text-purple-700 hover:text-purple-800',
      secondary: 'text-pink-600',
      accent: 'bg-gradient-to-r from-purple-600 to-pink-600',
      shadow: 'shadow-xl shadow-purple-200/50',
      card: 'bg-white',
    }
  };

  const currentTheme = themes[theme];
  
  return (
    <div className={`${currentTheme.backgroundColor} ${currentTheme.textColor} w-full min-h-screen cursor-default flex flex-col xl:flex-row transition-all duration-300 p-4 xl:p-6`}>
      {/* Left Sidebar */}
      <div className="w-full xl:w-1/4 space-y-6">
        <Theme theme={theme} setTheme={setTheme} themes={themes} currentTheme={currentTheme}/>
        <Profile currentTheme={currentTheme} />
        <SocialMedia currentTheme={currentTheme} />
        <TechStack currentTheme={currentTheme} />
        <Certification currentTheme={currentTheme} />
        <Education currentTheme={currentTheme} />
      </div>
      
      {/* Main Content */}
      <div className="w-full xl:w-3/4 xl:pl-6 space-y-6">
        {/* Work Experience Section */}
        <div className={`${currentTheme.rightbg} ${currentTheme.shadow} rounded-2xl p-6`}>
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-8 h-8 text-blue-500" />
            <h1 className={`text-2xl xl:text-3xl font-bold ${currentTheme.textColor}`}>Work Experience</h1>
          </div>
          
          <div className="space-y-6">
            {/* Crayon Infotech */}
            <div className={`${currentTheme.card} ${currentTheme.shadow} rounded-xl p-6 border ${currentTheme.border}`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xl font-bold">Frontend Developer</p>
                    <p className="text-lg font-medium text-blue-600 dark:text-blue-400">Crayon Infotech</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium self-start sm:self-center">
                  Current
                </span>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className={`${currentTheme.main} text-sm`}>Present (2025 - Ongoing)</span>
                </div>
                <p className={`${currentTheme.main} mb-4 leading-relaxed`}>
                  As a Frontend Developer at Crayon Infotech, I specialize in building modern, responsive web applications using cutting-edge technologies. My role involves collaborating with cross-functional teams to deliver high-quality user interfaces and exceptional user experiences.
                </p>
              </div>
              
              <div>
                <h4 className={`font-semibold mb-3 ${currentTheme.textColor}`}>Key Responsibilities:</h4>
                <ul className={`space-y-2 ${currentTheme.main}`}>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                    <span>Developing responsive web applications using React, JavaScript, and modern CSS frameworks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                    <span>Implementing user interface components with a focus on performance and accessibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                    <span>Collaborating with UX/UI designers to translate designs into functional code</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                    <span>Integrating with backend APIs and ensuring seamless data flow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                    <span>Writing clean, maintainable code and conducting code reviews</span>
                  </li>
                </ul>
              </div>
              
              <div className={`mt-6 pt-6 border-t ${currentTheme.border}`}>
                <h4 className={`font-semibold mb-3 ${currentTheme.textColor}`}>Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Git', 'REST APIs', 'Figma','Bootstrap 5'].map((tech) => (
                    <span key={tech} className={`px-3 py-1 rounded-full text-sm font-medium ${currentTheme.accent} text-white`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Projects Section */}
        <div className={`${currentTheme.rightbg} ${currentTheme.shadow} rounded-2xl p-6`}>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Briefcase className="w-8 h-8 text-blue-500" />
              <h1 className={`text-2xl xl:text-3xl font-bold ${currentTheme.textColor}`}>GitHub Projects</h1>
            </div>
            <a 
              href="https://github.com/Ashish22Gupta"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-semibold px-4 py-2 rounded-lg border ${currentTheme.border} transition-all duration-300 group ${
                theme === 'light' ? 'bg-blue-600 text-white hover:bg-blue-700 hover:text-white' : 
                theme === 'dark' ? 'bg-blue-500 text-white hover:bg-blue-600 hover:text-white' :
                theme === 'blue' ? 'bg-blue-600 text-white hover:bg-blue-700 hover:text-white' :
                'bg-purple-600 text-white hover:bg-purple-700 hover:text-white'
              }`}
            >
              See All →
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Bank Management System */}
            <a href="https://github.com/Ashish22Gupta/Bank-Management-System" target="_blank" rel="noopener noreferrer">
              <Projects
                title="Bank Management System"
                description="Three-tier banking system with Admin, Employee, and Customer panels for comprehensive financial operations."
                technology="Java Swing, MySQL"
                logo={<Landmark className="w-6 h-6" />}
                currentTheme={currentTheme}
              />
            </a>

            {/* Product Management System */}
            <a href="https://github.com/Ashish22Gupta/Product-Management-System" target="_blank" rel="noopener noreferrer">
              <Projects
                title="Product Management System"
                description="Full-stack e-commerce platform with admin product management and user shopping system."
                technology="Java, JSP, Servlet, MySQL"
                logo={<MonitorCheck className="w-6 h-6" />}
                currentTheme={currentTheme}
              />
            </a>

            {/* Basic Calculator */}
            <a href="https://github.com/Ashish22Gupta/Basic-Calculator" target="_blank" rel="noopener noreferrer">
              <Projects
                title="Arithmetic Calculator"
                description="Desktop calculator application with comprehensive arithmetic operations and intuitive GUI interface."
                technology="Java Swing"
                logo={<Calculator className="w-6 h-6" />}
                currentTheme={currentTheme}
              />
            </a>

            {/* Tic Tac Toe */}
            <a href="https://github.com/Ashish22Gupta/Tic-Tac-Toe" target="_blank" rel="noopener noreferrer">
              <Projects
                title="Tic Tac Toe Game"
                description="Command-line Tic Tac Toe implementation with intelligent AI opponent and game state tracking."
                technology="Python"
                logo={<Gamepad2 className="w-6 h-6" />}
                currentTheme={currentTheme}
              />
            </a>

            {/* Rock Paper Scissors */}
            <a href="https://github.com/Ashish22Gupta/Rock-Paper-Scissors" target="_blank" rel="noopener noreferrer">
              <Projects
                title="Rock Paper Scissors"
                description="Interactive terminal game with emoji visuals, score tracking, and randomized computer opponent."
                technology="Python"
                logo={<Scissors className="w-6 h-6" />}
                currentTheme={currentTheme}
              />
            </a>

            {/* Hangman Game */}
            <a href="https://github.com/Ashish22Gupta/Hangman-game" target="_blank" rel="noopener noreferrer">
              <Projects
                title="Hangman Game"
                description="Terminal-based word guessing game with dynamic difficulty and visual hangman progression."
                technology="Python"
                logo={<HelpCircle className="w-6 h-6" />}
                currentTheme={currentTheme}
              />
            </a>

            {/* Age Calculator */}
            <a href="https://github.com/Ashish22Gupta/Age-Calculator" target="_blank" rel="noopener noreferrer">
              <Projects
                title="Age Calculator"
                description="Web-based age calculation tool with precise date difference computation and user-friendly interface."
                technology="PHP, HTML5, CSS3"
                logo={<Calendar className="w-6 h-6" />}
                currentTheme={currentTheme}
              />
            </a>

            {/* Snake Game */}
            <a href="https://blockade-snake-gmae.netlify.app" target="_blank" rel="noopener noreferrer">
              <Projects
                title="Snake Game"
                description="Classic Snake game with modern UI, score tracking, and responsive design."
                technology="HTML5, CSS3, JavaScript, jQuery"
                logo={<Worm className="w-6 h-6" />}
                currentTheme={currentTheme}
              />
            </a>

            {/* Web Calculator */}
            <a href="https://basic-arithmatic-calculator.netlify.app" target="_blank" rel="noopener noreferrer">
              <Projects
                title="Web Calculator"
                description="Advanced web calculator with arithmetic operations and memory functions."
                technology="HTML5, CSS3, JavaScript"
                logo={<Calculator className="w-6 h-6" />}
                currentTheme={currentTheme}
              />
            </a>

            {/* Analog Clock */}
            <a href="https://analog-clock-timer.netlify.app" target="_blank" rel="noopener noreferrer">
              <Projects
                title="Analog Clock"
                description="Beautiful analog clock with smooth animations and date display."
                technology="HTML5, CSS3, JavaScript"
                logo={<Clock className="w-6 h-6" />}
                currentTheme={currentTheme}
              />
            </a>

            {/* Stopwatch */}
            <a href="https://peaclock.netlify.app" target="_blank" rel="noopener noreferrer">
              <Projects
                title="Stopwatch & Timer"
                description="Feature-rich stopwatch with lap timer and countdown functionality."
                technology="HTML5, CSS3, JavaScript"
                logo={<Timer className="w-6 h-6" />}
                currentTheme={currentTheme}
              />
            </a>

            {/* To-Do List */}
            <a href="https://to-do-list-task-tracker.netlify.app" target="_blank" rel="noopener noreferrer">
              <Projects
                title="To-Do List Manager"
                description="Task management with priority levels, due dates, and progress tracking."
                technology="HTML5, CSS3, JavaScript, Local Storage"
                logo={<Construction className="w-6 h-6" />}
                currentTheme={currentTheme}
              />
            </a>

            {/* Digital Clock */}
            <a href="https://timekeeper-digital-clock.netlify.app" target="_blank" rel="noopener noreferrer">
              <Projects
                title="Digital Clock"
                description="Modern digital clock with timezone support and alarm functionality."
                technology="HTML5, CSS3, JavaScript"
                logo={<Clock className="w-6 h-6" />}
                currentTheme={currentTheme}
              />
            </a>

            {/* Interactive Bulb */}
            <a href="https://toggle-light-project.netlify.app" target="_blank" rel="noopener noreferrer">
              <Projects
                title="Interactive Bulb"
                description="Interactive light bulb simulation with toggle and brightness control."
                technology="HTML5, CSS3, JavaScript"
                logo={<Sun className="w-6 h-6" />}
                currentTheme={currentTheme}
              />
            </a>

            {/* Password Strength Checker */}
            <a href="https://password-strength-validation.netlify.app" target="_blank" rel="noopener noreferrer">
              <Projects
                title="Password Strength Checker"
                description="Real-time password analyzer with visual feedback and security suggestions."
                technology="HTML5, CSS3, JavaScript"
                logo={<FileLock className="w-6 h-6" />}
                currentTheme={currentTheme}
              />
            </a>

            {/* BMI Calculator */}
            <a href="https://body-mass-index-checker.netlify.app" target="_blank" rel="noopener noreferrer">
              <Projects
                title="BMI Calculator"
                description="Body Mass Index calculator with health recommendations and tracking."
                technology="HTML5, CSS3, JavaScript"
                logo={<Dumbbell className="w-6 h-6" />}
                currentTheme={currentTheme}
              />
            </a>

            {/* Password Generator */}
            <a href="https://passwordkeeper.netlify.app" target="_blank" rel="noopener noreferrer">
              <Projects
                title="Password Generator"
                description="Secure password generator with customizable options."
                technology="HTML5, CSS3, JavaScript"
                logo={<RectangleEllipsis className="w-6 h-6" />}
                currentTheme={currentTheme}
              />
            </a>

            {/* Solar System Explorer */}
            <a href="https://solar-systems-explorer.netlify.app" target="_blank" rel="noopener noreferrer">
              <Projects
                title="Solar System Explorer"
                description="Interactive 3D solar system visualization with planet information."
                technology="HTML5, CSS3, JavaScript, Three.js"
                logo={<Globe className="w-6 h-6" />}
                currentTheme={currentTheme}
              />
            </a>

            {/* Portfolio Website */}
            <a href="https://portfolio-by-ashish-gupta.netlify.app" target="_blank" rel="noopener noreferrer">
              <Projects
                title="Portfolio Website"
                description="Modern portfolio website with theme switching and responsive design."
                technology="React, Tailwind CSS, JavaScript"
                logo={<Briefcase className="w-6 h-6" />}
                currentTheme={currentTheme}
              />
            </a>

            {/* ATM Interface */}
            <a href="https://github.com/Ashish22Gupta/ATM-interface" target="_blank" rel="noopener noreferrer">
              <Projects
                title="ATM Interface"
                description="Console-based ATM system with deposit, withdrawal, and account management."
                technology="C++"
                logo={<Terminal className="w-6 h-6" />}
                currentTheme={currentTheme}
              />
            </a>

            {/* GK Quiz */}
            <a href="https://github.com/Ashish22Gupta/Basic_General_knowledge_question" target="_blank" rel="noopener noreferrer">
              <Projects
                title="General Knowledge Quiz"
                description="Interactive quiz application with login/register and score tracking."
                technology="Java Swing"
                logo={<Monitor className="w-6 h-6" />}
                currentTheme={currentTheme}
              />
            </a>
          </div>
        </div>

        {/* Publication Section */}
        <div className={`${currentTheme.rightbg} ${currentTheme.shadow} rounded-2xl p-6`}>
          <Publication currentTheme={currentTheme} />
        </div>

        {/* Professional Projects Section */}
        <div className={`${currentTheme.rightbg} ${currentTheme.shadow} rounded-2xl p-6`}>
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-8 h-8 text-green-500" />
            <h1 className={`text-2xl xl:text-3xl font-bold ${currentTheme.textColor}`}>Professional Projects</h1>
          </div>
          
          <div className="space-y-8">
            {/* Mars Enterprises Project */}
            <div className="space-y-2">
              <a href="https://mars-enterprises.netlify.app" target="_blank" rel="noopener noreferrer">
                <div className={`${currentTheme.card} ${currentTheme.shadow} rounded-xl p-6 hover:scale-[1.02] transition-all duration-300 border ${currentTheme.border}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <Building className="w-7 h-7 text-blue-500" />
                      <div>
                        <p className="text-xl font-bold">Mars Enterprises Website</p>
                        <p className={`${currentTheme.main} text-sm`}>
                          6 months (2024)
                        </p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium self-start sm:self-center">
                      Professional
                    </span>
                  </div>
                  <p className={`${currentTheme.main} mb-4 leading-relaxed`}>
                    Developed a responsive corporate website using HTML5, CSS3, JavaScript, Node.js, Express.js, and MongoDB. Implemented RESTful APIs and optimized performance for better user experience.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'].map((tech) => (
                      <span key={tech} className={`px-3 py-1 rounded-full text-sm font-medium ${currentTheme.accent} text-white`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </div>

            {/* I-DigiTech Project */}
            <div className="space-y-2">
              <a href="https://github.com/Ashish22Gupta/Attendance-Management-System" target="_blank" rel="noopener noreferrer">
                <div className={`${currentTheme.card} ${currentTheme.shadow} rounded-xl p-6 hover:scale-[1.02] transition-all duration-300 border ${currentTheme.border}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <Users className="w-7 h-7 text-purple-500" />
                      <div>
                        <p className="text-xl font-bold">Attendance Management System</p>
                        <p className={`${currentTheme.main} text-sm`}>
                          6 months (2024 - 2025)
                        </p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium self-start sm:self-center">
                      Enterprise
                    </span>
                  </div>
                  <p className={`${currentTheme.main} mb-4 leading-relaxed`}>
                    Built a comprehensive web-based attendance tracking system for I-DigiTech Skills and Solutions. Features include employee check-in/out, leave management, and report generation.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Java', 'JSP', 'Servlet', 'MySQL', 'HTML5', 'CSS3'].map((tech) => (
                      <span key={tech} className={`px-3 py-1 rounded-full text-sm font-medium ${currentTheme.accent} text-white`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={`${currentTheme.card} ${currentTheme.shadow} rounded-2xl p-6`}>
          <Copyright currentTheme={currentTheme} />
        </div>
      </div>
    </div>
  );
};

export default Card;
