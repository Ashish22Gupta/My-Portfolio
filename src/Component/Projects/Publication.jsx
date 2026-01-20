import React from 'react'
import { FileText, Calendar, User, ExternalLink } from 'lucide-react'

const Publication = ({currentTheme}) => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-6">
        <FileText className="w-8 h-8 text-blue-500" />
        <h1 className={`text-2xl font-bold ${currentTheme.textColor}`}>Publications</h1>
      </div>
      
      <div className={`${currentTheme.card} ${currentTheme.shadow} rounded-2xl p-6 border ${currentTheme.border}`}>
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className={`text-xl font-bold mb-2 ${currentTheme.textColor}`}>Data Warehouse and Data Mining for Business Intelligence</h3>
            <div className="flex items-center gap-4 mb-3">
              <span className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Calendar className="w-4 h-4" />
                NCRENB 2024
              </span>
              <span className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <User className="w-4 h-4" />
                Ashish Gupta
              </span>
            </div>
          </div>
        </div>
        
        <p className={`${currentTheme.main} mb-6 leading-relaxed`}>
          This paper presents a comprehensive exploration of the integration of data warehouse and data mining technologies to enhance business intelligence capabilities. Beginning with an overview of data warehouse architecture and its significance in centralizing and analyzing data, the paper categorizes data mining techniques into supervised, unsupervised, and semi-supervised learning, elucidating their roles in predictive analytics, customer segmentation, and market analysis.
        </p>
        
        <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105">
          <a 
            href={`${process.env.PUBLIC_URL}/Research Paper.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            View Publication
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </button>
      </div>
    </div>
  )
}

export default Publication
