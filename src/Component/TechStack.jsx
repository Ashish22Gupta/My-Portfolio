import React from 'react'
import { Code, Database, Server, Palette, Terminal, Cpu } from 'lucide-react'

const TechStack = ({currentTheme}) => {
  const techCategories = [
    {
      name: "Frontend",
      icon: <Palette className="w-5 h-5" />,
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Bootstrap5", "jQuery"]
    },
    {
      name: "Backend",
      icon: <Server className="w-5 h-5" />,
      skills: ["Java", "C#", ".NET", "Node.js", "PHP", "Express.js"]
    },
    {
      name: "Databases",
      icon: <Database className="w-5 h-5" />,
      skills: ["MySQL", "MongoDB", "SQL Server", "PL/SQL"]
    },
    {
      name: "Languages",
      icon: <Terminal className="w-5 h-5" />,
      skills: ["JavaScript", "Java", "C/C++", "C#", "Python"]
    },
    {
      name: "Tools",
      icon: <Cpu className="w-5 h-5" />,
      skills: ["Git", "GitHub", "VS Code", "Visual Studio", "Postman"]
    }
  ];

  return (
    <div className={`${currentTheme.card} ${currentTheme.shadow} rounded-2xl p-6 mb-6`}>
      <div className="flex items-center gap-3 mb-6">
        <Code className="w-7 h-7 text-blue-500 dark:text-blue-400" />
        <h2 className={`text-2xl font-bold ${currentTheme.textColor}`}>Tech Stack</h2>
      </div>
      
      <div className="space-y-6">
        {techCategories.map((category, index) => (
          <div key={index}>
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 bg-blue-100 dark:bg-blue-900/70 rounded-lg">
                <div className="text-blue-600 dark:text-blue-400">
                  {category.icon}
                </div>
              </div>
              <h3 className={`font-semibold text-lg ${currentTheme.textColor}`}>{category.name}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium hover:scale-105 transition-transform"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechStack
