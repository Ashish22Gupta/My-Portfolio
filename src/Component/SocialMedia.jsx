import React from 'react'
import { Github, Globe, LucideLinkedin, Mail, MapPin, PhoneCall } from 'lucide-react';

const SocialMedia = ({currentTheme}) => {
  return (
    <div className={`${currentTheme.card} ${currentTheme.shadow} rounded-2xl p-6 mb-6`}>
      <h2 className={`text-2xl font-bold mb-6 ${currentTheme.textColor}`}>Contact & Social</h2>
      
      <div className="space-y-4">
        <div className={`flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${currentTheme.border}`}>
          <div className="p-2 bg-blue-100 dark:bg-blue-900/70 rounded-lg">
            <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="flex-1">
            <div className={`text-sm ${currentTheme.main}`}>Based in</div>
            <div className={`font-medium ${currentTheme.textColor}`}>India</div>
          </div>
        </div>

        <div className={`flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${currentTheme.border}`}>
          <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <Github className="w-5 h-5 text-gray-800 dark:text-gray-300" />
          </div>
          <div className="flex-1">
            <div className={`text-sm ${currentTheme.main}`}>GitHub</div>
            <a 
              href="https://github.com/Ashish22Gupta" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${currentTheme.textColor}`}
            >
              Ashish22Gupta
            </a>
          </div>
        </div>

        <div className={`flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${currentTheme.border}`}>
          <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
            <LucideLinkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="flex-1">
            <div className={`text-sm ${currentTheme.main}`}>LinkedIn</div>
            <a 
              href="https://linkedin.com/in/guptaashish-agm22" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${currentTheme.textColor}`}
            >
              guptaashish-agm22
            </a>
          </div>
        </div>

        <div className={`flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${currentTheme.border}`}>
          <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
            <Globe className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          </div>
          <div className="flex-1">
            <div className={`text-sm ${currentTheme.main}`}>Website</div>
            <a 
              href="https://rb.gy/pfp8bo" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all ${currentTheme.textColor}`}
            >
              portfolio-by-ashish
            </a>
          </div>
        </div>

        <div className={`flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${currentTheme.border}`}>
          <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
            <Mail className="w-5 h-5 text-red-600 dark:text-red-400" />
          </div>
          <div className="flex-1">
            <div className={`text-sm ${currentTheme.main}`}>Email</div>
            <a 
              href="mailto:gupta.ashish.connect@gmail.com"
              className={`font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all ${currentTheme.textColor}`}
            >
              gupta.ashish.connect
            </a>
          </div>
        </div>

        <div className={`flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${currentTheme.border}`}>
          <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
            <PhoneCall className="w-5 h-5 text-green-600 dark:text-green-400" />
          </div>
          <div className="flex-1">
            <div className={`text-sm ${currentTheme.main}`}>Phone</div>
            <a 
              href="tel:+917709139927"
              className={`font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${currentTheme.textColor}`}
            >
              +91 7709139927
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialMedia
