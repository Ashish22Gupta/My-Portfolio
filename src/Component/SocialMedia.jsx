import React from 'react'
import { Github, Globe, LucideLinkedin, Mail, MapPin, PhoneCall } from 'lucide-react';

const SocialMedia = ({currentTheme}) => {
  return (
    <div className={`${currentTheme.card} ${currentTheme.shadow} rounded-2xl p-6 mb-6`}>
      <h2 className={`text-2xl font-bold mb-6 ${currentTheme.textColor} group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}>Contact & Social</h2>
      
      <div className="space-y-4">
        {/* Based in */}
        <div className={`group flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${currentTheme.border} cursor-pointer hover:scale-[1.02] transition-all duration-300`}>
          <div className="p-2 bg-blue-100 dark:bg-blue-900/70 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
            <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors" />
          </div>
          <div className="flex-1">
            <div className={`text-sm ${currentTheme.main}`}>Based in</div>
            <div className={`font-medium ${currentTheme.textColor} group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}>India</div>
          </div>
        </div>

        {/* GitHub */}
        <a href="https://github.com/Ashish22Gupta" target="_blank" rel="noopener noreferrer" className="block">
          <div className={`group flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${currentTheme.border} cursor-pointer hover:scale-[1.02] transition-all duration-300`}>
            <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
              <Github className="w-5 h-5 text-gray-800 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            </div>
            <div className="flex-1">
              <div className={`text-sm ${currentTheme.main}`}>GitHub</div>
              <div className={`font-medium ${currentTheme.textColor} group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}>Ashish22Gupta</div>
            </div>
          </div>
        </a>

        {/* LinkedIn */}
        <a href="https://linkedin.com/in/guptaashish-agm22" target="_blank" rel="noopener noreferrer" className="block">
          <div className={`group flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${currentTheme.border} cursor-pointer hover:scale-[1.02] transition-all duration-300`}>
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
              <LucideLinkedin className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors" />
            </div>
            <div className="flex-1">
              <div className={`text-sm ${currentTheme.main}`}>LinkedIn</div>
              <div className={`font-medium ${currentTheme.textColor} group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}>guptaashish-agm22</div>
            </div>
          </div>
        </a>

        {/* Website */}
        <a href="https://portfolio-by-ashish-gupta.netlify.app" target="_blank" rel="noopener noreferrer" className="block">
          <div className={`group flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${currentTheme.border} cursor-pointer hover:scale-[1.02] transition-all duration-300`}>
            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg group-hover:bg-purple-200 dark:group-hover:bg-purple-800 transition-colors">
              <Globe className="w-5 h-5 text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors" />
            </div>
            <div className="flex-1">
              <div className={`text-sm ${currentTheme.main}`}>Website</div>
              <div className={`font-medium ${currentTheme.textColor} group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors break-all`}>portfolio-by-ashish</div>
            </div>
          </div>
        </a>

        {/* Email */}
        <a href="mailto:gupta.ashish.connect@gmail.com" className="block">
          <div className={`group flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${currentTheme.border} cursor-pointer hover:scale-[1.02] transition-all duration-300`}>
            <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg group-hover:bg-red-200 dark:group-hover:bg-red-800 transition-colors">
              <Mail className="w-5 h-5 text-red-600 dark:text-red-400 group-hover:text-red-700 dark:group-hover:text-red-300 transition-colors" />
            </div>
            <div className="flex-1">
              <div className={`text-sm ${currentTheme.main}`}>Email</div>
              <div className={`font-medium ${currentTheme.textColor} group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors break-all`}>gupta.ashish.connect</div>
            </div>
          </div>
        </a>

        {/* Phone */}
        <a href="tel:+917709139927" className="block">
          <div className={`group flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${currentTheme.border} cursor-pointer hover:scale-[1.02] transition-all duration-300`}>
            <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors">
              <PhoneCall className="w-5 h-5 text-green-600 dark:text-green-400 group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors" />
            </div>
            <div className="flex-1">
              <div className={`text-sm ${currentTheme.main}`}>Phone</div>
              <div className={`font-medium ${currentTheme.textColor} group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}>+91 7709139927</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
