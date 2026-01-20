import React from "react";
import { Palette, Sun, Moon, Droplet, Sparkles } from 'lucide-react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const Theme = ({ theme, setTheme, themes, currentTheme }) => {
  const themeOptions = [
    { id: 'light', name: 'Light', icon: <Sun className="w-5 h-5" />, color: 'text-yellow-500' },
    { id: 'dark', name: 'Dark', icon: <Moon className="w-5 h-5" />, color: 'text-blue-400' },
    { id: 'blue', name: 'Ocean', icon: <Droplet className="w-5 h-5" />, color: 'text-blue-500' },
    { id: 'purple', name: 'Royal', icon: <Sparkles className="w-5 h-5" />, color: 'text-purple-500' },
  ];

  return (
    <div className={`${currentTheme.card} ${currentTheme.shadow} rounded-2xl p-6 mb-6 border ${currentTheme.border}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Palette className={`w-7 h-7 ${currentTheme.primary}`} />
          <div>
            <h1 className={`text-xl font-bold ${currentTheme.textColor}`}>Theme</h1>
            <p className={`${currentTheme.main} text-sm capitalize`}>{theme}</p>
          </div>
        </div>
        
        <Menu as="div" className="relative">
          <MenuButton className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium ${currentTheme.accent} text-white hover:opacity-90 transition-all`}>
            <Palette className="w-5 h-5" />
            Change Theme
            <ChevronDownIcon className="w-5 h-5" />
          </MenuButton>

          <MenuItems className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none p-1">
            {themeOptions.map((option) => (
              <MenuItem key={option.id}>
                <button
                  onClick={() => setTheme(option.id)}
                  className={`group flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm transition-all hover:bg-gray-100 ${
                    theme === option.id ? 'bg-gray-100' : ''
                  }`}
                >
                  <span className={option.color}>{option.icon}</span>
                  <span className="text-gray-900 font-medium">{option.name}</span>
                  {theme === option.id && (
                    <span className="ml-auto w-2 h-2 rounded-full bg-blue-500"></span>
                  )}
                </button>
              </MenuItem>
            ))}
          </MenuItems>
        </Menu>
      </div>
      
      <div className="mt-4 grid grid-cols-2 gap-2">
        {themeOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => setTheme(option.id)}
            className={`flex items-center gap-2 p-3 rounded-lg border transition-all duration-200 ${
              theme === option.id 
                ? `${currentTheme.accent} text-white border-transparent` 
                : `${currentTheme.border} ${
                    theme === 'dark' 
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white' 
                      : 'bg-white text-gray-800 hover:bg-gray-100'
                  }`
            }`}
          >
            {option.icon}
            <span className="font-medium">{option.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Theme;
