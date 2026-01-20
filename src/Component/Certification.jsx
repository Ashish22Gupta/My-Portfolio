import React from 'react'
import { Award, Calendar, Building, Database, Terminal, Server, Code, Globe } from 'lucide-react'

const Certification = ({currentTheme}) => {
    const certifications = [
        { 
            date: "Mar 2024", 
            name: "Web Development", 
            issuer: "I-Tech Computer Classes", 
            icon: <Globe className="w-5 h-5" />,
            iconColor: "text-blue-600",
            bgColor: "bg-blue-100"
        },
        { 
            date: "Jan 2024", 
            name: "C/C++ Programming", 
            issuer: "I-Tech Computer Classes", 
            icon: <Terminal className="w-5 h-5" />,
            iconColor: "text-green-600",
            bgColor: "bg-green-100"
        },
        { 
            date: "Mar 2024", 
            name: "SQL & Database Design", 
            issuer: "I-Tech Computer Classes", 
            icon: <Database className="w-5 h-5" />,
            iconColor: "text-purple-600",
            bgColor: "bg-purple-100"
        },
        { 
            date: "Mar 2024", 
            name: "MySQL Development", 
            issuer: "I-Tech Computer Classes", 
            icon: <Server className="w-5 h-5" />,
            iconColor: "text-orange-600",
            bgColor: "bg-orange-100"
        },
        { 
            date: "2024", 
            name: "Node.js Development", 
            issuer: "I-Tech Computer Classes", 
            icon: <Code className="w-5 h-5" />,
            iconColor: "text-red-600",
            bgColor: "bg-red-100"
        },
        { 
            date: "2024", 
            name: "PHP Programming", 
            issuer: "I-Tech Computer Classes", 
            icon: <Terminal className="w-5 h-5" />,
            iconColor: "text-indigo-600",
            bgColor: "bg-indigo-100"
        },
        { 
            date: "Mar 2024", 
            name: "Web Development", 
            issuer: "Coursera", 
            icon: <Globe className="w-5 h-5" />,
            iconColor: "text-pink-600",
            bgColor: "bg-pink-100"
        },
        { 
            date: "Mar 2024", 
            name: "Enhancing Soft Skills", 
            issuer: "NPTEL", 
            icon: <Award className="w-5 h-5" />,
            iconColor: "text-yellow-600",
            bgColor: "bg-yellow-100"
        },
        { 
            date: "Mar 2024", 
            name: "Soft Skill Development", 
            issuer: "NPTEL", 
            icon: <Award className="w-5 h-5" />,
            iconColor: "text-teal-600",
            bgColor: "bg-teal-100"
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
                <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg">
                    <Award className="w-6 h-6 text-white" />
                </div>
                <h2 className={`text-2xl font-bold ${currentTheme.textColor}`}>Certifications</h2>
            </div>
            
            <div className="space-y-4">
                {certifications.map((cert, index) => (
                    <div 
                        key={index} 
                        className={`p-4 rounded-xl border ${currentTheme.border} hover:scale-[1.02] transition-all duration-300 hover:shadow-lg ${getHoverBackground()}`}
                    >
                        <div className="flex items-start gap-4">
                            <div className={`p-3 rounded-xl ${cert.bgColor} ${getDarkModeBg(cert.bgColor)}`}>
                                <div className={cert.iconColor}>
                                    {cert.icon}
                                </div>
                            </div>
                            
                            <div className="flex-1 min-w-0">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                                    <h3 className={`font-bold text-lg ${currentTheme.textColor}`}>{cert.name}</h3>
                                    <span className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                                        <Calendar className="w-3 h-3" />
                                        {cert.date}
                                    </span>
                                </div>
                                
                                <div className="flex items-center gap-2">
                                    <Building className="w-4 h-4 text-gray-400" />
                                    <span className={`${currentTheme.main} truncate`}>{cert.issuer}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Certification
