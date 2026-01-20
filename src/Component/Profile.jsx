import React from "react";
import { Download, FileText, Briefcase, Clock } from 'lucide-react';

const Profile = ({ currentTheme }) => {
  function PDF() {
    window.open(`${process.env.PUBLIC_URL}/Ashish Gupta.pdf`, '_blank');
  }

  return (
    <div className={`${currentTheme.card} ${currentTheme.shadow} rounded-2xl p-6 mb-6 border ${currentTheme.border} text-center`}>
      <div className="relative mb-6">
        <img
          src={`${process.env.PUBLIC_URL}/MyPhoto.jpg`}
          className={`rounded-full h-40 w-40 mx-auto border-4 ${currentTheme.border} transition-all duration-500 hover:scale-110`}
          alt="Ashish Gupta"
        />
        <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full p-3 shadow-lg">
          <Briefcase className="w-5 h-5" />
        </div>
      </div>
      
      <div className="mb-6">
        <h1 className={`text-2xl font-bold mb-2 ${currentTheme.textColor}`}>Ashish Gupta</h1>
        <div className="text-lg font-medium mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Junior Software Engineer | Full-Stack Developer
        </div>
        
        {/* Experience Stats - Updated with gradient background */}
        <div className="grid grid-cols-1 gap-3 mb-4">
          <div className="text-center p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Clock className="w-5 h-5 text-white" />
              <div className="text-xl font-bold text-white">1 Year</div>
            </div>
            <div className="text-xs text-blue-100 font-medium">Internship Experience</div>
          </div>
        </div>
        
        <p className={`text-sm ${currentTheme.main}`}>
          Specializing in Java, .NET, React, and modern web technologies. Passionate about building scalable applications and solving complex problems.
        </p>
      </div>
      
      <button
        onClick={PDF}
        className="group w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-[1.02] shadow-lg text-sm"
      >
        <Download className="w-4 h-4" />
        Download Resume
        <FileText className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Profile;
