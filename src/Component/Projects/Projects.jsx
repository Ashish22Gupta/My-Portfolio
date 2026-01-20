import React from 'react';

const Projects = (props) => {
  const { currentTheme, logo, title, description, technology } = props;

  return (
    <div className={`${currentTheme.card} ${currentTheme.shadow} rounded-xl p-5 h-full border ${currentTheme.border} hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 group cursor-pointer`}>
      <div className="flex items-start gap-4 mb-4">
        <div className={`p-3 rounded-xl ${currentTheme.accent} text-white flex-shrink-0`}>
          {logo}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className={`text-lg font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate`}>
            {title}
          </h3>
          <p className={`${currentTheme.main} text-sm leading-relaxed mb-4 line-clamp-3`}>
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {technology.split(', ').map((tech, index) => (
              <span
                key={index}
                className={`px-2 py-1 rounded-full text-xs font-medium ${currentTheme.accent} text-white`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
