import React from 'react'
import { GraduationCap, Calendar, Building, Award } from 'lucide-react'

const Education = ({currentTheme}) => {
  const education = [
    { 
        period: "2022 - 2024", 
        degree: "Master of Computer Applications (MCA)", 
        institution: "Viva Institute of Technology", 
        //score: "CGPA: 8.22",
        icon: <GraduationCap className="w-5 h-5" />,
        iconColor: "text-blue-600",
        bgColor: "bg-blue-100"
    },
    { 
        period: "2018 - 2021", 
        degree: "Bachelor of Commerce (B.Com)", 
        institution: "Viva College of Commerce", 
        //score: "Graduated",
        icon: <Building className="w-5 h-5" />,
        iconColor: "text-green-600",
        bgColor: "bg-green-100"
    },
    { 
        period: "2016 - 2018", 
        degree: "Higher Secondary (HSC)", 
        institution: "Utkarsh Vidyalaya", 
        //score: "Completed",
        icon: <Award className="w-5 h-5" />,
        iconColor: "text-purple-600",
        bgColor: "bg-purple-100"
    },
    { 
        period: "2015 - 2016", 
        degree: "Secondary (SSC)", 
        institution: "Lokmanya Hindi High School", 
        //score: "Completed",
        icon: <Award className="w-5 h-5" />,
        iconColor: "text-orange-600",
        bgColor: "bg-orange-100"
    },
  ];

  // Adjust background colors for dark theme
  const getDarkModeBg = (bgColor) => {
      const colorMap = {
          'bg-blue-100': 'dark:bg-blue-900/70',
          'bg-green-100': 'dark:bg-green-900/70',
          'bg-purple-100': 'dark:bg-purple-900/70',
          'bg-orange-100': 'dark:bg-orange-900/70',
          'bg-red-100': 'dark:bg-red-900/70',
          'bg-indigo-100': 'dark:bg-indigo-900/70',
          'bg-pink-100': 'dark:bg-pink-900/70',
          'bg-yellow-100': 'dark:bg-yellow-900/70',
          'bg-teal-100': 'dark:bg-teal-900/70',
      };
      return colorMap[bgColor] || 'dark:bg-gray-800';
  };

  // Get appropriate hover background based on theme
  const getHoverBackground = () => {
    if (currentTheme.bg === 'bg-gray-900') {
        return 'hover:bg-gray-800/70'; // Dark theme
    } else if (currentTheme.bg === 'bg-blue-50') {
        return 'hover:bg-blue-100/50'; // Ocean theme
    } else if (currentTheme.bg === 'bg-purple-50') {
        return 'hover:bg-purple-100/50'; // Royal theme
    } else {
        return 'hover:bg-gray-50'; // Light theme
    }
  };

  return (
    <div className={`${currentTheme.card} ${currentTheme.shadow} rounded-2xl p-6 mb-6`}>
        <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h2 className={`text-2xl font-bold ${currentTheme.textColor}`}>Education</h2>
        </div>
        
        <div className="space-y-4">
            {education.map((edu, index) => (
                <div 
                    key={index} 
                    className={`p-4 rounded-xl border ${currentTheme.border} hover:scale-[1.02] transition-all duration-300 hover:shadow-lg ${getHoverBackground()}`}
                >
                    <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl ${edu.bgColor} ${getDarkModeBg(edu.bgColor)}`}>
                            <div className={edu.iconColor}>
                                {edu.icon}
                            </div>
                        </div>
                        
                        <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                                <div>
                                    <h3 className={`font-bold text-lg ${currentTheme.textColor}`}>{edu.degree}</h3>
                                    <div className="flex items-center gap-2 mt-1">
                                        <Calendar className="w-3 h-3 text-gray-400" />
                                        <span className={`${currentTheme.main} text-sm`}>{edu.period}</span>
                                    </div>
                                </div>
                                {edu.score && (
                                    <div className="px-3 py-1 bg-green-100 dark:bg-green-900/70 text-green-800 dark:text-green-300 rounded-full text-sm font-medium whitespace-nowrap">
                                        {edu.score}
                                    </div>
                                )}
                            </div>
                            
                            <div className="flex items-center gap-2 mt-2">
                                <Building className="w-4 h-4 text-gray-400" />
                                <span className={`${currentTheme.main}`}>{edu.institution}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Education
